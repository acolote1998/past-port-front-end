import { View, Text, Image, FlatList } from "react-native";
import { DayType } from "./types/DayType";
import debugMode from "./constants/debugMode"; //Remove for deployment!
import ScoreBar from "./ScoreBar";
import ImageCarousel from "./ImageCarousel";

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
    <View className="p-5 items-center bg-lightSecondaryLigther rounded-2xl">
      {debugMode && (
        <View>
          {dayId !== undefined && <Text>Day ID: {dayId}</Text>}
          {belongsToTripId !== undefined && (
            <Text>Belongs to Trip ID: {belongsToTripId}</Text>
          )}
        </View>
      )}
      {Number(joyScore) && Number(foodScore) && date.length > 0 && (
        <View className="flex flex-row items-center">
          <Text className="mr-10">{date}</Text>
          <ScoreBar
            iconHeight={24}
            iconWidth={24}
            foodScore={foodScore}
            joyScore={joyScore}
          ></ScoreBar>
        </View>
      )}
      {title.length > 0 && (
        <Text className="text-xl font-bold m-3">{title}</Text>
      )}
      {debugMode && (rankeable == true || rankeable == false) && (
        <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      )}
      {description.length > 0 && <Text className="mb-3">{description}</Text>}
      {Array.isArray(photos) && photos.length > 0 && (
        <ImageCarousel photos={photos}></ImageCarousel>
      )}
    </View>
  );
}

export default Day;
