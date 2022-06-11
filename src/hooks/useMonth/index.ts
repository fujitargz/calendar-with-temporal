import { Temporal } from "@js-temporal/polyfill";

import { LOCALE } from "constants/config";

/**
 * useMonth は今月のカレンダーの日付を返す
 */
export const useMonth = () => {
  const today = Temporal.Now.zonedDateTime(LOCALE);
  const daysInWeek = today.daysInWeek;

  const firstDayOfMonth = today.subtract({ days: today.day - 1 });
  const lastDayOfMonth = firstDayOfMonth
    .add({ months: 1 })
    .subtract({ days: 1 });

  const firstDayOfCalendar = firstDayOfMonth.subtract({
    days: firstDayOfMonth.dayOfWeek % daysInWeek,
  });
  const lastDayOfCalendar = lastDayOfMonth.add({
    days: 6 - (lastDayOfMonth.dayOfWeek % daysInWeek),
  });

  const durationOfCalendar = firstDayOfCalendar
    .until(lastDayOfCalendar)
    .abs()
    .round({ smallestUnit: "day", roundingMode: "floor" })
    .total("day");
  const numOfDays = durationOfCalendar + 1;
  const weeksInMonth = numOfDays / daysInWeek;

  const calendarDays = [...Array(weeksInMonth)]
    .map((_, index) => index)
    .map((numOfWeek) =>
      [...Array(daysInWeek)].map(
        (_, index) =>
          firstDayOfCalendar.add({ days: daysInWeek * numOfWeek + index }).day
      )
    );

  return calendarDays;
};
