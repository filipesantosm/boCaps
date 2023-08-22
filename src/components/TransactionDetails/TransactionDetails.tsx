import { format, parseISO } from 'date-fns';
import { BiSearch } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IUserPayment } from '../../interfaces/UserPayments';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  BottomSection,
  BottomSectionTitle,
  ClientButton,
  CloseButton,
  Container,
  Content,
  InformationContainer,
  InformationRow,
  InformationText,
  ModalHeader,
  Title,
  TitleNumberButton,
} from './styles';
import handleError from '../../services/handleToast';
import api from '../../services/api';

interface Props {
  onClose: () => void;
  userPaymentId: number;
}

const TransactionDetails = ({ onClose, userPaymentId }: Props) => {
  const navigate = useNavigate();
  const [userPayment, setUserPayment] = useState<IUserPayment>();

  const [checkedTitleIds, setCheckedTitleIds] = useState<number[]>([]);

  useEffect(() => {
    getUserPayment();
  }, [userPaymentId]);

  const getUserPayment = async () => {
    if (!userPaymentId) {
      return;
    }

    try {
      const { data } = await api.get<{
        data: IUserPayment;
      }>(`/user-payments/${userPaymentId}`, {
        params: {
          populate: '*',
        },
      });

      setUserPayment(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleToggleChecked = (titleId: number) => {
    if (checkedTitleIds.includes(titleId)) {
      setCheckedTitleIds(prev => prev.filter(id => id !== titleId));
    } else {
      setCheckedTitleIds(prev => [...prev, titleId]);
    }
  };

  return (
    <Container>
      <Content>
        <ModalHeader>
          <Title>Detalhes da transação - {userPaymentId}</Title>
          <CloseButton type="button" onClick={onClose}>
            <IoIosClose />
          </CloseButton>
        </ModalHeader>

        <InformationContainer>
          <InformationRow>
            <InformationText>ID da compra</InformationText>
            <InformationText>{userPayment?.id}</InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Cliente</InformationText>
            <ClientButton
              onClick={() => {
                navigate(
                  `/transactions/client/${userPayment?.attributes.user.data.id}`,
                );
                onClose();
              }}
            >
              <p>{userPayment?.attributes.user?.data?.attributes?.name}</p>
              <BiSearch />
            </ClientButton>
          </InformationRow>
          <InformationRow>
            <InformationText>CPF</InformationText>
            <InformationText>
              {userPayment?.attributes.user?.data?.attributes?.cpf}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Data</InformationText>
            <InformationText>
              {userPayment &&
                format(
                  parseISO(userPayment.attributes.createdAt),
                  'dd/MM/yyyy',
                )}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Valor</InformationText>
            <InformationText>
              {BRLMoneyFormater.format(userPayment?.attributes?.value || 0)}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Método de pagamento</InformationText>
            <InformationText>
              {userPayment?.attributes?.payment_type?.data?.attributes.name}
            </InformationText>
          </InformationRow>
          {userPayment?.attributes.ourNumber && (
            <InformationRow>
              <InformationText>Nosso número</InformationText>
              <InformationText
                style={{
                  wordWrap: 'break-word',
                  textAlign: 'end',
                }}
              >
                {userPayment?.attributes?.ourNumber}
              </InformationText>
            </InformationRow>
          )}
          <InformationRow>
            <InformationText>Data de compensação</InformationText>
            <InformationText>
              {userPayment?.attributes.dateCompensation
                ? format(
                    parseISO(userPayment.attributes.dateCompensation),
                    'dd/MM/yyyy',
                  )
                : '-'}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Sorteio</InformationText>
            <InformationText>-</InformationText>
          </InformationRow>
          <BottomSection>
            <BottomSectionTitle>Títulos adquiridos</BottomSectionTitle>
            {userPayment?.attributes.user_titles?.data.map(title => (
              <TitleNumberButton
                key={title.id}
                isChecked={checkedTitleIds.includes(title.id)}
                // onClick={() => handleToggleChecked(title.id)}
              >
                {title.attributes.number}
              </TitleNumberButton>
            ))}
          </BottomSection>
        </InformationContainer>
      </Content>
    </Container>
  );
};

export default TransactionDetails;
