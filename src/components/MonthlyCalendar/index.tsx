import { DayCell } from "./DayCell";
import styles from "./index.module.scss";

export const MonthlyCalendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysPerWeek = 7;
  const weeksPerMonth = 5;
  const calendarDays = [...Array(weeksPerMonth)]
    .map((_, index) => index)
    .map((numOfWeek) =>
      [...Array(daysPerWeek)].map(
        (_, index) => daysPerWeek * numOfWeek + index + 1
      )
    );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {daysOfWeek.map((dayOfWeek) => (
            <DayCell key={dayOfWeek}>{dayOfWeek}</DayCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendarDays.map((week, index) => (
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
