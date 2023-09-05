import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import LocalePermissionForm from '../../components/LocalePermissionForm/LocalePermissionForm';
import SmallPagination from '../../components/Pagination/Pagination';
import { ILocalePermission } from '../../interfaces/LocalePermission';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import {
  Content,
  DataText,
  IconButton,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  Title,
} from './styles';

const LocalePermissions = () => {
  const [localePermissions, setLocalePermissions] = useState<
    ILocalePermission[]
  >([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);

  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    getLocalePermissions();
  }, [page]);

  const getLocalePermissions = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<ILocalePermission>>(
        '/locale-permissions',
        {
          params: {
            /* 'sort[0]': 'cityPermisson:desc',
            'sort[1]': 'statePermission:desc',
            'sort[2]': 'cep:asc', */
            'pagination[page]': page,
            'pagination[pageSize]': 100,
          },
        },
      );

      setLocalePermissions(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    }
  };

  const handleConfirmDelete = async () => {
    if (!idToDelete) {
      return;
    }

    try {
      await api.delete(`/locale-permissions/${idToDelete}`);

      setIdToDelete(0);
      handleSuccess('Local excluído com sucesso!');
      getLocalePermissions();
    } catch (error) {
      handleError(error);
    }
  };

  const renderPermissionLocale = (permission: ILocalePermission) => {
    if (permission.attributes.statePermission) {
      return permission.attributes.stateName;
    }

    if (permission.attributes.cityPermisson) {
      return `${permission.attributes.cityName} - ${permission.attributes.stateName}`;
    }

    return permission.attributes.cep;
  };

  const renderPermissionIbgeCode = (permission: ILocalePermission) => {
    if (permission.attributes.statePermission) {
      return permission.attributes.stateIBGECod;
    }

    if (permission.attributes.cityPermisson) {
      return permission.attributes.cityIBGECod;
    }

    return '-';
  };

  const renderPermissionType = (permission: ILocalePermission) => {
    if (permission.attributes.statePermission) {
      return 'Estado';
    }

    if (permission.attributes.cityPermisson) {
      return 'Cidade';
    }

    return 'CEP';
  };

  return (
    <Content>
      <Title>Locais permitidos</Title>

      <LocalePermissionForm onSuccess={getLocalePermissions} />

      <TableHeaderRow>
        <TableHeaderData>Tipo</TableHeaderData>
        <TableHeaderData>Local</TableHeaderData>
        <TableHeaderData>Código IBGE</TableHeaderData>
        <TableHeaderData />
      </TableHeaderRow>

      <TableBody>
        {localePermissions.map(localePermission => (
          <TableRow key={localePermission.id}>
            <TableData>
              <DataText>{renderPermissionType(localePermission)}</DataText>
            </TableData>
            <TableData>
              <DataText>{renderPermissionLocale(localePermission)}</DataText>
            </TableData>
            <TableData>
              <DataText>{renderPermissionIbgeCode(localePermission)}</DataText>
            </TableData>
            <TableData>
              <IconButton
                type="button"
                onClick={() => {
                  setIdToDelete(localePermission.id);
                }}
              >
                <FiTrash2 />
              </IconButton>
            </TableData>
          </TableRow>
        ))}
      </TableBody>

      <SmallPagination
        currentPage={page}
        total={maximumPage}
        handleChange={(_, newPage) => setPage(newPage)}
      />
      {!!idToDelete && (
        <ConfirmModal
          message="Tem certeza que deseja excluir este local?"
          onClose={() => setIdToDelete(0)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Content>
  );
};

export default LocalePermissions;
