export type Event = {
  id: number;
  start: {
    year: number;
    month: number;
    day: number;
  };
  end: {
    year: number;
    month: number;
    day: number;
  };
  title: string;
};
