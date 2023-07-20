/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  Button,
  ClientComp,
  ClientCompDivider,
  ClientHeader,
  ClientHeaderDivider,
  CompText,
  Content,
  HeaderButtons,
  MainForm,
  PageHeader,
  SearchDivider,
  SearchIcon,
  SearchInput,
  TableBody,
  Title,
  VisualizeIcon,
} from './styles';

const Users = () => {
  const [clientPage, setClientPage] = useState(1);

  const navigate = useNavigate();

  return (
    <Layout>
      <Content>
        <MainForm>
          <Title>Usuários</Title>

          <PageHeader>
            <SearchDivider>
              <SearchIcon />
              <SearchInput
                type="text"
                id="search"
                name="search"
                placeholder="Buscar clientes"
              />
            </SearchDivider>

            <HeaderButtons>
              <Button>Exportar dados</Button>
              <Button type="button" onClick={() => navigate('/users/create')}>
                Cadastrar usuário
              </Button>
            </HeaderButtons>
          </PageHeader>

          <ClientHeader>
            <ClientHeaderDivider>ID</ClientHeaderDivider>
            <ClientHeaderDivider>Criação</ClientHeaderDivider>
            <ClientHeaderDivider>Aniversário</ClientHeaderDivider>
            <ClientHeaderDivider>E-mail</ClientHeaderDivider>
            <ClientHeaderDivider>Nome</ClientHeaderDivider>
            <ClientHeaderDivider>CPF</ClientHeaderDivider>
            <ClientHeaderDivider>Telefone</ClientHeaderDivider>
            <ClientHeaderDivider>Cadastro Completo</ClientHeaderDivider>
            <ClientHeaderDivider>Mkt</ClientHeaderDivider>
            <ClientHeaderDivider>Saldo anterior</ClientHeaderDivider>
            <ClientHeaderDivider>Saldo atual</ClientHeaderDivider>
            <ClientHeaderDivider>Cidade</ClientHeaderDivider>
            <ClientHeaderDivider>Ativo</ClientHeaderDivider>
            <ClientHeaderDivider />
          </ClientHeader>

          <TableBody>
            {Array.from({ length: 12 }).map((_, index) => (
              <ClientComp key={index}>
                <ClientCompDivider>
                  <CompText>{index + 1}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>14/07/2023</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>10/01/2000</CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <CompText>andrebarbosa123@gmail.com</CompText>
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
                  <CompText>Y</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Y</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>225,00</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>210,00</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Sorocaba</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Y</CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <VisualizeIcon
                    onClick={() => navigate('/users/client/001')}
                  />
                </ClientCompDivider>
              </ClientComp>
            ))}
          </TableBody>

          <SmallPagination
            total={5}
            currentPage={clientPage}
            handleChange={() => setClientPage(clientPage + 1)}
          />
        </MainForm>
      </Content>
    </Layout>
  );
};

export default Users;
