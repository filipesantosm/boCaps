import * as yup from 'yup';

export const NewSaleSchema = yup.object().shape({
  sale_name: yup.string().required('Nome é obrigatório'),
  name_fee: yup.string().required('Nome é obrigatório'),
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
  description: yup.string().required('Descrição é obrigatório'),
  rules: yup.string().required('Regras são obrigatórias'),
  day: yup
    .number()
    .typeError('O campo deve conter apenas caracteres numéricos')
    .required('Dia é obrigatório'),
  month: yup
    .number()
    .typeError('O campo deve conter apenas caracteres numéricos')
    .required('Mês é obrigatório'),
  year: yup
    .number()
    .typeError('O campo deve conter apenas caracteres numéricos')
    .required('Ano é obrigatório'),
  start_hour: yup.string().required('Hora de início é obrigatório'),
  end_hour: yup.string().required('Hora de término é obrigatório'),
});
