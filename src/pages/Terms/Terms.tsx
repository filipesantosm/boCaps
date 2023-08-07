import { useEffect, useState } from 'react';
import { TbEditCircle } from 'react-icons/tb';
import EditTermsModal from '../../components/EditTermsModal/EditTermsModal';
import Layout from '../../components/Layout/Layout';
import TermsSuccess from '../../components/TermsSuccess/TermsSuccess';
import { PaginatedResponse } from '../../interfaces/Paginated';
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

const Terms = () => {
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
      const { data } = await api.get<PaginatedResponse<ITerm>>('/term-uses', {
        params: {
          'filters[type][$eq]': 'Termo Uso',
          'filters[active][$eq]': true,
        },
      });

      setTerms(data?.data?.[0]?.attributes.description || '');
    } catch (error) {
      handleError(error);
    }
  };

  const handleConfirmEdit = async () => {
    setEditModal(false);
    setIsLoading(true);
    try {
      await api.post('/insertTerm', {
        data: {
          name: 'Termo Uso',
          description: terms,
        },
      });

      handleSuccess('Termos atualizados com sucesso!');
      setIsEditing(false);
      getTerms();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Content>
        <MainForm>
          <TitleContainer>
            <Title>Termos de uso</Title>
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
                Editar termos
              </EditButton>
            </ButtonDivider>
          )}
        </MainForm>
        {editModal && (
          <EditTermsModal
            onClose={() => setEditModal(false)}
            onConfirm={handleConfirmEdit}
          />
        )}

        {editSuccess && <TermsSuccess isOpen={setEditSuccess} />}
      </Content>
    </Layout>
  );
};

export default Terms;
