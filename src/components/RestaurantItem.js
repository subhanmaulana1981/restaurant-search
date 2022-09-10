import { 
    View,
    Text, 
    Image, 
    StyleSheet 
} from "react-native";
import { elevation } from "../common/styles";
import { withNavigation } from "react-navigation";

function RestaurantItem({ restaurant }) {
    return (
        <View style={[ styles.elevation, styles.container ]}>
            <Image 
                source={{ uri: restaurant.image_url }}
                style={ styles.image } 
            />
            <View style={ styles.infoContainer }>
                <Text style={ styles.header }>{ restaurant.name }</Text>
                <View>
                    <Text style={ styles.info }>{ restaurant.rating }</Text>
                    <Text style={ styles.money }>{ restaurant.price }</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: "white",
        height: 100,
        alignSelf: "stretch",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
    },

    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },

    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },

    info: {
        flexDirection: "row",
    },

    rating: {
        marginRight: 20,
    },

    money: {
        color: "gold",
    },

});

export default withNavigation(RestaurantItem);