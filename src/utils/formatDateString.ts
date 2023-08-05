import { format, parseISO } from 'date-fns';

export const formatDateString = (
  isoString?: string | null,
  dateFormat?: string,
) => {
  if (!isoString || !dateFormat) {
    return '';
  }

  const parsed = parseISO(isoString);

  return format(parsed, dateFormat);
};
