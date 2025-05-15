import { View, Text, Image, FlatList } from "react-native";
import { DayType } from "./types/DayType";
import debugMode from "./constants/debugMode"; //Remove for deployment!
import ScoreBar from "./ScoreBar";
import { StyleSheet } from "react-native";
import ImageCarousel from "./ImageCarousel";

const styles = StyleSheet.create({
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

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
    <View
      style={{
        alignItems: "center",
        padding: 5,
        backgroundColor: "lightgray",
        borderRadius: 20,
      }}
    >
      {debugMode && (
        <View>
          {dayId !== undefined && <Text>Day ID: {dayId}</Text>}
          {belongsToTripId !== undefined && (
            <Text>Belongs to Trip ID: {belongsToTripId}</Text>
          )}
        </View>
      )}
      {title.length > 0 && <Text style={styles.dayTitle}>{title}</Text>}
      {date.length > 0 && <Text>{date}</Text>}
      {debugMode && (rankeable == true || rankeable == false) && (
        <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      )}
      {description.length > 0 && <Text>{description}</Text>}
      {Number(joyScore) && Number(foodScore) && (
        <ScoreBar
          iconHeight={24}
          iconWidth={24}
          foodScore={foodScore}
          joyScore={joyScore}
        ></ScoreBar>
      )}
      {Array.isArray(photos) && photos.length > 0 && (
        <ImageCarousel photos={photos}></ImageCarousel>
      )}
    </View>
  );
}

export default Day;
