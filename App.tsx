import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Day from "./components/Day";
import TripData from "./components/testData/trips.json";
import { useState, useEffect } from "react";
import type { TripType } from "./components/types/TripType";
import Trip from "./components/Trip";

export default function App() {
  const [trips, setTrips] = useState<TripType[]>();

  useEffect(() => {
    setTrips(TripData);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
