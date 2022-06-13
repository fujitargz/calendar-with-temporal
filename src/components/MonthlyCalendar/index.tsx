import { DayCell } from "./DayCell";
import styles from "./index.module.scss";

import { HeaderCell } from "components/HeaderCell";
import { useDaysOfMonth } from "hooks/useDaysOfMonth";
import { useYearMonth } from "hooks/useYearMonth";

export interface MonthlyCalendarProps {
  /**
   * 表示する年の初期値
   * デフォルト値は今年
   * @default Temporal.Now.plainDate('japanese').year
   */
  initialYear?: number;
  /**
   * 表示する月の初期値
   * デフォルト値は今月
   * @default Temporal.Now.plainDate('japanese').month
   */
  initialMonth?: number;
}

/**
 * MonthlyCalendar は一か月分の日付を表示するカレンダーです。
 */
export const MonthlyCalendar = ({
  initialYear,
  initialMonth,
}: MonthlyCalendarProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [yearMonth] = useYearMonth(initialYear, initialMonth);
  const calendar = useDaysOfMonth(yearMonth);

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
