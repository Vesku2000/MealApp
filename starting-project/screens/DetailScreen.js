import { View, Image, Text } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function DetailScreen({ route }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return <View>
        <Image source={{ uri: selectedMeal.imageUrl}}/>
        <Text>{selectedMeal.title}</Text>
        <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        />
        <Text>Ingridients</Text>
        {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
        <Text>steps</Text>
        {selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}
    </View>
}

export default DetailScreen;