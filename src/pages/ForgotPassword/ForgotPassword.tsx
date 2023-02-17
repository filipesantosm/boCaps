import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  BackToLogin,
  Container,
  Content,
  Description,
  Input,
  Logo,
  SendButton,
  Title,
} from './styles';
import { PasswordSchema } from '../../validations/PasswordSchema';
import logo from '../../assets/img/logo.svg';
import handleError from '../../services/handleToast';
import PasswordModal from '../../components/PasswordModal/PasswordModal';

interface ForgotPasswordProps {
  email: string;
}

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordProps>({
    mode: 'onChange',
    resolver: yupResolver(PasswordSchema),
  });

  const handleNewPassword: SubmitHandler<ForgotPasswordProps> = async value => {
    try {
      setShowModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleNewPassword)}>
        <Logo src={logo} alt="Logo Talk Golf Show" />

        <Title>Esqueci a Senha</Title>

        <Description>Informe seu e-mail cadastrado para receber o</Description>
        <Description>link de troca de senha.</Description>

        <Input
          type="email"
          hasError={!!errors.email}
          id="email"
          placeholder="E-mail"
          {...register('email')}
        />

        <SendButton type="submit">Enviar e-mail</SendButton>

        <BackToLogin onClick={() => navigate('/')}>
          Voltar para o login
        </BackToLogin>
      </Content>
      {showModal && <PasswordModal isOpen={setShowModal} />}
    </Container>
  );
};

export default ForgotPassword;
