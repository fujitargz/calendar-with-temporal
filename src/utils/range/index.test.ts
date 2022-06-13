import { range } from "./index";

describe("正常系", () => {
  test("指定した長さの配列が作成されること", () => {
    const ary = range(-1, 5);
    expect(ary).toEqual([-1, 0, 1, 2, 3, 4]);
  });

  test("start === endの場合は空の配列が作成されること", () => {
    const ary = range(0, 0);
    expect(ary).toEqual([]);
  });
});

describe("異常系", () => {
  test("start > endの場合は両者を入れ替えた実行結果と一致すること", () => {
    const ary = range(3, 0);
    expect(ary).toEqual([0, 1, 2]);
  });
});
