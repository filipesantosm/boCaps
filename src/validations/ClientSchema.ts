import * as yup from 'yup';
import { isValid, parse } from 'date-fns';
import { cpf } from 'cpf-cnpj-validator';

export const ClientSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .test({
      test: value => {
        if (!value) {
          return false;
        }

        return cpf.isValid(value);
      },
      message: 'CPF inválido',
    }),
  dateBirth: yup
    .string()
    .required('Data de nascimento é obrigatória')
    .test({
      message: 'Data inválida',
      test: value => {
        if (!value) {
          return false;
        }

        const parsedDate = parse(value, 'yyyy-MM-dd', new Date());

        if (!parsedDate || !isValid(parsedDate)) {
          return false;
        }

        return true;
      },
    }),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .length(9, 'CEP inválido')
    .test({
      message: 'CEP inválido',
      test: value => /^\d{5}-\d{3}$/.test(value || ''),
    }),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  street: yup.string().required('Rua é obrigatória'),
  number: yup.string().required('Número é obrigatório'),
  password: yup.string().typeError(''),
  passwordConfirmation: yup
    .string()
    .typeError('')
    .when('password', (value: string | undefined) => {
      if (!value) {
        return yup.string().optional();
      }

      return yup
        .string()
        .required('Confirme a senha')
        .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais');
    }),
});
