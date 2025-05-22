import { useEffect, useState } from "react";
import ScoreBar from "./ScoreBar";
import type { CountryType } from "./types/CountryType";
import { View, Text, Pressable, FlatList } from "react-native";
import { TripType } from "./types/TripType";
import Trip from "./Trip";

function Country({ trips, countryName }: CountryType) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [foodScore, setFoodScore] = useState<number>(0);
  const [joyScore, setJoyScore] = useState<number>(0);

  const calculateAverageScore = (scoreKey: "foodScore" | "joyScore") => {
    let totalDays = 0;
    let totalScore = 0;

    trips.forEach((trip) =>
      trip.days.forEach((day) => {
        totalScore += day[scoreKey];
        totalDays++;
      })
    );

    return totalDays === 0 ? 0 : Math.round(totalScore / totalDays);
  };

  useEffect(() => {
    setFoodScore(calculateAverageScore("foodScore"));
    setJoyScore(calculateAverageScore("joyScore"));
  }, [trips]);

  return (
    <>
      <Pressable onPress={() => setCollapsed(!collapsed)}>
        <View className="bg-lightSecondaryDarker w-[100vw] items-center p-1.5 rounded-2xl relative flex flex-row justify-center mt-2 ">
          {countryName.length > 0 && (
            <Text className="text-2xl font-bold mr-3.5">{countryName}</Text>
          )}
          <ScoreBar
            joyScore={joyScore}
            foodScore={foodScore}
            iconHeight={28}
            iconWidth={28}
          ></ScoreBar>
        </View>
      </Pressable>
      {!collapsed && (
        <FlatList
          data={trips}
          keyExtractor={(trip: TripType) => trip.tripId.toString()}
          renderItem={({ item: trip }) => (
            <View className="mt-1.5 mb-1.5 items-center">
              <Trip
                tripId={trip.tripId}
                belongsToCountryId={trip.belongsToCountryId}
                title={trip.title}
                rankeable={trip.rankeable}
                days={trip.days}
                key={trip.tripId}
              />
            </View>
          )}
        />
      )}
    </>
  );
}
export default Country;
