import { DayCell } from "./DayCell";
import styles from "./index.module.scss";

import { HeaderCell } from "components/HeaderCell";
import { useMonth } from "hooks/useMonth";

/**
 * MonthlyCalendar は一か月分の日付を表示するカレンダーです。
 */
export const MonthlyCalendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendar = useMonth();

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
