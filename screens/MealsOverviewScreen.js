import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
// import { useRoute } from "@react-navigation/native";

// parent component: CategoriesScreen
const MealsOverviewScreen = ({ route }) => {
// the route prop is passed to the component by the navigator
// the route prop contains the params prop which contains the data passed to the screen
// categoryId is passed in the parent component (CategoriesScreen) in the onPress handler
    const catId = route.params.categoryId;
    return (
        <View style={styles.container}>
            <Text>The Meals Overview Screen! {catId} </Text>
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