import type { ReactNode } from "react";

import styles from "./index.module.scss";
export interface DayCellProps {
  /**
   * マスに表示する内容
   */
  children: ReactNode;
}

/**
 * DayCell は MonthlyCalendar の各日を表示するマスです。
 */
export const DayCell = ({ children }: DayCellProps) => {
  return <td className={styles["day-cell"]}>{children}</td>;
};
