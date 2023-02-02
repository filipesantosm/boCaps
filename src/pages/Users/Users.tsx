import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  ClientComp,
  ClientCompDivider,
  ClientHeader,
  ClientHeaderDivider,
  CompDivider,
  CompText,
  Container,
  Content,
  DeleteIcon,
  FilterDivider,
  FilterText,
  MainForm,
  SearchDivider,
  SearchIcon,
  SearchInput,
  TableBody,
  TableHeader,
  TableHeaderDivider,
  Title,
  TitleDivider,
  TitleIcon,
  UserComp,
  VisualizeIcon,
} from './styles';

const Users = () => {
  const [tab, setTab] = useState('clubs');
  const [clubPage, setClubPage] = useState(1);
  const [clientPage, setClientPage] = useState(1);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Usuários</Title>
          </TitleDivider>

          <FilterDivider>
            <FilterText
              isSelected={tab === 'clubs'}
              onClick={() => setTab('clubs')}
            >
              Clubes
            </FilterText>

            <FilterText
              isSelected={tab === 'clients'}
              onClick={() => setTab('clients')}
            >
              Clientes
            </FilterText>
          </FilterDivider>

          {tab === 'clubs' && (
            <>
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

                <TableHeaderDivider>Visualizar</TableHeaderDivider>

                <TableHeaderDivider />
              </TableHeader>

              <TableBody>
                <UserComp>
                  <CompDivider>
                    <CompText>1</CompText>
                  </CompDivider>

                  <CompDivider>
                    <CompText>Atenas Golf Club</CompText>
                  </CompDivider>

                  <CompDivider>
                    <VisualizeIcon
                      onClick={() => navigate('/users/club/001')}
                    />
                  </CompDivider>

                  <CompDivider>
                    <DeleteIcon />
                  </CompDivider>
                </UserComp>
              </TableBody>

              <SmallPagination
                total={5}
                currentPage={clubPage}
                handleChange={() => setClubPage(clubPage + 1)}
              />
            </>
          )}

          {tab === 'clients' && (
            <>
              <ClientHeader>
                <ClientHeaderDivider>N°</ClientHeaderDivider>

                <ClientHeaderDivider>
                  Nome
                  <SearchDivider>
                    <SearchIcon />

                    <SearchInput
                      type="text"
                      id="search"
                      name="search"
                      placeholder="Buscar cliente"
                    />
                  </SearchDivider>
                </ClientHeaderDivider>

                <ClientHeaderDivider onClick={() => setDropdown(!dropdown)}>
                  Aniversário {dropdown ? <BiChevronUp /> : <BiChevronDown />}
                </ClientHeaderDivider>

                <ClientHeaderDivider>Visualizar</ClientHeaderDivider>

                <ClientHeaderDivider />
              </ClientHeader>

              <TableBody>
                <ClientComp>
                  <ClientCompDivider>
                    <CompText>1</CompText>
                  </ClientCompDivider>

                  <ClientCompDivider>
                    <CompText>André Barbosa</CompText>
                  </ClientCompDivider>

                  <ClientCompDivider>
                    <CompText>12/08/1992</CompText>
                  </ClientCompDivider>

                  <ClientCompDivider>
                    <VisualizeIcon
                      onClick={() => navigate('/users/client/001')}
                    />
                  </ClientCompDivider>

                  <ClientCompDivider>
                    <DeleteIcon />
                  </ClientCompDivider>
                </ClientComp>
              </TableBody>

              <SmallPagination
                total={5}
                currentPage={clientPage}
                handleChange={() => setClubPage(clientPage + 1)}
              />
            </>
          )}
        </MainForm>
      </Content>
    </Container>
  );
};

export default Users;
