// Generated by https://quicktype.io

export interface IUserPayment {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  date: null | string;
  observation: null | string;
  active: boolean;
  autenticatedNumber: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isPayment: boolean;
  ourNumber: string;
  dateCompensation: null | string;
  externalId: null | string;
  isCredit: boolean;
  userApproved: number;
  origin: null | string;
  value: null | number;
}