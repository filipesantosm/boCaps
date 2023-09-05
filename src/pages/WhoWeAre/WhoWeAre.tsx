import { useEffect, useState } from 'react';
import { TbEditCircle } from 'react-icons/tb';
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
  const [terms, setTerms] = useState('');
  const [isEditing, setIsEditing] = useState(false);
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
      setIsEditing(false);
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
          readOnly={!isEditing}
          onChange={e => setTerms(e.target.value)}
          style={{
            marginTop: '2rem',
          }}
        />

        {isEditing ? (
          <ButtonDivider>
            <CancelButton type="button" onClick={() => setIsEditing(false)}>
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
        ) : (
          <ButtonDivider>
            <EditButton type="button" onClick={() => setIsEditing(true)}>
              <TbEditCircle size={28} />
              Editar
            </EditButton>
          </ButtonDivider>
        )}
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
