import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (
  date: Date | string,
  format: string = "dd MMM, yyyy"
): string => {
  return formatInTimeZone(date, "Europe/Moscow", format);
};

export default dateFormat;
