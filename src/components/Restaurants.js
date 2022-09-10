import { 
  View, 
  StyleSheet, 
  Text,
  ActivityIndicator,
  FlatList 
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ term }) {

  /* const searchTodos = async () => {
    const response = await yelp.get("/todos/1", {
    //   params: {
    //     limit: 1,
    //   },
    });

    console.log(response);
  };

  searchTodos(); */

  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  console.log({data: data, loading, error});

  if (loading) 
    return (
      <ActivityIndicator 
        size={ "large" } 
        marginVertical={ 30 } 
      />
    ); 

  if (error)
    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>
          { error }
        </Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList 
        data={ data }
        keyExtractor={ (restaurant) => restaurant.id }
        renderItem={({ item }) => (
          <RestaurantItem restaurant={ item } />
        )}
        sc
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    // flex: 1,
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    // leave it for now
    // height: 100, 
  },
});
