import { useState } from "react";
import Day from "./Day";
import ScoreBar from "./ScoreBar";
import type { TripType } from "./types/TripType";
import { View, Text, Pressable, FlatList } from "react-native";
import { DayType } from "./types/DayType";

function Trip({
  belongsToCountryId,
  days,
  rankeable,
  title,
  tripId,
}: TripType) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const calculateAvgScore = (type: "foodScore" | "joyScore") => {
    const total = days.reduce((sum, day) => sum + day[type], 0);
    return parseFloat((total / days.length).toFixed(1));
  };

  return (
    <>
      <Pressable onPress={() => setCollapsed(!collapsed)}>
        <View className="bg-lightSecondaryDarker w-[100vw] items-center p-1.5 rounded-2xl relative flex flex-row justify-center mt-2 ">
          {title.length > 0 && (
            <Text className="text-2xl font-bold mr-3.5">{title}</Text>
          )}
          <ScoreBar
            joyScore={calculateAvgScore("foodScore")}
            foodScore={calculateAvgScore("joyScore")}
            iconHeight={28}
            iconWidth={28}
          ></ScoreBar>
        </View>
      </Pressable>
      {!collapsed && (
        <FlatList
          data={days}
          keyExtractor={(day: DayType) => day.dayId.toString()}
          renderItem={({ item: day }) => (
            <View className="mt-1.5 mb-1.5">
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
      )}
    </>
  );
}
export default Trip;
