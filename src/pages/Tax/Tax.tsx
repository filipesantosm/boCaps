import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import EditTaxModal from '../../components/EditTaxModal/EditTaxModal';
import EditTaxSuccess from '../../components/EditTaxSuccess/EditTaxSuccess';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import handleError, { handleSuccess } from '../../services/handleToast';
import {
  Container,
  Content,
  DeleteIcon,
  EditDivider,
  EditIcon,
  MainForm,
  SearchDivider,
  SearchIcon,
  SearchInput,
  TableBody,
  TableHeader,
  TableHeaderDivider,
  TaxComp,
  TaxCompDivider,
  TaxCompText,
  TaxText,
  Title,
  TitleDivider,
  TitleIcon,
  WarnIcon,
} from './styles';

const Tax = () => {
  const [page, setPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editModal, setEditModal] = useState('');
  const [editSuccess, setEditSuccess] = useState(false);

  // mock

  const taxes = [
    {
      id: '1',
      name: 'Atenas Golf Club',
      tax: '50%',
    },
    {
      id: '2',
      name: 'Country Golf Club',
      tax: '0',
    },
  ];

  const handleDeleteTax = async (id: string) => {
    try {
      handleSuccess('Taxa deletada com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Taxas</Title>
          </TitleDivider>

          <TableHeader>
            <TableHeaderDivider>N°</TableHeaderDivider>

            <TableHeaderDivider>
              Nome
              <SearchDivider>
                <SearchIcon />

                <SearchInput
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Buscar clube"
                />
              </SearchDivider>
            </TableHeaderDivider>

            <TableHeaderDivider onClick={() => setDropdownOpen(!dropdownOpen)}>
              Taxa {dropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
            </TableHeaderDivider>

            <TableHeaderDivider />
          </TableHeader>

          <TableBody>
            {taxes.length > 0 &&
              taxes.map(tax => (
                <TaxComp key={tax.id}>
                  <TaxCompDivider>
                    <TaxCompText>{tax.id}</TaxCompText>
                  </TaxCompDivider>

                  <TaxCompDivider>
                    <TaxCompText>{tax.name}</TaxCompText>
                  </TaxCompDivider>

                  <TaxCompDivider>
                    <EditDivider>
                      <TaxText>{tax.tax}</TaxText>

                      <EditIcon onClick={() => setEditModal(tax.id)} />
                    </EditDivider>
                  </TaxCompDivider>

                  <TaxCompDivider
                    style={{ cursor: tax.tax !== '0' ? 'pointer' : 'default' }}
                    onClick={() =>
                      tax.tax !== '0' ? handleDeleteTax(tax.id) : ''
                    }
                  >
                    {tax.tax === '0' ? (
                      <>
                        <WarnIcon />

                        <TaxCompText hasTax={tax.tax !== '0'}>
                          Ainda não foi adicionada uma taxa
                        </TaxCompText>
                      </>
                    ) : (
                      <>
                        <DeleteIcon />

                        <TaxCompText hasTax={tax.tax !== '0'}>
                          Excluir taxa
                        </TaxCompText>
                      </>
                    )}
                  </TaxCompDivider>
                </TaxComp>
              ))}
          </TableBody>

          <SmallPagination
            total={5}
            currentPage={page}
            handleChange={() => setPage(page + 1)}
          />
        </MainForm>
      </Content>

      {editModal && (
        <EditTaxModal
          isOpen={setEditModal}
          isOtherOpen={setEditSuccess}
          id={editModal}
        />
      )}

      {editSuccess && <EditTaxSuccess isOpen={setEditSuccess} />}
    </Container>
  );
};

export default Tax;
