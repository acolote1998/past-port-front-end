import { View, Text, Pressable } from "react-native";
import { DayType } from "./types/DayType";
import ScoreBar from "./ScoreBar";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";
import ArrowDownIcon from "./svgs/ArrowDownIcon";
import ArrowRightIcon from "./svgs/ArrowRightIcon";

function Day({
  title,
  date,
  photos,
  description,
  foodScore,
  joyScore,
}: DayType) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <View
      className={`p-5 transition-transform items-center bg-lightSecondaryLigther rounded-2xl`}
    >
      <View>
        {Number(joyScore) && Number(foodScore) && date.length > 0 && (
          <Pressable onPress={() => setCollapsed(!collapsed)}>
            <View className="flex flex-row items-center">
              <Text className="mr-5">{date}</Text>
              <ScoreBar
                iconHeight={24}
                iconWidth={24}
                foodScore={foodScore}
                joyScore={joyScore}
              ></ScoreBar>
              {title.length > 0 ||
              description.length > 0 ||
              photos.length > 0 ? (
                <Text className="ml-12">
                  {collapsed ? (
                    <ArrowRightIcon width={16} height={16} />
                  ) : (
                    <ArrowDownIcon width={16} height={16} />
                  )}
                </Text>
              ) : (
                <View
                  className="ml-12"
                  style={{ width: 16, height: 16 }}
                ></View>
              )}
            </View>
          </Pressable>
        )}
      </View>
      {title.length > 0 && !collapsed && (
        <Text className="text-xl font-bold m-3">{title}</Text>
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
