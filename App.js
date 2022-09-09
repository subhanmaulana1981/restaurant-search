import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png")
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png")
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    },

  ];

  return (
    <View>

      <Header />
      <Search />
      <CategoryItem />

      <StatusBar />

    </View>
  );
}

