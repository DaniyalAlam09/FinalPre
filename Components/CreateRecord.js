import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react/cjs/react.development";
import {
  collection,
  addDoc,
  
} from "firebase/firestore";
import { db } from "./config";

export default function CreateRecord() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  function create() {
    addDoc(collection(db, "users"), {
      username: username,
      email: email,
    })
      .then(() => {
        // Data saved successfully!
        console.log("data submitted");
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <h1>Get Register</h1>

      <TextInput
        value={username}
        onChangeText={(username) => {
          setName(username);
        }}
        placeholder="Username"
        style={styles.textBoxes}
      ></TextInput>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}
      ></TextInput>

      <button
        style={{
          width: 200,
          backgroundColor: "#2196F3",
          height: 30,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 30,
          marginLeft: 40,
        }}
        onClick={create}
      >
        Refresh Data{" "}
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
  h1:{
    justifyContent: "center",
    alignItems: "center",
    
  },
  
});
