import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  const [food, setFood] = useState("");

  const handleSearch = () => {
    if (food.length > 0) {
      navigation.navigate("Results", {
        food: food,
      });
      setFood("");
    } else {
      Alert.alert("Search input empty!");
    }
  };

  return (
    <ImageBackground source={require('../assets/bgimage.jpg')}
      style={styles.backgroundImg}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/food-3.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Food Monster</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={food}
          placeholder="Enter Recipe You Want to See"
          style={styles.input}
          onChangeText={(text) => {
            setFood(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={handleSearch}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#842687",
  },
  textSubheading: {
    marginTop: 5,
    color: "#3d893a",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: "center",

  },
  input: {
    maxWidth: 500,
    width: "80%",
    borderColor: "#842687",
    borderWidth: 3,
    borderRadius: 30,
    height: 50,
    align: "center",
    paddingLeft: 20,
    color: "#842687",
    justifyContent: "center",

  },
  btnContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  btnTextContainer: {
    maxWidth: 300,
    borderRadius: 40,
    backgroundColor: "#3d893a",
    width: "80%",
    height: 50,
    justifyContent: "center",
    textAlign: "center",

  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
  backgroundImg: {
    flex: 1,
  },
});

export default Home;
