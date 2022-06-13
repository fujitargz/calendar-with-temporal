import { Temporal } from "@js-temporal/polyfill";
import { useCallback, useReducer } from "react";

import { LOCALE } from "constants/config";

/**
 * useYearMonth は年月の state と、
 * state を今月・昨月・翌月・任意の年月に変更する関数を返す
 */
export const useYearMonth = (initialYear?: number, initialMonth?: number) => {
  const [yearMonth, dispatch] = useReducer(reducer, {
    year: initialYear || Temporal.Now.plainDate(LOCALE).year,
    month: initialMonth || Temporal.Now.plainDate(LOCALE).month,
  });

  const currentYearMonth = useCallback(() => dispatch({ type: "current" }), []);
  const lastYearMonth = useCallback(() => dispatch({ type: "last" }), []);
  const nextYearMonth = useCallback(() => dispatch({ type: "next" }), []);
  const setYearMonth = useCallback(
    (year: number, month: number) => dispatch({ type: "set", year, month }),
    []
  );

  return [
    yearMonth,
    currentYearMonth,
    lastYearMonth,
    nextYearMonth,
    setYearMonth,
  ] as const;
};

type State = {
  year: number;
  month: number;
};

type Action =
  | { type: "current" | "last" | "next" }
  | { type: "set"; year: number; month: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "current": {
      const currentMonth = Temporal.Now.plainDate(LOCALE);
      return { year: currentMonth.year, month: currentMonth.month };
    }
    case "last": {
      const lastMonth = Temporal.PlainDate.from({
        ...state,
        day: 1,
        calendar: LOCALE,
      }).subtract({ months: 1 });
      return { year: lastMonth.year, month: lastMonth.month };
    }
    case "next": {
      const nextMonth = Temporal.PlainDate.from({
        ...state,
        day: 1,
        calendar: LOCALE,
      }).add({
        months: 1,
      });
      return { year: nextMonth.year, month: nextMonth.month };
    }
    case "set": {
      const arbitraryMonth = Temporal.PlainDate.from({
        year: action.year,
        month: action.month,
        day: 1,
        calendar: LOCALE,
      });
      return { year: arbitraryMonth.year, month: arbitraryMonth.month };
    }
  }
};
