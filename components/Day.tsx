import { View, Text, Pressable } from "react-native";
import { DayType } from "./types/DayType";
import debugMode from "./constants/debugMode"; //Remove for deployment!
import ScoreBar from "./ScoreBar";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";
import ArrowDownIcon from "./svgs/ArrowDownIcon";
import ArrowRightIcon from "./svgs/ArrowRightIcon";

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
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <View
      className={`p-5 transition-transform items-center bg-lightSecondaryLigther rounded-2xl`}
    >
      {debugMode && (
        <View>
          {dayId !== undefined && <Text>Day ID: {dayId}</Text>}
          {belongsToTripId !== undefined && (
            <Text>Belongs to Trip ID: {belongsToTripId}</Text>
          )}
        </View>
      )}
      <View>
        {Number(joyScore) && Number(foodScore) && date.length > 0 && (
          <View className="flex flex-row items-center">
            <Text className="mr-10">{date}</Text>
            <ScoreBar
              iconHeight={24}
              iconWidth={24}
              foodScore={foodScore}
              joyScore={joyScore}
            ></ScoreBar>
            {(title.length > 0 ||
              description.length > 0 ||
              photos.length > 0) && (
              <Pressable onPress={() => setCollapsed(!collapsed)}>
                <Text className="ml-5">
                  {collapsed ? (
                    <ArrowRightIcon width={12} height={12} />
                  ) : (
                    <ArrowDownIcon width={12} height={12} />
                  )}
                </Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
      {title.length > 0 && !collapsed && (
        <Text className="text-xl font-bold m-3">{title}</Text>
      )}
      {debugMode && (rankeable == true || rankeable == false) && (
        <Text>Rankeable: {rankeable ? "Yes" : "No"}</Text>
      )}
      {description.length > 0 && !collapsed && (
        <Text className="mb-3">{description}</Text>
      )}
      {Array.isArray(photos) && photos.length > 0 && !collapsed && (
        <ImageCarousel photos={photos}></ImageCarousel>
      )}
    </View>
  );
}

export default Day;
