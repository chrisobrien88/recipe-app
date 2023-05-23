import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>The Meals Overview Screen!</Text>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
});