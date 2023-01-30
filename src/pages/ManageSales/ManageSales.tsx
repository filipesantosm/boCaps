import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteSale from '../../components/DeleteSale/DeleteSale';
import DeleteSaleSuccess from '../../components/DeleteSaleSuccess/DeleteSaleSuccess';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  CompDivider,
  CompText,
  Container,
  Content,
  DeleteIcon,
  FeeComp,
  IconTag,
  MainForm,
  NewButton,
  TableBody,
  TableHeader,
  TableHeaderDivider,
  Title,
  TitleDivider,
  TitleIcon,
  VisualizeIcon,
} from './styles';

const ManageSales = () => {
  const [page, setPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Promoções</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/sales')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Gerenciar promoções padrão</BackTitle>
          </BackDivider>

          <TableHeader>
            <TableHeaderDivider>N°</TableHeaderDivider>

            <TableHeaderDivider>Promoção</TableHeaderDivider>

            <TableHeaderDivider>Nome</TableHeaderDivider>

            <TableHeaderDivider>Validade</TableHeaderDivider>

            <TableHeaderDivider>Status</TableHeaderDivider>

            <TableHeaderDivider />
          </TableHeader>

          <TableBody>
            <FeeComp>
              <CompDivider isActive>
                <CompText>1</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Black Friday</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Green-fee 2x1</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>29/09/2022</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Ativo</CompText>
              </CompDivider>

              <CompDivider isActive>
                <VisualizeIcon onClick={() => navigate('/sales/manage/001')} />

                <DeleteIcon onClick={() => setDeleteModal('id')} />
              </CompDivider>
            </FeeComp>

            <FeeComp>
              <CompDivider isActive={false}>
                <CompText>2</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Black Friday</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Green-fee especial</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>29/09/2022</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Desativado</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <VisualizeIcon onClick={() => navigate('/sales/manage/002')} />

                <DeleteIcon onClick={() => setDeleteModal('id')} />
              </CompDivider>
            </FeeComp>
          </TableBody>

          <ButtonDivider>
            <SmallPagination
              total={5}
              currentPage={page}
              handleChange={() => setPage(page + 1)}
            />

            <NewButton
              type="button"
              onClick={() => navigate('/sales/manage/new')}
            >
              Criar nova promoção
            </NewButton>
          </ButtonDivider>
        </MainForm>
      </Content>
      {deleteModal !== '' && (
        <DeleteSale
          id={deleteModal}
          isOpen={setDeleteModal}
          isOtherOpen={setDeleteSuccess}
        />
      )}

      {deleteSuccess && <DeleteSaleSuccess isOpen={setDeleteSuccess} />}
    </Container>
  );
};

export default ManageSales;
