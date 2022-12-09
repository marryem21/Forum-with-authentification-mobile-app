import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { collection, addDoc } from "firebase/firestore";
import { TextInput, Text, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

export default function Add() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const data = [
    {
      key: "1",
      value: "Emotions",
    },
    { key: "2", value: "Jobs" },
    { key: "3", value: "Aliens" },
    { key: "4", value: "Objects" },
    { key: "5", value: "Flags" },
    { key: "6", value: "Buildings" },
    { key: "7", value: "Humans" },
  ];
  const [newItem, setNewItem] = React.useState({
    emoji: "👽",
    name: "",
    category: "",
    price: "",
    isSold: false,
    createdAt: new Date(),
  });
  const onSend = async () => {
    await addDoc(collection(database, "products"), newItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell a new product</Text>
      <Text style={styles.emoji}>{newItem.emoji}</Text>
      <TextInput
        style={styles.inputContainer}
        keyboardType="default"
        placeholder="enter your product emoji"
        onChangeText={(e) => setNewItem({ ...newItem, emoji: e })}
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        keyboardType="default"
        placeholder="enter your product name"
        onChangeText={(e) => setNewItem({ ...newItem, name: e })}
      ></TextInput>

      <TextInput
        style={styles.inputContainer}
        keyboardType="number-pad"
        placeholder="$ price"
        onChangeText={(e) => setNewItem({ ...newItem, price: e })}
      ></TextInput>
      <SelectList
        data={data}
        dropdownStyles={{
          borderColor: "gray",
          marginBottom: 15,
          paddingHorizontal: 125,
        }}
        dropdownItemStyles={{ padding: 15 }}
        placeholder="Select your emoji's category "
        setSelected={setSelected}
      />
      <Button title="Publish" onPress={onSend} />
    </View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginVertical: 6,
  },
});
