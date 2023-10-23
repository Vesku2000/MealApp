import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';
import MealDetails from './components/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator>
      <Drawer.Screen />
  </Drawer.Navigator>
};

export default function App() {
  return <>
  <StatusBar style='light'/>
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "orange"},
      contentStyle: { backgroundColor: '#45435F'}
    }}>
    <Stack.Screen 
    name="Categories"
    component={CategoriesScreen}
    option={{
      title: "All Categories",
    }}
    />
    <Stack.Screen 
    name="MealsOverview" 
    component={MealsScreen}

    />
    <Stack.Screen name="MealDetail" component={DetailScreen}
    />
  </Stack.Navigator>
  </NavigationContainer>
  
  </>
  
}

const styles = StyleSheet.create({
  container: {
    
  },
});
