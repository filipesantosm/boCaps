export const days = Array.from({ length: 31 }, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));

export const months = [
  {
    value: '01',
    month: 'Janeiro',
  },
  {
    value: '02',
    month: 'Fevereiro',
  },
  {
    value: '03',
    month: 'Março',
  },
  {
    value: '04',
    month: 'Abril',
  },
  {
    value: '05',
    month: 'Maio',
  },
  {
    value: '06',
    month: 'Junho',
  },
  {
    value: '07',
    month: 'Julho',
  },
  {
    value: '08',
    month: 'Agosto',
  },
  {
    value: '09',
    month: 'Setembro',
  },
  {
    value: '10',
    month: 'Outubro',
  },
  {
    value: '11',
    month: 'Novembro',
  },
  {
    value: '12',
    month: 'Dezembro',
  },
];

const years = () => {
  const now = new Date().getUTCFullYear();
  return Array(now - (now - 100))
    .fill('')
    .map((v, idx) => now - idx) as Array<number>;
};

export const yearsValue = years();
