import styles from "./index.module.scss";

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
}

/**
 * DayCell は MonthlyCalendar の各日を表示するマスです。
 */
export const DayCell = ({
  date,
  today = false,
  currentMonth = true,
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
    </td>
  );
};
