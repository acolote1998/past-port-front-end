import debugMode from "./constants/debugMode";
import Day from "./Day";
import type { TripType } from "./types/TripType";
import { View, Text } from "react-native";
function Trip({
  belongsToCountryId,
  days,
  rankeable,
  title,
  tripId,
}: TripType) {
  return (
    <>
      <View>
        {title.length > 0 && <Text>Title: {title}</Text>}
        {debugMode && Number(belongsToCountryId) && (
          <Text>Belongs To Country Id: {belongsToCountryId}</Text>
        )}
        {(rankeable === true || rankeable === false) && (
          <Text>Rankeable : {rankeable ? "Yes" : "No"}</Text>
        )}
        <Text>Trip Id: {tripId}</Text>
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
