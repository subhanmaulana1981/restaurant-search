import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) return 
    setTerm(input);
    setInput("");
  };

//   console.log(input);

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Restaurants, food"
        style={styles.input}
        value={ input }
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={ handleEndEditing }
      />
      {/* <Text>{ input }</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },

  elevation,

  input: {
    marginLeft: 10,
    fontSize: 20,
  },
});
