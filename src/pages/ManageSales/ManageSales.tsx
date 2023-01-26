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
              <CompDivider isActive>1</CompDivider>

              <CompDivider isActive>Black Friday</CompDivider>

              <CompDivider isActive>Green-fee 2x1</CompDivider>

              <CompDivider isActive>29/09/2022</CompDivider>

              <CompDivider isActive>Ativo</CompDivider>

              <CompDivider isActive>
                <VisualizeIcon onClick={() => navigate('/sales/manage/001')} />

                <DeleteIcon onClick={() => setDeleteModal('id')} />
              </CompDivider>
            </FeeComp>

            <FeeComp>
              <CompDivider isActive={false}>2</CompDivider>

              <CompDivider isActive={false}>Black Friday</CompDivider>

              <CompDivider isActive={false}>Green-fee especial</CompDivider>

              <CompDivider isActive={false}>29/09/2022</CompDivider>

              <CompDivider isActive={false}>Desativado</CompDivider>

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
