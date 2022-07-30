import { Event } from "../Event";

import styles from "./index.module.scss";

import { Event as EventType } from "types";

export interface DayCellProps {
  /**
   * 日
   */
  date: number;
  /**
   * 今日かどうか
   */
  today?: boolean;
  /**
   * 今月かどうか
   */
  currentMonth?: boolean;
  /**
   * 表示するイベント
   */
  events?: EventType[];
}

/**
 * DayCell は MonthlyCalendar の各日を表示するマスです。
 */
export const DayCell = ({
  date,
  today = false,
  currentMonth = true,
  events = [],
}: DayCellProps) => {
  const textStyle = ((currentMonth, today) => {
    if (!currentMonth) {
      return styles["day-cell-text-gray"];
    }
    if (today) {
      return styles["day-cell-text-today"];
    }
    return styles["day-cell-text"];
  })(currentMonth, today);

  return (
    <td className={styles["day-cell"]}>
      <span className={textStyle}>{date}</span>
      {events.map((event) => (
        <Event key={event.id} title={event.title} />
      ))}
    </td>
  );
};
