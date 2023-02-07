import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { initfirebase } from "../config/fb";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";

export default function Auth(props) {
  const auth = initfirebase.auth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("foulen@gmail.com");
  const [pwd, setPwd] = useState("123456");
  const onSubmit = () => {
    auth
      .signInWithEmailAndPassword(email, pwd)
      .then(() => {
        navigation.navigate("Categories");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.container2}>
        <Text
          style={{
            color: "white",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Signin
        </Text>
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
            {
              console.log(email);
            }
          }}
          keyboardType="email-address"
          style={styles.textInput}
          placeholder="email@site.com"
        ></TextInput>
        <TextInput
          onChangeText={(text) => {
            setPwd(text);
          }}
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="password"
        ></TextInput>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 25,
          }}
        >
          <Button onPress={onSubmit} title="Submit"></Button>
          <Button
            onPress={() => {
              navigation.navigate("Signup");
            }}
            title="Signup"
            style={{ margin: 15 }}
          ></Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    backgroundColor: "white",
    width: "85%",
    height: 40,
    textAlign: "center",
    borderRadius: 10,
  },
  container2: {
    borderRadius: 10,
    height: 300,
    width: "90%",
    backgroundColor: "#0003",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 80,
    color: "#FFF",
    fontSize: 18,
    backgroundColor: "#460B73",
    borderRadius: 15,
    textAlign: "center",
  },
});
