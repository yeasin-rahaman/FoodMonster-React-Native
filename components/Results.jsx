import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { View, ActivityIndicator, Dimensions } from "react-native";

import Header from "./Header";
import RecipeCard from "./RecipeCard";

function Results({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = Dimensions.get("screen");

  const food = route.params.food;
  const appID = "207c7cad";
  const apiKey = "6304a6565e16fb4c9fdf8635e8cd3428";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${appID}&app_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data");
      try {
        setLoading(true);
        const res = await fetch(url);
        const fetchedData = await res.json();
        setData(fetchedData.hits);
        setLoading(false);
      } catch (e) {

      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {!loading && <Header navigation={navigation} />}
      {loading ? (
        <View
          style={{
            height,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="purple" />
        </View>
      ) : (
        <FlatList
          data={data}
          numColumns={1}
          renderItem={RecipeCard}
        />
      )}
    </View>
  );
}

export default Results;