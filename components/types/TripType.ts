import { DayType } from "./DayType";

export type TripType = {
  title: string;
  tripId: number;
  belongsToCountryId: number;
  rankeable: boolean;
  days: DayType[];
};
