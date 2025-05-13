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
        <Text>Title: {title}</Text>
        <Text>Belongs To Country Id: {belongsToCountryId}</Text>
        <Text>Rankeable : {rankeable}</Text>
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
