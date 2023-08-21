import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import Layout from '../../components/Layout/Layout';
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
            sort: 'cityName:asc',
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

  return (
    <Layout>
      <Content>
        <Title>Locais permitidos</Title>

        <LocalePermissionForm onSuccess={getLocalePermissions} />

        <TableHeaderRow>
          <TableHeaderData>CEP</TableHeaderData>
          <TableHeaderData>Cidade</TableHeaderData>
          <TableHeaderData>Código Cidade</TableHeaderData>
          <TableHeaderData>Permitir Cidade</TableHeaderData>
          <TableHeaderData>Estado</TableHeaderData>
          <TableHeaderData>Código Estado</TableHeaderData>
          <TableHeaderData>Permitir Estado</TableHeaderData>
          <TableHeaderData />
        </TableHeaderRow>

        <TableBody>
          {localePermissions.map(localePermission => (
            <TableRow key={localePermission.id}>
              <TableData>
                <DataText>{localePermission.attributes.cep}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.cityName}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.cityIBGECod}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {localePermission.attributes.cityPermisson ? 'Sim' : 'Não'}
                </DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.stateName}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.stateIBGECod}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {localePermission.attributes.statePermission ? 'Sim' : 'Não'}
                </DataText>
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
    </Layout>
  );
};

export default LocalePermissions;
