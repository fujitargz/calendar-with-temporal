import type { ReactNode } from "react";

import styles from "./index.module.scss";
export interface DayCellProps {
  children: ReactNode;
}
export const DayCell = ({ children }: DayCellProps) => {
  return <td className={styles["day-cell"]}>{children}</td>;
};
