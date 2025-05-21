import type { TripType } from "./TripType";
export type CountryType = {
  countryName: string;
  countryId: number;
  rankeable: boolean;
  trips: TripType[];
};
