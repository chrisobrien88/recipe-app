import { MEALS } from "../data/dummy-data";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Meal from "../models/meal";
// import { useRoute } from "@react-navigation/native";

import MealItem from "../components/MealItem";

// parent component: CategoriesScreen
const MealsOverviewScreen = ({ route }) => {
  // the route prop is passed to the component by the navigator
  // the route prop contains the params prop which contains the data passed to the screen
  // categoryId is passed in the parent component (CategoriesScreen) in the onPress handler
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability,
        ingredients: item.ingredients,
    };
    return (
      <MealItem {...mealItemProps}/>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
