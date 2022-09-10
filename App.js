import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "rgb(0, 51, 153)",
      },
      headerTintColor: "white",
    }
  }
);

export default createAppContainer(navigator);
