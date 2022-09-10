import { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  // console.log({ data, loading, error });

  if (loading) return <ActivityIndicator />;

  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight, width: imageWidth }}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
