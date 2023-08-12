import * as yup from 'yup';

export const DrawPromoSchema = yup.object({
  Campanha: yup.string().required('Nome é obrigatório'),
  value: yup.string().required('Valor é obrigatório'),
  quantity: yup.object().required('Quantidade é obrigatória'),
});
