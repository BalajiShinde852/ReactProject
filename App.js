import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View, FlatList, TextInput, Button } from "react-native";
import { styles } from "./components/FixtureCardStyles";
import renderItem from "./components/FixtureCard";
import VideoDisplay from "./components/VideoDisplay";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [fixturesData, setFixturesData] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://35.154.67.150:5000/api/fixture/all_matches?page=${page}&rowsPerPage=5`,
        {
          headers: {
            email: "matchdayai@test.com",
          },
        }
      );
      5;
      setFixturesData(response.data.fixtures);
    };
    getData();
    console.log("current page:", page);
  }, [page]);

  const handleSearch = (text) => {
    // console.log(text);
    const result = fixturesData.filter((item) =>
      item.team1[0].name.startsWith(text)
    );

    console.log("result", result);
    setQueryText(text);
    // setFilteredData(result);
    // console.log("filtered array", filteredData);
  };

  return (
    <View style={{ borderColor: "black", borderWidth: 7 }}>
      <Text style={styles.title}>International Matches</Text>

      <View
        style={{ backgroundColor: "#e5e5e5", shadowOpacity: 5, padding: 8 }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={queryText}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        />

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={fixturesData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
        <Text> </Text>
        <View>
          <Button
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => setPage(page + 1)}
            title="next"
          />
        </View>
      </View>
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Play Video" component={VideoDisplay} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};
export default App;
