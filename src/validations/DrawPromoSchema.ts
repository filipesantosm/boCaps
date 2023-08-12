import * as yup from 'yup';

export const DrawPromoSchema = yup.object({
  Campanha: yup.string().required('Nome é obrigatório'),
  value: yup.string().required('Valor é obrigatório'),
  quantity: yup
    .number()
    .required('Quantidade é obrigatória')
    .typeError('Quantidade deve ser um número'),
});
