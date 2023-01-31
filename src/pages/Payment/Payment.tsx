import { BiWalletAlt } from 'react-icons/bi';
import { BsBank, BsFileText } from 'react-icons/bs';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  Card,
  CardTitle,
  Container,
  Content,
  MainForm,
  PaymentDivider,
  PixIcon,
  SubtitleDivider,
  SwitchDivider,
  SwitchText,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import pixImg from '../../assets/img/pix.svg';
import Switch from '../../components/Switch/Switch';
import handleError, { handleSuccess } from '../../services/handleToast';

const Payment = () => {
  const [card, setCard] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [pix, setPix] = useState(false);

  const handleCardStatus = async () => {
    try {
      setCard(!card);
      handleSuccess('Pagamento por cartão de crédito atualizado!');
    } catch (error) {
      handleError(error);
    }
  };

  const handleTicketStatus = async () => {
    try {
      setTicket(!ticket);
      handleSuccess('Pagamento por boleto atualizado!');
    } catch (error) {
      handleError(error);
    }
  };

  const handlePixStatus = async () => {
    try {
      setPix(!pix);
      handleSuccess('Pagamento por PIX atualizado!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Pagamento</Title>
          </TitleDivider>

          <SubtitleDivider>
            <BiWalletAlt size={24} />
            Forma de Pagamento
          </SubtitleDivider>

          <PaymentDivider>
            <Card>
              <CardTitle>
                <HiOutlineCreditCard size={24} />
                Cartão de Crédito
              </CardTitle>

              <SwitchDivider>
                <Switch isChecked={card} onClick={handleCardStatus} />

                <SwitchText style={{ color: card ? '' : '#C6CEDD' }}>
                  {card ? 'Ativo' : 'Desativado'}
                </SwitchText>
              </SwitchDivider>
            </Card>

            <Card>
              <CardTitle>
                <BsFileText size={24} />
                Boleto
              </CardTitle>

              <SwitchDivider>
                <Switch isChecked={ticket} onClick={handleTicketStatus} />

                <SwitchText style={{ color: ticket ? '' : '#C6CEDD' }}>
                  {ticket ? 'Ativo' : 'Desativado'}
                </SwitchText>
              </SwitchDivider>
            </Card>

            <Card>
              <CardTitle>
                <PixIcon src={pixImg} alt="Ícone do PIX" />
                PIX
              </CardTitle>

              <SwitchDivider>
                <Switch isChecked={pix} onClick={handlePixStatus} />

                <SwitchText style={{ color: pix ? '' : '#C6CEDD' }}>
                  {pix ? 'Ativo' : 'Desativado'}
                </SwitchText>
              </SwitchDivider>
            </Card>
          </PaymentDivider>

          <SubtitleDivider>
            <BsBank size={24} />
            Conta de Recebimento
          </SubtitleDivider>
        </MainForm>
      </Content>
    </Container>
  );
};

export default Payment;
