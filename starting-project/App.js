import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return <>
  <StatusBar style='dark'/>
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen}/>
    <Stack.Screen name="MealsOverview" component={MealsScreen}/>
  </Stack.Navigator>
  </NavigationContainer>
  
  </>
  
}

const styles = StyleSheet.create({
  container: {
    
  },
});
