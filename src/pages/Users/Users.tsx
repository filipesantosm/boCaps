import { useState } from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  Container,
  Content,
  FilterDivider,
  FilterText,
  MainForm,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';

const Users = () => {
  const [tab, setTab] = useState('clubs');

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
        </MainForm>
      </Content>
    </Container>
  );
};

export default Users;
