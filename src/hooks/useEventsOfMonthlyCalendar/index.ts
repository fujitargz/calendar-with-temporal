import { Temporal } from "@js-temporal/polyfill";

import { LOCALE } from "constants/config";
import { Event } from "types";

/**
 * useEventsOfMonthlyCalendar は、指定された年月日を含むイベントを返す
 */
export const useEventsOfMonthlyCalendar = (
  events: Event[],
  calendarDays: {
    year: number;
    month: number;
    date: number;
  }[][]
) => {
  const eventsOfMonthlyCalendar = calendarDays.map((week) =>
    week.map((day) => eventsOfDay(events, day.year, day.month, day.date))
  );

  return eventsOfMonthlyCalendar;
};

const eventsOfDay = (
  events: Event[],
  year: number,
  month: number,
  day: number
) => {
  const today = Temporal.PlainDate.from({
    year,
    month,
    day,
    calendar: LOCALE,
  });
  const eventsOfToay = events.filter((event) => {
    const startDate = Temporal.PlainDate.from({
      ...event.start,
      calendar: LOCALE,
    });
    const endDate = Temporal.PlainDate.from({
      ...event.end,
      calendar: LOCALE,
    });
    return (
      Temporal.PlainDate.compare(startDate, today) < 1 &&
      Temporal.PlainDate.compare(today, endDate) < 1
    );
  });

  return eventsOfToay;
};
