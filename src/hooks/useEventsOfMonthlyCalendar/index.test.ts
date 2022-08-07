import { renderHook } from "@testing-library/react";

import { useEventsOfMonthlyCalendar } from "./";

import { Event } from "types";

let mockCalendar: {
  year: number;
  month: number;
  date: number;
  currentMonth: boolean;
}[][];

let mockEvents: Record<string, Event>;

beforeEach(() => {
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
  mockCalendar = [
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
  ];

  const event = (
    id: number,
    startMonth: number,
    startDay: number,
    endMonth?: number,
    endDay?: number
  ): Event => ({
    id,
    start: {
      year: 2022,
      month: startMonth,
      day: startDay,
    },
    end: {
      year: 2022,
      month: endMonth || startMonth,
      day: endDay || startDay,
    },
    title: `mock test ${id}`,
  });
  const jul30 = event(1, 7, 30);
  const jul30ToJul31 = event(2, 7, 30, 7, 31);
  const jul31 = event(3, 7, 31);
  const aug1 = event(4, 8, 1);
  const aug1ToAug2 = event(5, 8, 1, 8, 2);
  const sep2ToSep4 = event(6, 9, 2, 9, 4);
  const sep3 = event(7, 9, 3);
  const sep4 = event(8, 9, 4);
  mockEvents = {
    jul30,
    jul30ToJul31,
    jul31,
    aug1,
    aug1ToAug2,
    sep2ToSep4,
    sep3,
    sep4,
  };
});

describe("正常系", () => {
  test("配列を返すこと", () => {
    const events: Event[] = [];
    const { result } = renderHook(() =>
      useEventsOfMonthlyCalendar(events, mockCalendar)
    );

    expect(typeof result.current).toEqual("object");
  });

  test("指定されたカレンダー内のイベントを返すこと", () => {
    const events: Event[] = [
      mockEvents.jul30,
      mockEvents.jul31,
      mockEvents.sep3,
      mockEvents.sep4,
    ];
    const { result } = renderHook(() =>
      useEventsOfMonthlyCalendar(events, mockCalendar)
    );

    expect(result.current).toEqual([
      [[mockEvents.jul31], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], [mockEvents.sep3]],
    ]);
  });

  test("指定されたカレンダー内の複数日にまたがるイベントを返すこと", () => {
    const events: Event[] = [mockEvents.aug1ToAug2];
    const { result } = renderHook(() =>
      useEventsOfMonthlyCalendar(events, mockCalendar)
    );

    expect(result.current).toEqual([
      [[], [mockEvents.aug1ToAug2], [mockEvents.aug1ToAug2], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
    ]);
  });

  test("指定されたカレンダー内のイベントを重複も含め返すこと", () => {
    const events: Event[] = [
      mockEvents.aug1,
      mockEvents.aug1,
      mockEvents.aug1ToAug2,
    ];
    const { result } = renderHook(() =>
      useEventsOfMonthlyCalendar(events, mockCalendar)
    );

    expect(result.current).toEqual([
      [
        [],
        [mockEvents.aug1, mockEvents.aug1, mockEvents.aug1ToAug2],
        [mockEvents.aug1ToAug2],
        [],
        [],
        [],
        [],
      ],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
    ]);
  });

  test("指定されたカレンダー内外にまたがるイベントはカレンダー内のみ返すこと", () => {
    const events: Event[] = [mockEvents.jul30ToJul31, mockEvents.sep2ToSep4];
    const { result } = renderHook(() =>
      useEventsOfMonthlyCalendar(events, mockCalendar)
    );

    expect(result.current).toEqual([
      [[mockEvents.jul30ToJul31], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [], []],
      [[], [], [], [], [], [mockEvents.sep2ToSep4], [mockEvents.sep2ToSep4]],
    ]);
  });
});
