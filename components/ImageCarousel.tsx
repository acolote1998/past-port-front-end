import * as React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import type { PhotoType } from "./types/PhotoType";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

function ImageCarousel({ photos }: { photos: PhotoType[] }) {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="w-[95vw]">
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={photos}
        enabled={photos.length > 1}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View className="flex align-middle justify-between">
            <Image
              source={{ uri: item.src }}
              className="w-[95vw] h-[23.5vh] rounded-2xl"
              style={{ resizeMode: "stretch" }}
            />
            <Text>{item.description}</Text>
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={photos}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default ImageCarousel;
