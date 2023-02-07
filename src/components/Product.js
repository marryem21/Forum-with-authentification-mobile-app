import * as React from "react";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function Product({ id, name, category, content, isLiked }) {
  const onEdit = () => {
    const docRef = doc(database, "products", id);
    updateDoc(docRef, {
      isLiked: !isLiked,
    });
  };
  const onDelete = () => {
    const docRef = doc(database, "products", id);
    deleteDoc(docRef);
  };
  return (
    <View style={styles.productContainer}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <AntDesign
          style={{ color: "purple" }}
          onPress={onDelete}
          name="delete"
          size={24}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.price}>{content}</Text>
      {isLiked ? (
        <TouchableOpacity onPress={onEdit}>
          <Foundation
            style={{ color: "purple", marginRight: 15 }}
            size={30}
            name="like"
            onPress=""
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onEdit}>
          <EvilIcons
            style={{ color: "purple", marginRight: 15 }}
            size={30}
            name="like"
            onPress=""
          />
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
    backgroundColor: "#460B73",
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
