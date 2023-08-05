import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { useAuth } from '../../hooks/useAuth';
import { ILoginResponse } from '../../interfaces/Auth';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { LoginSchema } from '../../validations/LoginSchema';
import {
  Container,
  Content,
  FormDivider,
  Input,
  InvisibleEye,
  LoginButton,
  Logo,
  Subtitle,
  Title,
  VisibleEye,
} from './styles';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const [visible, setVisible] = useState(false);

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const handleLocalStorage = (response: ILoginResponse) => {
    setUser(response.user);
    localStorage.setItem('@MultcapMaster: user', JSON.stringify(response.user));
    localStorage.setItem('@MultcapMaster: accessToken', response.jwt);
    navigate('/home');
  };

  const handleLogin: SubmitHandler<LoginProps> = async value => {
    try {
      const { data } = await api.post<ILoginResponse>(
        '/auth/local',
        {
          identifier: value.email.trim(),
          password: value.password,
        },
        {
          headers: {
            Authorization: '',
          },
        },
      );
      handleLocalStorage(data);
      navigate('/users');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleLogin)}>
        <Logo src={logo} alt="Logo Multicap" />

        <Title>Login</Title>

        <Subtitle>Área do administrador</Subtitle>

        <FormDivider>
          <Input
            type="email"
            hasError={!!errors.email}
            id="email"
            {...register('email')}
            placeholder="E-mail"
          />
        </FormDivider>

        <FormDivider style={{ marginBottom: '3.625rem' }}>
          <Input
            type={visible ? 'text' : 'password'}
            hasError={!!errors.password}
            id="password"
            {...register('password')}
            placeholder="Senha"
          />

          {visible ? (
            <VisibleEye onClick={() => setVisible(false)} />
          ) : (
            <InvisibleEye onClick={() => setVisible(true)} />
          )}
        </FormDivider>

        {/* <ForgotPassword onClick={() => navigate('/forgot-password')}>
          Esqueci a senha
        </ForgotPassword> */}

        <LoginButton type="submit">Login</LoginButton>
      </Content>
    </Container>
  );
};

export default Login;
