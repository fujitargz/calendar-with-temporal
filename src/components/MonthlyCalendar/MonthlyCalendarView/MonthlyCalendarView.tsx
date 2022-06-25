import { Temporal } from "@js-temporal/polyfill";

import styles from "./index.module.scss";

import { DayCell } from "components/MonthlyCalendar/DayCell";
import { HeaderCell } from "components/shared/HeaderCell";
import { useDaysOfMonth } from "hooks/useDaysOfMonth";

export interface MonthlyCalendarViewProps {
  /**
   * 表示する年の初期値
   */
  year?: number;
  /**
   * 表示する月の初期値
   */
  month?: number;
}

/**
 * MonthlyCalendarView は一か月分の日付を表示するカレンダーです。
 */
export const MonthlyCalendarView = ({
  year = Temporal.Now.plainDate("japanese").year,
  month = Temporal.Now.plainDate("japanese").month,
}: MonthlyCalendarViewProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendar = useDaysOfMonth(year, month);

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
              <DayCell key={"d" + day.toString()}>{day}</DayCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
