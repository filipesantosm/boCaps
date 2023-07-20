import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import handleError, { handleSuccess } from '../../services/handleToast';
import { EditProfileSchema } from '../../validations/EditProfileSchema';
import {
  ButtonDivider,
  FormDivider,
  Input,
  InvisibleIcon,
  Label,
  MainForm,
  SaveButton,
  Title,
  VisibleIcon,
} from './styles';

interface EditProfileProps {
  password: string;
  new_password: string;
  confirm_password: string;
}

const EditProfile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EditProfileProps>({
    mode: 'onChange',
    resolver: yupResolver(EditProfileSchema),
  });

  const handleEditPassword: SubmitHandler<EditProfileProps> = async value => {
    try {
      handleSuccess('Senha alterada com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Layout>
      <MainForm onSubmit={handleSubmit(handleEditPassword)}>
        <Title>Redefinir Senha</Title>

        <FormDivider>
          <Label htmlFor="password">Senha antiga</Label>

          <Input
            type={passwordVisible ? 'text' : 'password'}
            hasError={!!errors.password}
            {...register('password')}
            placeholder="Digite sua senha antiga"
          />

          {passwordVisible ? (
            <VisibleIcon onClick={() => setPasswordVisible(false)} />
          ) : (
            <InvisibleIcon onClick={() => setPasswordVisible(true)} />
          )}
        </FormDivider>

        <FormDivider>
          <Label htmlFor="new_password">Nova senha</Label>

          <Input
            type={newPasswordVisible ? 'text' : 'password'}
            hasError={!!errors.new_password}
            {...register('new_password')}
            placeholder="Digite sua nova senha"
          />

          {newPasswordVisible ? (
            <VisibleIcon onClick={() => setNewPasswordVisible(false)} />
          ) : (
            <InvisibleIcon onClick={() => setNewPasswordVisible(true)} />
          )}
        </FormDivider>

        <FormDivider>
          <Label htmlFor="confirm_password">Confirme nova senha</Label>

          <Input
            type={confirmVisible ? 'text' : 'password'}
            hasError={!!errors.confirm_password}
            {...register('confirm_password')}
            placeholder="Confirme a senha"
          />

          {confirmVisible ? (
            <VisibleIcon onClick={() => setConfirmVisible(false)} />
          ) : (
            <InvisibleIcon onClick={() => setConfirmVisible(true)} />
          )}
        </FormDivider>

        <ButtonDivider>
          <SaveButton type="submit" disabled={!isValid}>
            Redefinir senha
          </SaveButton>
        </ButtonDivider>
      </MainForm>
    </Layout>
  );
};

export default EditProfile;
