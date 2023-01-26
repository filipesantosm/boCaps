import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteFee from '../../components/DeleteFee/DeleteFee';
import DeleteFeeSuccess from '../../components/DeleteFeeSuccess/DeleteFeeSuccess';
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

const ManageFees = () => {
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

            <Title>Green-Fees</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/home')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Gerenciar green-fees padrão</BackTitle>
          </BackDivider>

          <TableHeader>
            <TableHeaderDivider>N°</TableHeaderDivider>

            <TableHeaderDivider>Nome</TableHeaderDivider>

            <TableHeaderDivider>Uso</TableHeaderDivider>

            <TableHeaderDivider>Buracos</TableHeaderDivider>

            <TableHeaderDivider>Status</TableHeaderDivider>

            <TableHeaderDivider />
          </TableHeader>

          <TableBody>
            <FeeComp>
              <CompDivider isActive>1</CompDivider>

              <CompDivider isActive>Chip Shot</CompDivider>

              <CompDivider isActive>Segunda à Sexta</CompDivider>

              <CompDivider isActive>09</CompDivider>

              <CompDivider isActive>Ativo</CompDivider>

              <CompDivider isActive>
                <VisualizeIcon onClick={() => navigate('/home/manage/001')} />

                <DeleteIcon onClick={() => setDeleteModal('id')} />
              </CompDivider>
            </FeeComp>

            <FeeComp>
              <CompDivider isActive={false}>2</CompDivider>

              <CompDivider isActive={false}>Hole-in-one</CompDivider>

              <CompDivider isActive={false}>Segunda à Sexta</CompDivider>

              <CompDivider isActive={false}>18</CompDivider>

              <CompDivider isActive={false}>Desativado</CompDivider>

              <CompDivider isActive={false}>
                <VisualizeIcon onClick={() => navigate('/home/manage/002')} />

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
              onClick={() => navigate('/home/manage/new')}
            >
              Criar novo green-fee
            </NewButton>
          </ButtonDivider>
        </MainForm>
      </Content>
      {deleteModal !== '' && (
        <DeleteFee
          id={deleteModal}
          isOpen={setDeleteModal}
          isOtherOpen={setDeleteSuccess}
        />
      )}

      {deleteSuccess && <DeleteFeeSuccess isOpen={setDeleteSuccess} />}
    </Container>
  );
};

export default ManageFees;
