import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  navigation,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  title,
  imageUrl,
  ingredients,
  duration,
  complexity,
  affordability,
}) => {
  const handlePress = ({ navigation }) => {
    console.log("MealItem.js handlePress");
    useNavigation.navigate("MealsOverview", {
      ingredients: ingredients,
      title: title,
      imageUrl: imageUrl,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#9a9898" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={handlePress}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
