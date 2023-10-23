import { View, Image, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

function detailScreen({ route }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => mealId.id === mealId)

    return <View>
        <Image source={{ uri: selectedMeal.imageUrl}}/>
        <Text>{selectedMeal.title}</Text>
        <View>

        </View>
        <Text>Ingridients</Text>
        <Text>steps</Text>
    </View>
}

export default detailScreen;