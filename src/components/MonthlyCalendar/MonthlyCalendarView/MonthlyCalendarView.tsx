import { Temporal } from "@js-temporal/polyfill";

import styles from "./index.module.scss";

import { DayCell } from "components/MonthlyCalendar/DayCell";
import { HeaderCell } from "components/shared/HeaderCell";
import { useDaysOfMonthlyCalendar } from "hooks/useDaysOfMonthlyCalendar";
import { useEventsOfMonthlyCalendar } from "hooks/useEventsOfMonthlyCalendar";
import { Event } from "types";

export interface MonthlyCalendarViewProps {
  /**
   * 表示する年の初期値
   */
  year?: number;
  /**
   * 表示する月の初期値
   */
  month?: number;
  /**
   * 表示するイベント
   */
  events?: Event[];
}

/**
 * MonthlyCalendarView は一か月分の日付を表示するカレンダーです。
 */
export const MonthlyCalendarView = ({
  year = Temporal.Now.plainDate("japanese").year,
  month = Temporal.Now.plainDate("japanese").month,
  events = [],
}: MonthlyCalendarViewProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysOfMonthlyCalendar = useDaysOfMonthlyCalendar(year, month);
  const eventsOfMonthlyCalendar = useEventsOfMonthlyCalendar(
    events,
    daysOfMonthlyCalendar
  );
  const calendar = daysOfMonthlyCalendar.map((week, indexW) =>
    week.map((day, indexD) => ({
      ...day,
      events: eventsOfMonthlyCalendar[indexW][indexD],
    }))
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {daysOfWeek.map((dayOfWeek) => (
            <HeaderCell key={dayOfWeek}>{dayOfWeek}</HeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendar.map((week, index) => (
          <tr key={"w" + index.toString()}>
            {week.map((day) => (
              <DayCell
                key={"w" + index.toString() + "d" + day.date.toString()}
                date={day.date}
                events={day.events}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
