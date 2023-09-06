import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import { ITerm } from '../../interfaces/Terms';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import {
  ButtonDivider,
  CancelButton,
  Content,
  EditButton,
  MainForm,
  TextArea,
  Title,
  TitleContainer,
} from './styles';

const WhoWeAre = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTerms();
  }, []);

  const getTerms = async () => {
    try {
      const { data } = await api.get<{
        data: ITerm;
      }>('/term-uses/4', {
        params: {
          'filters[type][$eq]': 'Termo Uso',
          'filters[active][$eq]': true,
        },
      });

      setTerms(data?.data?.attributes.description || '');
    } catch (error) {
      handleError(error);
    }
  };

  const handleConfirmEdit = async () => {
    setEditModal(false);
    setIsLoading(true);
    try {
      await api.put('/term-uses/4', {
        data: {
          description: terms,
        },
      });

      handleSuccess('Atualizado com sucesso!');
      getTerms();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Content>
      <MainForm>
        <TitleContainer>
          <Title>Quem somos</Title>
        </TitleContainer>

        <TextArea
          id="text"
          name="text"
          value={terms}
          onChange={e => setTerms(e.target.value)}
          style={{
            marginTop: '2rem',
          }}
        />

        <ButtonDivider>
          <CancelButton type="button" onClick={() => navigate(-1)}>
            Cancelar
          </CancelButton>

          <EditButton
            type="button"
            onClick={() => setEditModal(true)}
            disabled={isLoading}
          >
            Salvar e enviar
          </EditButton>
        </ButtonDivider>
      </MainForm>
      {editModal && (
        <ConfirmModal
          message="Tem certeza que deseja atualizar?"
          onClose={() => setEditModal(false)}
          onConfirm={handleConfirmEdit}
        />
      )}

      {editSuccess && (
        <SuccessModal
          onClose={() => setEditSuccess(false)}
          message="Atualizado com sucesso!"
        />
      )}
    </Content>
  );
};

export default WhoWeAre;
