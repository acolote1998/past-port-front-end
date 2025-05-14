import debugMode from "./constants/debugMode";
import Day from "./Day";
import ScoreBar from "./ScoreBar";
import type { TripType } from "./types/TripType";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tripTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    margin: 10,
  },
  tripContainer: {
    backgroundColor: "lightgray",
    alignItems: "center",
    paddingBottom: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
});

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
      <View style={styles.tripContainer}>
        {title.length > 0 && <Text style={styles.tripTitle}>{title}</Text>}
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
      {days.map((day) => (
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
      ))}
    </>
  );
}
export default Trip;
