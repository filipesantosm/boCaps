export interface IFaq {
  id: number;
  attributes: FaqAttributes;
}

export interface FaqAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IFaqQuestion {
  id: number;
  attributes: FaqQuestionAttributes;
}

export interface FaqQuestionAttributes {
  question: string;
  response: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IFaqVideo {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  url: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
