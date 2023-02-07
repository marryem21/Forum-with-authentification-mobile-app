import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/fb";
import { collection, onSnapshot, query } from "firebase/firestore";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
          isLiked: doc.data().isLiked,
          createdAt: doc.data().createdAt,
          content: doc.data().content,
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <TouchableHighlight
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 25,
        }}
      >
        <Text
          style={styles.button}
          onPress={() => {
            navigation.navigate("Add");
          }}
        >
          Add tweet
        </Text>
      </TouchableHighlight>
      <View style={styles.container}>
        <Text style={styles.title}>Tweets</Text>
        <FlatList
          style={{ width: "100%" }}
          data={products}
          renderItem={({ item }) => {
            console.log(item);
            return <Product key={item.id} {...item} />;
          }}
        ></FlatList>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
  button: {
    width: 200,
    padding: 15,
    color: "#FFF",
    fontSize: 24,
    backgroundColor: "#460B73",
    borderRadius: 15,
    textAlign: "center",
  },
});
