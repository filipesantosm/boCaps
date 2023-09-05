import * as yup from 'yup';

export const FaqSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
});

export const FaqQuestionSchema = yup.object({
  question: yup.string().required('Pergunta é obrigatória'),
  response: yup.string().required('Resposta é obrigatória'),
});

export const FaqVideoSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  url: yup.string().required('Link é obrigatório').url('URL inválido'),
});
