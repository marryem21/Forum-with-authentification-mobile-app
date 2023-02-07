import React from "react";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Categories() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.productContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Politics</Text>
          </View>
          <Text style={styles.tweets}>15 tweets</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.productContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Cooking</Text>
          </View>
          <Text style={styles.tweets}>45 tweets</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.productContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Pop stars</Text>
          </View>
          <Text style={styles.tweets}>69 tweets</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#FFF",
    margin: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 40,
  },
  tweets: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
});

export default Categories;
