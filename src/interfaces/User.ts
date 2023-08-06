export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  name: null | string;
  sexo: null | string;
  dateBirth: null | string;
  cpf: null | string;
  salesLink: null | string;
  cep: null | string;
  street: null | string;
  number: null | string;
  complement: null | string;
  city: null | string;
  neighborhood: null | string;
  state: null | string;
  facebook: null | string;
  instagran: null | string;
  youtube: null | string;
  luckyNumber: null | string;
  origin: null | string;
  observation: null | string;
  country: null | string;
  phone: null | string;
  isTermAccepted: boolean;
}

export interface IUserForm {
  name: string;
  cpf: string;
  phone: string;
  facebook: string;
  instagram: string;
  email: string;
  dateBirth: string;
  youtube: string;
  sexo: string;
  luckyNumber: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  number: string;
}
