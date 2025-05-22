import { ScoreBarType } from "./types/ScoreBarType";
import JoyIcon from "./svgs/JoyIcon";
import FoodIcon from "./svgs/FoodIcon";
import { View, Text } from "react-native";
import StarIcon from "./svgs/StarIcon";

const ScoreBar = ({
  foodScore,
  joyScore,
  iconHeight,
  iconWidth,
}: ScoreBarType) => {
  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <StarIcon width={iconWidth} height={iconHeight} />
      <Text>{Math.round((foodScore + joyScore) / 2)}</Text>
      <Text> | </Text>
      <FoodIcon width={iconWidth} height={iconHeight} />
      <Text>{foodScore}</Text>
      <Text> | </Text>
      <JoyIcon width={iconWidth} height={iconHeight} />
      <Text>{joyScore}</Text>
    </View>
  );
};

export default ScoreBar;
