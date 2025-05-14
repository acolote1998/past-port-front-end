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
      <Text>Joy Score: {joyScore}</Text>
      <Text>Photos:</Text>
      {photos.map((photo, index) => (
        <View key={`day${dayId}Photo${index}`}>
          <Image
            source={{ uri: photo.src }}
            style={{
              width: "80%", // ocupa todo el ancho disponible
              aspectRatio: 4 / 3, // mantiene la proporción
            }}
            resizeMode="contain"
          ></Image>
          <Text>{photo.description}</Text>
        </View>
      ))}
    </>
  );
}
export default Day;
