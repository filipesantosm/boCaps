import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Content,
  ForgotPassword,
  FormDivider,
  Input,
  InvisibleEye,
  LoginButton,
  Logo,
  Subtitle,
  Title,
  VisibleEye,
} from './styles';
import logo from '../../assets/img/logo.svg';
import { IResponseLogin, useAuth } from '../../hooks/useAuth';
import { LoginSchema } from '../../validations/LoginSchema';
import handleError from '../../services/handleToast';

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

  const handleLocalStorage = (response: IResponseLogin) => {
    // setUser(response.user);
    // localStorage.setItem('@Leishscan: user', JSON.stringify(response.user));
    // localStorage.setItem('@Leishscan: accessToken', response.access_token);
    // localStorage.setItem('@Leishscan: refreshToken', response.refresh_token);
    // navigate('/home');
  };

  const handleLogin: SubmitHandler<LoginProps> = async value => {
    try {
      // const { data } = await api.post<IResponseLogin>('/user/session', {
      //   email: value.email.trim(),
      //   password: value.password,
      // });
      // handleLocalStorage(data);
      navigate('/users');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleLogin)}>
        <Logo src={logo} alt="Logo Talk Golf Show" />

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
