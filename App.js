import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import VideoDetails from './views/VideoDetails';
import 'react-native-gesture-handler';
import MyDrawer from './components/MyDrawer';


const Stack = createNativeStackNavigator();


export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'pro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  //   'pro-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  //   'pro-semi-bold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="VideoDetails" component={VideoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
