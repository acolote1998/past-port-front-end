import debugMode from "./constants/debugMode";
import Day from "./Day";
import ScoreBar from "./ScoreBar";
import type { TripType } from "./types/TripType";
import { View, Text } from "react-native";
function Trip({
  belongsToCountryId,
  days,
  rankeable,
  title,
  tripId,
}: TripType) {
  const calculateAvgFoodScore = () => {
    let avgFood = 0;
    days.forEach((day) => {
      avgFood += day.foodScore;
    });
    return parseFloat((avgFood / days.length).toFixed(1));
  };

  const calculateAvgJoyScore = () => {
    let avgJoy = 0;
    days.forEach((day) => {
      avgJoy += day.joyScore;
    });
    return parseFloat((avgJoy / days.length).toFixed(1));
  };

  return (
    <>
      <View>
        {title.length > 0 && <Text>{title}</Text>}
        <ScoreBar
          joyScore={calculateAvgJoyScore()}
          foodScore={calculateAvgFoodScore()}
          iconHeight={32}
          iconWidth={32}
        ></ScoreBar>
        {debugMode && Number(belongsToCountryId) && (
          <Text>Belongs To Country Id: {belongsToCountryId}</Text>
        )}
        {(rankeable === true || rankeable === false) && (
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
