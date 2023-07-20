import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteClient from '../../components/DeleteClient/DeleteClient';
import DeleteClientSuccess from '../../components/DeleteClientSuccess/DeleteClientSuccess';
import DeleteClub from '../../components/DeleteClub/DeleteClub';
import DeleteClubSuccess from '../../components/DeleteClubSuccess/DeleteClubSuccess';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  Button,
  ClientComp,
  ClientCompDivider,
  ClientHeader,
  ClientHeaderDivider,
  CompText,
  Container,
  Content,
  MainForm,
  PageHeader,
  TableBody,
  Title,
  TitleDivider,
  TitleIcon,
  VisualizeIcon,
} from './styles';

const Birthdays = () => {
  const [clientPage, setClientPage] = useState(1);
  const [deleteClub, setDeleteClub] = useState('');
  const [deleteClient, setDeleteClient] = useState('');
  const [deleteClubSuccess, setDeleteClubSuccess] = useState(false);
  const [deleteClientSuccess, setDeleteClientSuccess] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Aniversariantes</Title>
          </TitleDivider>

          <PageHeader>
            <Button>Exportar dados</Button>
          </PageHeader>

          <ClientHeader>
            <ClientHeaderDivider>ID</ClientHeaderDivider>

            <ClientHeaderDivider>Criação</ClientHeaderDivider>

            <ClientHeaderDivider>Aniversário</ClientHeaderDivider>

            <ClientHeaderDivider>E-mail</ClientHeaderDivider>

            <ClientHeaderDivider>Nome</ClientHeaderDivider>

            <ClientHeaderDivider>CPF</ClientHeaderDivider>

            <ClientHeaderDivider>Telefone</ClientHeaderDivider>

            <ClientHeaderDivider>Visualizar</ClientHeaderDivider>
          </ClientHeader>

          <TableBody>
            <ClientComp>
              <ClientCompDivider>
                <CompText>1</CompText>
              </ClientCompDivider>
              <ClientCompDivider>
                <CompText>14/07/2023</CompText>
              </ClientCompDivider>
              <ClientCompDivider>
                <CompText>10/01/2000</CompText>
              </ClientCompDivider>

              <ClientCompDivider>
                <CompText>andrebarbosa@gmail.com</CompText>
              </ClientCompDivider>

              <ClientCompDivider>
                <CompText>André Barbosa</CompText>
              </ClientCompDivider>
              <ClientCompDivider>
                <CompText>123.456.789-12</CompText>
              </ClientCompDivider>

              <ClientCompDivider>
                <CompText>(11) 99123-4234</CompText>
              </ClientCompDivider>

              <ClientCompDivider>
                <VisualizeIcon onClick={() => navigate('/users/client/001')} />
              </ClientCompDivider>
            </ClientComp>
          </TableBody>

          <SmallPagination
            total={5}
            currentPage={clientPage}
            handleChange={() => setClientPage(clientPage + 1)}
          />
        </MainForm>
      </Content>
      {deleteClub !== '' && (
        <DeleteClub
          id={deleteClub}
          isOpen={setDeleteClub}
          isOtherOpen={setDeleteClubSuccess}
        />
      )}

      {deleteClubSuccess && <DeleteClubSuccess isOpen={setDeleteClubSuccess} />}

      {deleteClient !== '' && (
        <DeleteClient
          id={deleteClient}
          isOpen={setDeleteClient}
          isOtherOpen={setDeleteClientSuccess}
        />
      )}

      {deleteClientSuccess && (
        <DeleteClientSuccess isOpen={setDeleteClientSuccess} />
      )}
    </Container>
  );
};

export default Birthdays;
