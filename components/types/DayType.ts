import { PhotoType } from "./PhotoType";
export type DayType = {
  dayId: number;
  belongsToTripId: number;
  title: string;
  date: string;
  rankeable: boolean;
  photos: PhotoType[];
  description: string;
  foodScore: number;
  joyScore: number;
};
