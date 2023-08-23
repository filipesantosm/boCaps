import * as yup from 'yup';

export type ILocalePermissionForm = yup.InferType<
  typeof LocalePermissionSchema
>;

export const LocalePermissionSchema = yup.object({
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .length(9, 'CEP inválido')
    .test({
      message: 'CEP inválido',
      test: value => /^\d{5}-\d{3}$/.test(value || ''),
    }),
  cityIBGECod: yup.string().required('Código da cidade obrigatório'),
  stateIBGECod: yup.string().required('Código do estado obrigatório'),
  cityName: yup.string().required('Nome da cidade obrigatório'),
  stateName: yup.string().required('Nome do estado obrigatório'),
  cityPermisson: yup.boolean().required('Selecione uma opção'),
  statePermission: yup.boolean().required('Selecione uma opção'),
});
