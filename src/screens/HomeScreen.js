import { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  // let term = "Burger";

  // State management
  const [term, setTerm] = useState("");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../assets/images/pasta.png"),
    },
  ];

  // setTimeout(() => {
  //   console.log("Initial term is: ", term);
  //   setTerms("Pizza");
  //   console.log("After changed the term is now: ", term);
  // }, 3000);

  return (
    <View style={ styles.container }>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(215, 228, 207)",
        flex: 1,
    },    
});
