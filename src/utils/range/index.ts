/**
 * range は [start, end) の配列を返す関数です
 */
export const range = (start: number, end: number) => {
  if (start > end) {
    [start, end] = [end, start];
  }

  const ary = [];
  for (let i = start; i < end; i++) {
    ary.push(i);
  }

  return ary;
};
