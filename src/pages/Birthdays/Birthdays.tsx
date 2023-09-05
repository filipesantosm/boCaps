import { useEffect, useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import SmallPagination from '../../components/Pagination/Pagination';
import { IUser } from '../../interfaces/User';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { formatDateString } from '../../utils/formatDateString';
import {
  Button,
  ClientComp,
  ClientCompDivider,
  ClientHeader,
  ClientHeaderDivider,
  CompText,
  Container,
  Content,
  FilterButton,
  FilterCheckbox,
  FilterContainer,
  FilterItem,
  FilterSection,
  FilterTitle,
  MainForm,
  PageHeader,
  TableBody,
  Title,
  TitleDivider,
} from './styles';
import { monthOptions } from './utils';

const Birthdays = () => {
  const [clientPage, setClientPage] = useState(1);
  const [birthdayMonth, setBirthdayMonth] = useState<number>();
  const [users, setUsers] = useState<IUser[]>([]);

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getUsers();
  }, [birthdayMonth]);

  const getUsers = async () => {
    try {
      const { data } = await api.get<IUser[]>('/users', {
        params: {
          'filters[id][$ne]': 1, // excluir master da listagem
          'filters[active][$eq]': true,
          'filters[dateBirth][$notNull]': birthdayMonth ? true : undefined,
          'filters[dateBirth][$containsi]': birthdayMonth
            ? `-${birthdayMonth.toString().padStart(2, '0')}-`
            : undefined,
        },
      });

      setUsers(data);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <TitleDivider>
        <Title>Aniversariantes</Title>
      </TitleDivider>

      <PageHeader>
        <FilterButton
          type="button"
          onClick={() => setShowFilters(prev => !prev)}
          isOpen={showFilters}
          title={showFilters ? 'Esconder filtros' : 'Mostrar filtros'}
        >
          <GiSettingsKnobs
            style={{
              transform: 'rotate(90deg)',
            }}
          />
        </FilterButton>
        <Button>Exportar dados</Button>
      </PageHeader>

      <Content>
        {showFilters && (
          <FilterContainer>
            <FilterSection>
              <FilterTitle>Meses</FilterTitle>
              {monthOptions.map(monthOption => (
                <FilterItem key={monthOption.value}>
                  {monthOption.label}
                  <FilterCheckbox
                    type="checkbox"
                    checked={birthdayMonth === monthOption.value}
                    onClick={e => {
                      if (birthdayMonth === monthOption.value) {
                        setBirthdayMonth(undefined);
                      } else {
                        setBirthdayMonth(monthOption.value);
                      }
                    }}
                  />
                </FilterItem>
              ))}
            </FilterSection>
            {/*  <FilterSection>
                <FilterTitle>Cidade</FilterTitle>
                {cityOptions.map(cityOption => (
                  <FilterItem key={cityOption.value}>
                    {cityOption.label}
                    <FilterCheckbox type="checkbox" />
                  </FilterItem>
                ))}
              </FilterSection> */}
          </FilterContainer>
        )}
        <MainForm>
          <ClientHeader>
            <ClientHeaderDivider>CPF</ClientHeaderDivider>
            <ClientHeaderDivider>Nome</ClientHeaderDivider>
            <ClientHeaderDivider>Aniversário</ClientHeaderDivider>
            <ClientHeaderDivider>Telefone</ClientHeaderDivider>
            <ClientHeaderDivider>E-mail</ClientHeaderDivider>
            <ClientHeaderDivider>Cidade</ClientHeaderDivider>
          </ClientHeader>
          <TableBody>
            {users.map(user => (
              <ClientComp key={user.id}>
                <ClientCompDivider>
                  <CompText>{user.cpf}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>{user.name}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>
                    {formatDateString(user.dateBirth, 'dd/MM/yyyy')}
                  </CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>{user.phone}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>{user.email}</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>{user.city}</CompText>
                </ClientCompDivider>
              </ClientComp>
            ))}
          </TableBody>
          <SmallPagination
            total={1}
            currentPage={clientPage}
            handleChange={(e, page) => setClientPage(page)}
          />
        </MainForm>
      </Content>
    </Container>
  );
};

export default Birthdays;
