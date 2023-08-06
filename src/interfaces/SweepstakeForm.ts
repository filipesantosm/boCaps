export interface ISweepstakeForm {
  susep: number;
  status: string;
  name: string;
  number: string;
  drawDate: string;
  drawHour: string;
  startDate: string;
  startHour: string;
  endDate: string;
  endHour: string;

  chanceSection: IChanceSection;
  additionalDataSection: IAdditionalData;
  mainAwardsSection: IAwardsSection;
  additionalAwardsSection: IAwardsSection;
  awardsExtraSpingSection: IAwardsSection;
}

export interface IChanceSection {
  typeChance: number;
  // chances: IChance[];
  chanceInicial01: null | number;
  chanceFinal01: null | number;
  intervalChance1: null | number;
  chanceInicial02: null | number;
  chanceFinal02: null | number;
  intervalChance2: null | number;
  chanceInicial03: null | number;
  chanceFinal03: null | number;
}

export interface IChance {
  from: number;
  to: number;
  range: number;
}

export interface IAdditionalData {
  limit: number;
  freeTip: string;
  lnkYoutube: string;
  lnkYoutubeDraw: string;
  saleValue: string[];
  redemptionPercent: string;
  redemptionValue: string;
  extraSpin: string;
  isScratchCard: string;
  limSale: number;
  image: File;
  cardImage: File;
  description: string;
}

export interface IAwardsSection {
  awards: IAwards[];
}

export interface IAwards {
  name: string;
  description: string;
  value: number;
  type: string;
  quantity: number;
  observation: string;
}

export interface IDrawPremiumForm {
  value: string;
  description: string;
  title: string;
  draw_type_premium: string;
  quantity?: number;
}
