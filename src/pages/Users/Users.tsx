import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
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
        </MainForm>
      </Content>
    </Container>
  );
};

export default Users;
