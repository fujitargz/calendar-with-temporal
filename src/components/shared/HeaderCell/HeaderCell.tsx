import type { ReactNode } from "react";

import styles from "./index.module.scss";
export interface HeaderCellProps {
  /**
   * マスに表示する内容
   */
  children?: ReactNode;
}

/**
 * HeaderCell は各カレンダーのヘッダを表示するマスです。
 */
export const HeaderCell = ({ children = "" }: HeaderCellProps) => {
  return <td className={styles["header-cell"]}>{children}</td>;
};
