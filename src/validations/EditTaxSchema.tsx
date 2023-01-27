import * as yup from 'yup';

export const EditTaxSchema = yup.object().shape({
  tax: yup.string().required('Campo obrigatório'),
});
