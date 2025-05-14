import { ScoreBarType } from "./types/ScoreBarType";
import JoyIcon from "./JoyIcon";
import FoodIcon from "./FoodIcon";
import { View, Text } from "react-native";

const ScoreBar = ({ foodScore, joyScore }: ScoreBarType) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <FoodIcon width={24} height={24} />
      <Text>{foodScore}</Text>
      <JoyIcon width={24} height={24}></JoyIcon>
      <Text>{joyScore}</Text>
    </View>
  );
};

export default ScoreBar;
