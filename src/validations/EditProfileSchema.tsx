import * as yup from 'yup';

export const EditProfileSchema = yup.object().shape({
  password: yup.string().required('Senha antiga é obrigatória'),
  new_password: yup.string().required('Nova senha é obrigatória'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'As senhas não coincidem')
    .required('Confirme sua senha'),
});
