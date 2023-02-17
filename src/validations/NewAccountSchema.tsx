import * as yup from 'yup';

export const NewAccountSchema = yup.object().shape({
  type: yup.object().required('Campo obrigatório'),
  username: yup.string().required('Campo obrigatório'),
  bank: yup.object().required('Campo obrigatório'),
  agency: yup
    .number()
    .typeError('Insira apenas números')
    .required('Campo obrigatório'),
  account: yup
    .number()
    .typeError('Insira apenas números')
    .required('Campo obrigatório'),
  digit: yup
    .number()
    .typeError('Insira apenas números')
    .required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
});
