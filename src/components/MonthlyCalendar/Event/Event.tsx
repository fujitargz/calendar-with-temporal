import styles from "./index.module.scss";

export interface EventProps {
  title: string;
}

export const Event = ({ title }: EventProps) => {
  return <p className={styles["event"]}>{title}</p>;
};
