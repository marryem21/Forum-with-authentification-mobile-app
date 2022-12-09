import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/fb";
import { collection, onSnapshot, query } from "firebase/firestore";
import Product from "../components/Product";
import { useEffect, useState, useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("Add")} />
      ),
    });
  }, []);

  useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          category: doc.data().category,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
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
});
