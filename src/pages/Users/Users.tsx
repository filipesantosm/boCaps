/* eslint-disable react/no-array-index-key */
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import useDebounce from '../../hooks/useDebounce';
import { IUser } from '../../interfaces/User';
import api from '../../services/api';
import handleError from '../../services/handleToast';
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
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const [users, setUsers] = useState<IUser[]>([]);

  const debouncedSearch = useDebounce(search, 600);

  useEffect(() => {
    getUsers();
  }, [debouncedSearch]);

  const getUsers = async () => {
    try {
      const { data } = await api.get<IUser[]>('/users', {
        params: {
          'filters[id][$ne]': 1, // excluir master da listagem
          'filters[active][$eq]': true,
          'filters[$or][0][username][$contains]': search || undefined,
          'filters[$or][1][name][$contains]': search || undefined,
          'filters[$or][2][email][$contains]': search || undefined,
        },
      });

      setUsers(data);
    } catch (error) {
      handleError(error);
    }
  };

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
                value={search}
                onChange={e => setSearch(e.target.value)}
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
            {users.map(user => (
              <ClientComp key={user.id}>
                <ClientCompDivider>
                  <CompText>{user.id}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>
                    {format(parseISO(user.createdAt), 'dd/MM/yyyy')}
                  </CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <CompText title={user.email}>{user.email}</CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <CompText title={user.name || ''}>{user.name}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText title={user.cpf || ''}>{user.cpf}</CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <CompText title={user.phone || ''}>{user.phone}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Sim</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Sim</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>0,00</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>0,00</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText title={user.city || ''}>{user.city}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>{user?.blocked ? 'Não' : 'Sim'}</CompText>
                </ClientCompDivider>

                <ClientCompDivider>
                  <VisualizeIcon
                    onClick={() => navigate(`/users/client/${user.id}`)}
                  />
                </ClientCompDivider>
              </ClientComp>
            ))}
          </TableBody>

          <SmallPagination
            total={1}
            currentPage={clientPage}
            handleChange={() => setClientPage(clientPage + 1)}
          />
        </MainForm>
      </Content>
    </Layout>
  );
};

export default Users;
