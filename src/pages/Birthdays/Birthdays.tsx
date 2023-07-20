import { useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import Layout from '../../components/Layout/Layout';
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
import { cityOptions, monthOptions } from './utils';

const Birthdays = () => {
  const [clientPage, setClientPage] = useState(1);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <Layout>
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
                    <FilterCheckbox type="checkbox" />
                  </FilterItem>
                ))}
              </FilterSection>
              <FilterSection>
                <FilterTitle>Cidade</FilterTitle>
                {cityOptions.map(cityOption => (
                  <FilterItem key={cityOption.value}>
                    {cityOption.label}
                    <FilterCheckbox type="checkbox" />
                  </FilterItem>
                ))}
              </FilterSection>
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
              <ClientComp>
                <ClientCompDivider>
                  <CompText>123.456.789-12</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>André Barbosa</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>10/01/2000</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>(11) 99123-4234</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>andrebarbosa@gmail.com</CompText>
                </ClientCompDivider>
                <ClientCompDivider>
                  <CompText>Bauru</CompText>
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
      </Container>
    </Layout>
  );
};

export default Birthdays;
