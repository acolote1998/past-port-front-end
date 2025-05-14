import { View, Text, Image } from "react-native";
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
      {Number(joyScore) && <Text>Joy Score: {joyScore}</Text>}
      {Array.isArray(photos) && (
        <View>
          <Text>Photos:</Text>
          {photos.map((photo, index) => (
            <View key={`day${dayId}Photo${index}`}>
              <Image
                source={{ uri: photo.src }}
                style={{
                  width: "80%",
                  aspectRatio: 4 / 3,
                }}
                resizeMode="contain"
              />
              <Text>{photo.description}</Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
}
export default Day;
