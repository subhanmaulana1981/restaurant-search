import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { useState } from 'react';
import Restaurants from './src/components/Restaurants';


export default function App() {

  // let term = "Burger";

  // State management
  const [term, setTerm] = useState("");

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

  // setTimeout(() => {
  //   console.log("Initial term is: ", term);
  //   setTerms("Pizza");
  //   console.log("After changed the term is now: ", term);
  // }, 3000);

  return (
    <View>

      <Header />
      <Search setTerm={ setTerm } />
      <View>
        <FlatList 
          data={ commonCategories }
          renderItem={({ item, index }) => {
            // console.log({item});

            return <CategoryItem 
              name={ item.name }
              imageUrl={ item.imageUrl }
              index={ index }
              active={ item.name === term }
              handlePress={() => setTerm(item.name)}
            />
          }}
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
          keyExtractor={(category) => category.name}
        />
      </View>
      <Restaurants />
      <StatusBar />

    </View>
  );
}

