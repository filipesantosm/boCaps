import { format, parseISO } from 'date-fns';
import { BiSearch } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
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
} from './styles';

interface Props {
  onClose: () => void;
  transaction?: any; // TODO: Tipagem
}

const TransactionDetails = ({ onClose, transaction }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <ModalHeader>
          <Title>Detalhes da transação - 19565323</Title>
          <CloseButton type="button" onClick={onClose}>
            <IoIosClose />
          </CloseButton>
        </ModalHeader>

        <InformationContainer>
          <InformationRow>
            <InformationText>ID da compra</InformationText>
            <InformationText>123</InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Cliente</InformationText>
            <ClientButton
              onClick={() => {
                navigate('/transactions/client/1');
                onClose();
              }}
            >
              <p>Nome Sobrenome</p>
              <BiSearch />
            </ClientButton>
          </InformationRow>
          <InformationRow>
            <InformationText>CPF</InformationText>
            <InformationText>123.456.789-00</InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Data</InformationText>
            <InformationText>
              {format(parseISO('2023-08-15'), 'dd/MM/yyyy')}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Valor</InformationText>
            <InformationText>{BRLMoneyFormater.format(45)}</InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Método de pagamento</InformationText>
            <InformationText>Pix</InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Data de compensação</InformationText>
            <InformationText>
              {format(parseISO('2023-08-15'), 'dd/MM/yyyy')}
            </InformationText>
          </InformationRow>
          <InformationRow>
            <InformationText>Sorteio</InformationText>
            <InformationText>184</InformationText>
          </InformationRow>
          <BottomSection>
            <BottomSectionTitle>Títulos adquiridos</BottomSectionTitle>
            <InformationText>100084</InformationText>
            <InformationText>100095</InformationText>
            <InformationText>100045</InformationText>
          </BottomSection>
        </InformationContainer>
      </Content>
    </Container>
  );
};

export default TransactionDetails;
