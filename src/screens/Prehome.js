import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

function Prehome() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title1}>Welcome to our Forum</Text>
        <Image style={styles.image} source={require("../../assets/shop.png")} />
        <Text style={styles.title2}>
          In here you can tweet about everything and everyone!! Just join our
          family
        </Text>
      </View>
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
            navigation.navigate("Auth");
          }}
        >
          Start
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    textAlign: "center",
  },
  title1: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
  title2: {
    fontSize: 25,
    margin: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    width: 80,
    color: "#FFF",
    fontSize: 24,
    backgroundColor: "#460B73",
    borderRadius: 15,
    textAlign: "center",
  },
});

export default Prehome;
