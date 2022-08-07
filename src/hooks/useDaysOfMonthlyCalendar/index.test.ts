import { renderHook } from "@testing-library/react";

import { useDaysOfMonthlyCalendar } from "./";

describe("正常系", () => {
  test("配列を返すこと", () => {
    const { result } = renderHook(() => useDaysOfMonthlyCalendar(2022, 8));

    expect(typeof result.current).toEqual("object");
  });

  test("指定された年月のカレンダーを返すこと", () => {
    const lastMonth = (date: number) => ({
      year: 2022,
      month: 7,
      date,
      currentMonth: false,
    });
    const thisMonth = (date: number) => ({
      year: 2022,
      month: 8,
      date,
      currentMonth: true,
    });
    const nextMonth = (date: number) => ({
      year: 2022,
      month: 9,
      date,
      currentMonth: false,
    });

    const { result } = renderHook(() => useDaysOfMonthlyCalendar(2022, 8));

    expect(result.current).toEqual([
      [
        lastMonth(31),
        thisMonth(1),
        thisMonth(2),
        thisMonth(3),
        thisMonth(4),
        thisMonth(5),
        thisMonth(6),
      ],
      [
        thisMonth(7),
        thisMonth(8),
        thisMonth(9),
        thisMonth(10),
        thisMonth(11),
        thisMonth(12),
        thisMonth(13),
      ],
      [
        thisMonth(14),
        thisMonth(15),
        thisMonth(16),
        thisMonth(17),
        thisMonth(18),
        thisMonth(19),
        thisMonth(20),
      ],
      [
        thisMonth(21),
        thisMonth(22),
        thisMonth(23),
        thisMonth(24),
        thisMonth(25),
        thisMonth(26),
        thisMonth(27),
      ],
      [
        thisMonth(28),
        thisMonth(29),
        thisMonth(30),
        thisMonth(31),
        nextMonth(1),
        nextMonth(2),
        nextMonth(3),
      ],
    ]);
  });
});
