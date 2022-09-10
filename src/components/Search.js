import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

export default function Search() {

    const [input, setInput] = useState("");

    return (
        <View style={ [styles.container, styles.elevation] }>
            <FontAwesome name="search" size={ 25 }/>            
            <TextInput 
                placeholder="Restaurants, food"
                style={ styles.input }
                onChangeText={ (text) => {setInput(text)} }
            />
            <Text>{ input }</Text>
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