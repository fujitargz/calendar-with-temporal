import { Temporal } from "@js-temporal/polyfill";
import { renderHook, act } from "@testing-library/react";

import { useYearMonth } from "./";

import { LOCALE } from "constants/config";

describe("正常系", () => {
  const YEAR_MONTH = 0;
  const CURRENT_YEAR_MONTH = 1;
  const LAST_YEAR_MONTH = 2;
  const NEXT_YEAR_MONTH = 3;
  const SET_YEAR_MONTH = 4;

  test("オブジェクトと関数を返すこと", () => {
    const { result } = renderHook(() => useYearMonth());
    const [
      yearMonth,
      currentYearMonth,
      lastYearMonth,
      nextYearMonth,
      setYearMonth,
    ] = result.current;

    expect(typeof yearMonth).toEqual("object");
    expect(typeof currentYearMonth).toBe("function");
    expect(typeof lastYearMonth).toBe("function");
    expect(typeof nextYearMonth).toBe("function");
    expect(typeof setYearMonth).toBe("function");
  });

  test("現在の年月を返すこと", () => {
    const currentYear = Temporal.Now.plainDate(LOCALE).year;
    const currentMonth = Temporal.Now.plainDate(LOCALE).month;

    const { result } = renderHook(() => useYearMonth());

    expect(result.current[YEAR_MONTH]).toEqual({
      year: currentYear,
      month: currentMonth,
    });
  });

  test("指定された年月を返すこと", () => {
    const { result } = renderHook(() => useYearMonth(2022, 8));

    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 8 });
  });

  test("年月のstateを現在の年月に更新すること", () => {
    const currentYear = Temporal.Now.plainDate(LOCALE).year;
    const currentMonth = Temporal.Now.plainDate(LOCALE).month;

    const { result } = renderHook(() => useYearMonth(2000, 1));
    expect(result.current[YEAR_MONTH]).toEqual({ year: 2000, month: 1 });

    act(() => {
      result.current[CURRENT_YEAR_MONTH]();
    });

    expect(result.current[YEAR_MONTH]).toEqual({
      year: currentYear,
      month: currentMonth,
    });
  });

  test("年月のstateを前月に更新すること", () => {
    const { result } = renderHook(() => useYearMonth(2022, 8));
    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 8 });

    act(() => {
      result.current[LAST_YEAR_MONTH]();
    });

    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 7 });
  });

  test("年月のstateを翌月に更新すること", () => {
    const { result } = renderHook(() => useYearMonth(2022, 8));
    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 8 });

    act(() => {
      result.current[NEXT_YEAR_MONTH]();
    });

    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 9 });
  });

  test("年月のstateを指定の年月に更新すること", () => {
    const { result } = renderHook(() => useYearMonth(2022, 8));
    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 8 });

    act(() => {
      result.current[SET_YEAR_MONTH](2022, 10);
    });

    expect(result.current[YEAR_MONTH]).toEqual({ year: 2022, month: 10 });
  });
});
