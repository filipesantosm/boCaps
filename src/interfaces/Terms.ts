export interface ITerm {
  id: number;
  attributes: TermAttributes;
}

export interface TermAttributes {
  name: null | string;
  description: null | string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  active: boolean;
}