import { View, Text, Image, FlatList } from "react-native";
import { DayType } from "./types/DayType";
import debugMode from "./constants/debugMode"; //Remove for deployment!
import JoyIcon from "./JoyIcon";
import FoodIcon from "./FoodIcon";
import ScoreBar from "./ScoreBar";

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
      {debugMode && (
        <View>
          {dayId !== undefined && <Text>Day ID: {dayId}</Text>}
          {belongsToTripId !== undefined && (
            <Text>Belongs to Trip ID: {belongsToTripId}</Text>
          )}
        </View>
      )}
      {title.length > 0 && <Text>Title: {title}</Text>}
      {date.length > 0 && <Text>Date: {date}</Text>}
      {(rankeable == true || rankeable == false) && (
        <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      )}
      {description.length > 0 && <Text>Description: {description}</Text>}
      {Number(joyScore) && Number(foodScore) && (
        <ScoreBar
          iconHeight={24}
          iconWidth={24}
          foodScore={foodScore}
          joyScore={joyScore}
        ></ScoreBar>
      )}

      {
        // User react-native-snap-carousel in the future!!!
      }
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
