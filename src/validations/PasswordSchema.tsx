import * as yup from 'yup';

export const PasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('Preencha os campos necessários'),
});
