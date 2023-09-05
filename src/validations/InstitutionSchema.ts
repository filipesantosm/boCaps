import * as yup from 'yup';

export const InstitutionSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  text: yup.string().required('Texto é obrigatório'),
});
