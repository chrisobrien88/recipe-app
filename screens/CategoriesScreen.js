import { FlatList, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

import React from "react";
import Category from "../models/category";

const CategoriesScreen = ({ navigation }) => {
  // you only get the navigation prop if the component is registered as a screen in the Stack.navigator in app.js
  // or you can use the useNavigation hook

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      // the first argument is the name of the screen you want to navigate to
      // the second argument is the data you want to pass to the screen
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  
  return (
    <FlatList
      data={CATEGORIES}
      // the keyExtractor is used to extract the key from the data prop
      keyExtractor={(item) => item.id}
      // renderItem is a function that returns a react component
      // in renderItem, Flatlist will pass an object with the following properties: item, index, separators
      // item is the item from the data prop using the id from the keyExtractor
      // this is why the renderItem function does not need to accept any arguments, it is passed the itemData object (see above)
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
