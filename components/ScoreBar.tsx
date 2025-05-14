import { ScoreBarType } from "./types/ScoreBarType";
import JoyIcon from "./JoyIcon";
import FoodIcon from "./FoodIcon";
import { View, Text } from "react-native";

const ScoreBar = ({
  foodScore,
  joyScore,
  iconHeight,
  iconWidth,
}: ScoreBarType) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <FoodIcon width={iconWidth} height={iconHeight} />
      <Text>{foodScore}</Text>
      <JoyIcon width={iconWidth} height={iconHeight}></JoyIcon>
      <Text>{joyScore}</Text>
    </View>
  );
};

export default ScoreBar;
