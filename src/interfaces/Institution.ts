import { Image } from './Draw';

export interface IInstitution {
  id: number;
  attributes: IInstitutionAttributes;
}

export interface IInstitutionAttributes {
  name: string;
  text: string;
  active: null | boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}
