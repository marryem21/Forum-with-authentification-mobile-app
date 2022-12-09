import * as React from "react";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Product({ id, emoji, name, category, price, isSold }) {
  const onEdit = () => {
    const docRef = doc(database, "products", id);
    updateDoc(docRef, {
      isSold: true,
    });
  };
  const onDelete = () => {
    const docRef = doc(database, "products", id);
    deleteDoc(docRef);
  };
  return (
    <View style={styles.productContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.emoji}>{emoji}</Text>
        <AntDesign
          style={{ color: "red" }}
          onPress={onDelete}
          name="delete"
          size={24}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.price}>${price}</Text>
      {isSold ? (
        <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]}>
          <Text style={styles.buttonText}>Sold</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Text style={styles.buttonText}>Purchase</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#FFF",
    margin: 16,
    borderRadius: 8,
  },
  emoji: {
    fontSize: 70,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
});
