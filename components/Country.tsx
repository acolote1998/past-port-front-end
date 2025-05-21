import { useState } from "react";
import debugMode from "./constants/debugMode";
import Day from "./Day";
import ScoreBar from "./ScoreBar";
import type { CountryType } from "./types/CountryType";
import { View, Text, Pressable, FlatList } from "react-native";
import { TripType } from "./types/TripType";
import Trip from "./Trip";

function Country({ countryId, trips, rankeable, countryName }: CountryType) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const calculateAvgScore = (type: "foodScore" | "joyScore") => {
    return 0;
  };

  return (
    <>
      <Pressable onPress={() => setCollapsed(!collapsed)}>
        <View className="bg-lightSecondaryDarker w-[100vw] items-center p-1.5 rounded-2xl relative flex flex-row justify-center mt-2 ">
          {countryName.length > 0 && (
            <Text className="text-2xl font-bold mr-3.5">{countryName}</Text>
          )}
          <ScoreBar
            joyScore={calculateAvgScore("foodScore")}
            foodScore={calculateAvgScore("joyScore")}
            iconHeight={28}
            iconWidth={28}
          ></ScoreBar>
          {debugMode && Number(countryId) && (
            <Text>Country Id: {countryId}</Text>
          )}
          {debugMode && (rankeable === true || rankeable === false) && (
            <Text>Rankeable : {rankeable ? "Yes" : "No"}</Text>
          )}
        </View>
      </Pressable>
      {!collapsed && (
        <FlatList
          data={trips}
          keyExtractor={(trip: TripType) => trip.tripId.toString()}
          renderItem={({ item: trip }) => (
            <View className="mt-1.5 mb-1.5">
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
