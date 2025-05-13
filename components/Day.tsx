import { Text } from "react-native";
import { DayType } from "./types/DayType";
function Day({
  dayId,
  belongsToTripId,
  title,
  date,
  rankeable,
  photos,
  description,
  foodScore,
  joyScore,
}: DayType) {
  return (
    <>
      <Text>Day ID: {dayId}</Text>
      <Text>Belongs to Trip ID: {belongsToTripId}</Text>
      <Text>Title: {title}</Text>
      <Text>Date: {date}</Text>
      <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      <Text>Description: {description}</Text>
      <Text>Food Score: {foodScore}</Text>
      <Text>Joy Score: {joyScore}</Text>
      <Text>Photos:</Text>
      {photos.map((photo, index) => (
        <Text key={`day${dayId}Photo${index}`}>
          - {photo.description} ({photo.src})
        </Text>
      ))}
    </>
  );
}
export default Day;
