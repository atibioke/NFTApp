import { registerRootComponent } from 'expo';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import 'react-native-gesture-handler';
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: { ...DefaultTheme.color, 
    background: "transparent"
   },
};

const App = () => {

  const [loaded] = useFonts({
    interBold: require('./assets/fonts/Inter-Bold.ttf'),
    interLight: require('./assets/fonts/Inter-Light.ttf'),

    interMedium: require('./assets/fonts/Inter-Medium.ttf'),

    interRegular: require('./assets/fonts/Inter-Regular.ttf'),

    interSemiBold: require('./assets/fonts/Inter-SemiBold.ttf')

  })


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
registerRootComponent(App);
export default App;
