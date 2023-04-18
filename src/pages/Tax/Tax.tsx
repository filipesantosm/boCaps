import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import EditTaxModal from '../../components/EditTaxModal/EditTaxModal';
import EditTaxSuccess from '../../components/EditTaxSuccess/EditTaxSuccess';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  BirthdayFilter,
  BirthdayText,
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
import DeleteTax from '../../components/DeleteTax/DeleteTax';
import DeleteTaxSuccess from '../../components/DeleteTaxSuccess/DeleteTaxSuccess';

const Tax = () => {
  const [page, setPage] = useState(1);
  const [taxFilter, setTaxFilter] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editModal, setEditModal] = useState('');
  const [editSuccess, setEditSuccess] = useState(false);
  const [deleteTax, setDeleteTax] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);

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
              {dropdownOpen && (
                <BirthdayFilter>
                  <BirthdayText onClick={() => setTaxFilter('cresc')}>
                    Crescente
                  </BirthdayText>

                  <BirthdayText onClick={() => setTaxFilter('desc')}>
                    Decrescente
                  </BirthdayText>

                  <BirthdayText onClick={() => setTaxFilter('noTax')}>
                    Sem taxa
                  </BirthdayText>

                  <BirthdayText onClick={() => setTaxFilter('all')}>
                    Todos
                  </BirthdayText>
                </BirthdayFilter>
              )}
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
                      tax.tax !== '0' ? setDeleteTax(tax.id) : ''
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

      {deleteTax !== '' && (
        <DeleteTax
          id={deleteTax}
          isOpen={setDeleteTax}
          isOtherOpen={setDeleteSuccess}
        />
      )}

      {deleteSuccess && <DeleteTaxSuccess isOpen={setDeleteSuccess} />}

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
