import debugMode from "./constants/debugMode";
import Day from "./Day";
import ScoreBar from "./ScoreBar";
import type { TripType } from "./types/TripType";
import { View, Text, FlatList } from "react-native";

function Trip({
  belongsToCountryId,
  days,
  rankeable,
  title,
  tripId,
}: TripType) {
  const calculateAvgScore = (type: "foodScore" | "joyScore") => {
    const total = days.reduce((sum, day) => sum + day[type], 0);
    return parseFloat((total / days.length).toFixed(1));
  };

  return (
    <>
      <View className="bg-lightSecondaryDarker items-center pb-4 rounded-b-3xl">
        {title.length > 0 && (
          <Text className="text-2xl font-bold mt-2 mb-1">{title}</Text>
        )}
        <ScoreBar
          joyScore={calculateAvgScore("foodScore")}
          foodScore={calculateAvgScore("joyScore")}
          iconHeight={32}
          iconWidth={32}
        ></ScoreBar>
        {debugMode && Number(belongsToCountryId) && (
          <Text>Belongs To Country Id: {belongsToCountryId}</Text>
        )}
        {debugMode && (rankeable === true || rankeable === false) && (
          <Text>Rankeable : {rankeable ? "Yes" : "No"}</Text>
        )}
        {debugMode && Number(tripId) && <Text>Trip Id: {tripId}</Text>}
      </View>
      <FlatList
        data={days}
        keyExtractor={(day: any) => day.dayId.toString()}
        renderItem={({ item: day }) => (
          <View style={{ marginVertical: 12 }}>
            <Day
              dayId={day.dayId}
              belongsToTripId={day.belongsToTripId}
              title={day.title}
              date={day.date}
              rankeable={day.rankeable}
              photos={day.photos}
              description={day.description}
              foodScore={day.foodScore}
              joyScore={day.joyScore}
              key={day.dayId}
            />
          </View>
        )}
      />
    </>
  );
}
export default Trip;
