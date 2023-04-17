import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [feed, setFeed] = useState(null);
  const flatlist = () => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?country=in&apiKey=69f898a10cfc48e4b44030c485e12bf0`,
    })
      .then((response) => setFeed(response.data.articles))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    flatlist();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <FlatList
          data={feed}
          keyExtractor={(item, index) => item.url}
          renderItem={({ item, index }) => <Text>{item.content}</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
