import * as yup from 'yup';

export const NewFeeSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  value: yup
    .number()
    .typeError('O campo deve conter apenas caracteres numéricos')
    .required('Valor é obrigatório'),
  holes: yup
    .number()
    .typeError('O campo deve conter apenas caracteres numéricos')
    .required('Número de buracos é obrigatório'),
  image: yup.mixed().test('fileSize', 'Insira um arquivo', value => {
    if (!value.length) {
      return false;
    }
    return true;
  }),
  days_of_week: yup.string().required('Dias da semana é obrigatório'),
  description: yup.string().required('Descrição é obrigatório'),
});
