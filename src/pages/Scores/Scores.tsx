/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import Layout from '../../components/Layout/Layout';
import PageTitle from '../../components/PageTitle/PageTitle';
import SmallPagination from '../../components/Pagination/Pagination';
import ScoreModal from '../../components/ScoreModal/ScoreModal';
import {
  Button,
  ButtonsContainer,
  Content,
  DataText,
  IconButton,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
} from './styles';

const mockScore = {
  name: '10 a cada R$100',
  score: '10',
  value: '100',
};

const Scores = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [isEditingModal, setIsEditingModal] = useState(false);
  const [selectedScore, setSelectedScore] = useState<any>();

  const handleCopyScore = () => {
    setShowFormModal(true);
    setIsEditingModal(false);
    setSelectedScore(mockScore);
  };

  const handleEditScore = () => {
    setShowFormModal(true);
    setIsEditingModal(true);
    setSelectedScore(mockScore);
  };

  const handleCreateScore = () => {
    setShowFormModal(true);
    setIsEditingModal(false);
    setSelectedScore(undefined);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
    setIsEditingModal(false);
    setSelectedScore(undefined);
  };

  return (
    <Layout>
      <Content>
        <PageTitle>Scores</PageTitle>
        <Button type="button" onClick={handleCreateScore}>
          Cadastrar
        </Button>

        <TableHeaderRow>
          <TableHeaderData>Nome</TableHeaderData>
          <TableHeaderData>Score</TableHeaderData>
          <TableHeaderData>Valor</TableHeaderData>
          <TableHeaderData>Score por real</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {Array.from({ length: 12 }).map((_, index) => (
            <TableRow key={index}>
              <TableData>
                <DataText>10 a cada R$100</DataText>
              </TableData>
              <TableData>
                <DataText>10</DataText>
              </TableData>
              <TableData>
                <DataText>R$ 100,00</DataText>
              </TableData>
              <TableData>
                <DataText>0,1</DataText>
              </TableData>
              <TableData>
                <ButtonsContainer>
                  <IconButton
                    type="button"
                    title="Editar"
                    onClick={handleEditScore}
                  >
                    <FiEdit3 />
                  </IconButton>
                  <IconButton
                    type="button"
                    title="Copiar"
                    onClick={handleCopyScore}
                  >
                    <FaRegCopy />
                  </IconButton>
                </ButtonsContainer>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <SmallPagination
          total={1}
          currentPage={1}
          handleChange={(e, newPage) => console.log(newPage)}
        />
        {showFormModal && (
          <ScoreModal
            isEditing={isEditingModal}
            onClose={handleCloseFormModal}
            onSuccess={handleCloseFormModal}
            initialScore={selectedScore}
          />
        )}
      </Content>
    </Layout>
  );
};

export default Scores;
