export const monthOptions = [
  {
    label: 'Janeiro',
    value: 1,
  },
  {
    label: 'Fevereiro',
    value: 2,
  },
  {
    label: 'Março',
    value: 3,
  },
  {
    label: 'Abril',
    value: 4,
  },
  {
    label: 'Maio',
    value: 5,
  },
  {
    label: 'Junho',
    value: 6,
  },
  {
    label: 'Julho',
    value: 7,
  },
  {
    label: 'Agosto',
    value: 8,
  },
  {
    label: 'Setembro',
    value: 9,
  },
  {
    label: 'Outubro',
    value: 10,
  },
  {
    label: 'Novembro',
    value: 11,
  },
  {
    label: 'Dezembro',
    value: 12,
  },
];

export const generateData = () => {
  return {
    labels: ['Pix', 'Cartão de crédito', 'Boleto'],
    datasets: [
      {
        label: 'Quantidade',
        data: Array.from({ length: 3 }).map(() =>
          Math.floor(Math.random() * 1000),
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const generateTitleData = () => {
  return {
    labels: ['Pix', 'Cartão de crédito', 'Saldo Multicap'],
    datasets: [
      {
        label: 'Quantidade',
        data: Array.from({ length: 3 }).map(() =>
          Math.floor(Math.random() * 1000),
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};
