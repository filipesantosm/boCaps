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
              <CompDivider isActive>
                <CompText>1</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Chip Shot</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Segunda à Sexta</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>09</CompText>
              </CompDivider>

              <CompDivider isActive>
                <CompText>Ativo</CompText>
              </CompDivider>

              <CompDivider isActive>
                <VisualizeIcon onClick={() => navigate('/home/manage/001')} />

                <DeleteIcon onClick={() => setDeleteModal('id')} />
              </CompDivider>
            </FeeComp>

            <FeeComp>
              <CompDivider isActive={false}>
                <CompText>2</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Hole-in-one</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Segunda à Sexta</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>18</CompText>
              </CompDivider>

              <CompDivider isActive={false}>
                <CompText>Desativado</CompText>
              </CompDivider>

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
              Cadastrar green-fee
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
