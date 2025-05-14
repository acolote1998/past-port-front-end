import { View } from "react-native";
import TripData from "./testData/tripSingleDay.json";
import { useState, useEffect } from "react";
import type { TripType } from "./types/TripType";
import Trip from "./Trip";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const [trips, setTrips] = useState<TripType[]>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTrips(TripData);
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {trips?.map((trip) => {
        return (
          <Trip
            belongsToCountryId={trip.belongsToCountryId}
            days={trip.days}
            rankeable={trip.rankeable}
            title={trip.title}
            tripId={trip.tripId}
            key={trip.tripId}
          ></Trip>
        );
      })}
    </View>
  );
}
