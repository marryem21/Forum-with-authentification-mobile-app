import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { initfirebase } from "../config/fb";
import { useNavigation } from "@react-navigation/native";

export default function Signup(props) {
  const auth = initfirebase.auth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text
          style={{
            color: "white",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Signup
        </Text>
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
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
          <Button
            onPress={() => {
              auth
                .createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                  navigation.navigate("Auth");
                })
                .catch((err) => {
                  alert(err);
                });
            }}
            title="Submit"
          ></Button>
          <Button
            onPress={() => {
              navigation.navigate("Auth");
            }}
            title="Signin"
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
    backgroundColor: "#f003",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
