import { BiWalletAlt } from 'react-icons/bi';
import { BsBank, BsFileText } from 'react-icons/bs';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { useState } from 'react';
import { RiHandCoinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  AccountCard,
  AccountContainer,
  AccountTitle,
  ButtonDivider,
  Card,
  CardTitle,
  ColumnSpan,
  Container,
  Content,
  DeleteIcon,
  DescriptionDivider,
  EditIcon,
  FirstColumn,
  IconDivider,
  InformationDivider,
  LastColumn,
  MainForm,
  NewButton,
  PaymentDivider,
  PixIcon,
  Price,
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
import DeleteAccount from '../../components/DeleteAccount/DeleteAccount';
import DeleteAccountSuccess from '../../components/DeleteAccountSuccess/DeleteAccountSuccess';

const Payment = () => {
  const [deleteModal, setDeleteModal] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [card, setCard] = useState(false);
  const [debitCard, setDebitCard] = useState(false);
  const [ticket, setTicket] = useState(false);
  const [pix, setPix] = useState(false);

  const navigate = useNavigate();

  const handleCardStatus = async () => {
    try {
      setCard(!card);
      handleSuccess('Pagamento por cartão de crédito atualizado!');
    } catch (error) {
      handleError(error);
    }
  };

  const handleDebitCardStatus = async () => {
    try {
      setDebitCard(!debitCard);
      handleSuccess('Pagamento por cartão de débito atualizado!');
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
                <HiOutlineCreditCard size={24} />
                Cartão de Débito
              </CardTitle>

              <SwitchDivider>
                <Switch isChecked={debitCard} onClick={handleDebitCardStatus} />

                <SwitchText style={{ color: debitCard ? '' : '#C6CEDD' }}>
                  {debitCard ? 'Ativo' : 'Desativado'}
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

          <DescriptionDivider>
            <IconDivider>
              <RiHandCoinLine size={24} />
              Saldo total
            </IconDivider>

            <Price>R$ 820,00</Price>
          </DescriptionDivider>

          <AccountContainer>
            <AccountCard>
              <AccountTitle>Minha conta preferida</AccountTitle>

              <InformationDivider>
                <FirstColumn>
                  <ColumnSpan>Banco</ColumnSpan>

                  <ColumnSpan>Agência</ColumnSpan>

                  <ColumnSpan>Conta</ColumnSpan>
                </FirstColumn>

                <FirstColumn style={{ marginRight: 'auto' }}>
                  <ColumnSpan>Nubank</ColumnSpan>

                  <ColumnSpan>0001</ColumnSpan>

                  <ColumnSpan>1234567-0</ColumnSpan>
                </FirstColumn>

                <LastColumn>
                  <EditIcon onClick={() => navigate('/payment/001')} />

                  <DeleteIcon onClick={() => setDeleteModal('id')} />
                </LastColumn>
              </InformationDivider>
            </AccountCard>
          </AccountContainer>

          <ButtonDivider>
            <NewButton type="button" onClick={() => navigate('/payment/new')}>
              Cadastrar nova conta
            </NewButton>
          </ButtonDivider>
        </MainForm>
      </Content>
      {deleteModal !== '' && (
        <DeleteAccount
          id={deleteModal}
          isOpen={setDeleteModal}
          isOtherOpen={setDeleteSuccess}
        />
      )}

      {deleteSuccess && <DeleteAccountSuccess isOpen={setDeleteSuccess} />}
    </Container>
  );
};

export default Payment;
