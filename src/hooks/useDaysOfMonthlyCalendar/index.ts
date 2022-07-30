import { Temporal } from "@js-temporal/polyfill";

import { LOCALE } from "constants/config";
import { range } from "utils/range";

/**
 * useDaysOfMonth は1か月のカレンダーを返す
 */
export const useDaysOfMonthlyCalendar = (year: number, month: number) => {
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

  const daysOfMonthlyCalendar = range(0, weeksInCalendar).map((week) =>
    range(0, daysInWeek).map((day) => {
      const eachDay = firstDayOfCalendar.add({ days: daysInWeek * week + day });
      return {
        year: eachDay.year,
        month: eachDay.month,
        date: eachDay.day,
        currentMonth: eachDay.month === month,
      };
    })
  );

  return daysOfMonthlyCalendar;
};
