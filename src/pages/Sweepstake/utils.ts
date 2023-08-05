import { format, parse, parseISO } from 'date-fns';
import { IDraw } from '../../interfaces/Draw';

export const isScratchCardOptions = [
  {
    value: 'true',
    label: 'Sim',
  },
  {
    value: 'false',
    label: 'Não',
  },
];

export const getInitialDrawForm = (draw: IDraw) => {
  const { attributes } = draw;

  const drawDate = attributes?.dateDraw
    ? parseISO(attributes.dateDraw)
    : undefined;
  const startDate = attributes?.dateStart
    ? parseISO(attributes.dateStart)
    : undefined;
  const finalDate = attributes?.dateFinal
    ? parseISO(attributes.dateFinal)
    : undefined;

  return {
    drawDate: drawDate ? format(drawDate, 'yyyy-MM-dd') : undefined,
    drawHour: drawDate ? format(drawDate, 'HH:mm') : undefined,
    startDate: startDate ? format(startDate, 'yyyy-MM-dd') : undefined,
    startHour: startDate ? format(startDate, 'HH:mm') : undefined,
    endDate: finalDate ? format(finalDate, 'yyyy-MM-dd') : undefined,
    endHour: finalDate ? format(finalDate, 'HH:mm') : undefined,
    susep: attributes.susep ?? undefined,
    name: attributes.name ?? undefined,
    number: attributes.number.toString(),
    additionalDataSection: {
      description: attributes?.description ?? undefined,
      lnkYoutube: attributes?.lnkYoutube ?? undefined,
      lnkYoutubeDraw: attributes?.lnkYoutubeDraw ?? undefined,
      redemptionValue: attributes?.redemptionValue?.toString() ?? undefined,
      redemptionPercent: attributes?.redemptionPercent?.toString() ?? undefined,
      saleValue: attributes.draw_promos.data.map(drawPromo =>
        drawPromo.id.toString(),
      ),
      isScratchCard: attributes.isScratchCard
        ? isScratchCardOptions.find(
            option => String(attributes.isScratchCard) === option.value,
          )?.value
        : isScratchCardOptions[1]?.value,
      limSale: attributes?.limSale || undefined,
    },
    chanceSection: {
      typeChance: attributes?.draw_type_chance?.data?.attributes.total,
      chanceFinal01: attributes.chanceFinal01 ?? undefined,
      chanceInicial01: attributes.chanceInicial01 ?? undefined,
      intervalChance1: attributes.intervalChance1 ?? undefined,
      chanceFinal02: attributes.chanceFinal02 ?? undefined,
      chanceInicial02: attributes.chanceInicial02 ?? undefined,
      intervalChance2: attributes.intervalChance2 ?? undefined,
      chanceFinal03: attributes.chanceFinal03 ?? undefined,
      chanceInicial03: attributes.chanceInicial03 ?? undefined,
    },
  };
};

export const getIsoStringFromDateAndTime = (date: string, time: string) => {
  const joined = `${date} ${time}`;

  const isoString = joined.trim()
    ? parse(joined, 'yyyy-MM-dd HH:mm', new Date())
    : undefined;

  return isoString;
};
