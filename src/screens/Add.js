import * as React from "react";
import { database } from "../config/fb";
import { collection, addDoc } from "firebase/firestore";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

export default function Add() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Politics" },
    { key: "2", value: "Cooking" },
    { key: "3", value: "pop" },
  ];
  const [newItem, setNewItem] = React.useState({
    name: "",
    category: "",
    content: "",
    isSold: false,
    createdAt: new Date(),
  });
  const onSend = async () => {
    await addDoc(collection(database, "products"), newItem);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tweet about this subject</Text>
      <TextInput
        style={styles.inputContainer}
        keyboardType="default"
        placeholder="enter your tweet title"
        onChangeText={(e) => setNewItem({ ...newItem, name: e })}
      ></TextInput>

      <TextInput
        style={styles.inputContainer}
        keyboardType="default"
        placeholder="content"
        onChangeText={(e) => setNewItem({ ...newItem, content: e })}
      ></TextInput>
      <SelectList
        data={data}
        dropdownStyles={{
          borderColor: "gray",
          marginBottom: 15,
          paddingHorizontal: 125,
        }}
        dropdownItemStyles={{ padding: 15 }}
        placeholder="Select your tweet's category "
        setSelected={setSelected}
        save="value"
      />
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 25,
        }}
      >
        <Text style={styles.button} onPress={onSend}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  button: {
    color: "#FFF",
    fontSize: 18,
    backgroundColor: "#460B73",
    borderRadius: 15,
    textAlign: "center",
    width: 200,
    padding: 15,
  },
});
