import { View, Text, StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"

function MealsScreen() {
    return <View style={styles.container}>
        <Text>
            Meals Overview
        </Text>
    </View>
}

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});