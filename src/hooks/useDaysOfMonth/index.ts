import { Temporal } from "@js-temporal/polyfill";

import { LOCALE } from "constants/config";
import { range } from "utils/range";

export interface useDaysOfMonthProps {
  year: number;
  month: number;
}

/**
 * useDaysOfMonth は今月のカレンダーの日付を返す
 */
export const useDaysOfMonth = ({ year, month }: useDaysOfMonthProps) => {
  const firstDayOfMonth = Temporal.PlainDate.from({
    year,
    month,
    day: 1,
    calendar: LOCALE,
  });
  const lastDayOfMonth = firstDayOfMonth
    .add({ months: 1 })
    .subtract({ days: 1 });

  const daysInWeek = firstDayOfMonth.daysInWeek;
  const firstDayOfCalendar = firstDayOfMonth.subtract({
    days: firstDayOfMonth.dayOfWeek % daysInWeek,
  });
  const lastDayOfCalendar = lastDayOfMonth.add({
    days: 6 - (lastDayOfMonth.dayOfWeek % daysInWeek),
  });

  const daysInCalendar =
    firstDayOfCalendar.until(lastDayOfCalendar).total("day") + 1;
  const weeksInCalendar = daysInCalendar / daysInWeek;

  const daysOfMonth = range(0, weeksInCalendar).map((week) =>
    range(0, daysInWeek).map(
      (day) => firstDayOfCalendar.add({ days: daysInWeek * week + day }).day
    )
  );

  return daysOfMonth;
};
