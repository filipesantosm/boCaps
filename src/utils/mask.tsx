export const maskCNPJ = (value: string) => {
  return value
    ?.replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

export const maskCEP = (cep: string) => {
  cep = cep.replace(/\D/g, '');
  const match = cep.match(/^(\d{1,5})(\d{0,3})$/);
  if (match) {
    cep = `${match[1]}${match[2] ? '-' : ''}${match[2]}`;
    return cep;
  }
  return cep;
};

export const maskPhone = (value: string) => {
  if (value.length > 10) {
    return value
      ?.replace(/[^0-9]/g, '')
      .replace(/^(\d{2})(\d{5})(\d{4})$.*/, '($1) $2-$3');
  }

  return value
    ?.replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d{4})(\d{4})$.*/, '($1) $2-$3');
};

export const maskCPF = (value: string) => {
  const onlyDigits = value?.replace(/\D/g, '');

  return onlyDigits
    ?.replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3}).(\d{3})(\d)/, '$1.$2.$3')
    .replace(/.(\d{3})(\d)/, '.$1-$2');
};

export const currencyMask = (value: number) => {
  const masked = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
  return masked;
};

export const unMask = (value: string) => {
  return value?.replace(/\D/g, '');
};

export const unmaskCurrency = (value: string) => {
  if (!value) return 0;
  const valueFormatted = value
    .replace(',', '')
    .replace('.', '')
    .replace(/\D/g, '');

  return Number(valueFormatted) / 100;
};

export const maskCurrency = (value: string) => {
  const valueFormatted = unmaskCurrency(value);

  const masked = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valueFormatted);
  return masked;
};

export const maskSusep = (value: string) => {
  const masked = value
    .replace(/^(\d{5})(\d)/, '$1.$2')
    .replace(/\.(\d{6})(\d)/, '.$1/$2')
    .replace(/\/(\d{4})(\d)/, '/$1-$2');

  return masked;
};
