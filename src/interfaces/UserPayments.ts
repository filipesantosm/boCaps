// Generated by https://quicktype.io

import { IUser } from './User';

export interface IUserPayment {
  id: number;
  attributes: UserPaymentAttributes;
}

export interface UserPaymentAttributes {
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
  user: {
    data: {
      id: number;
      attributes: IUser;
    };
  };
  payment_type: {
    data: IPaymentType;
  };
  user_titles: {
    data: UserTitle[];
  };
}

export interface UserTitle {
  id: number;
  attributes: {
    active: boolean;
    createdAt: string;
    dateSale: string;
    drawId: number;
    number: number;
    price: number;
    updatedAt: string;
  };
}

export interface IPaymentType {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
