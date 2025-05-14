import { View, Text, Image, FlatList } from "react-native";
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
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Day ID: {dayId}</Text>
      <Text>Belongs to Trip ID: {belongsToTripId}</Text>
      <Text>Title: {title}</Text>
      <Text>Date: {date}</Text>
      {(rankeable == true || rankeable == false) && (
        <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      )}
      {description.length > 0 && <Text>Description: {description}</Text>}
      {Number(foodScore) && <Text>Food Score: {foodScore}</Text>}
      {Number(joyScore) && <Text>Joy Score: {joyScore}</Text>}

      {Array.isArray(photos) && photos.length > 0 && (
        <View style={{ alignItems: "center" }}>
          <Text>Pictures</Text>
          <FlatList
            data={photos}
            keyExtractor={(_, index) => `photo-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center", marginRight: 10 }}>
                <Image
                  source={{ uri: item.src }}
                  style={{
                    width: 375, // Fijamos un ancho específico
                    height: 237, // Definimos la altura para controlar el tamaño
                    borderRadius: 20,
                  }}
                  resizeMode="cover"
                />
                <Text>{item.description}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

export default Day;
