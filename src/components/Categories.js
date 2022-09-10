import CategoryItem from "./CategoryItem";
import { FlatList } from "react-native";

export default function Categories({ categories, setTerm, term }) {
  return (
    <FlatList
      data={ categories }
      renderItem={({ item, index }) => {
        // console.log({item});

        return (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        );
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  );
}
