import { StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.development";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export default function Delete() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  function deleteData() {
    deleteDoc(doc(db, "users", "Cp2lE0UYBuobHAxJWFgI"));
  }


  return (
    <View style={styles.container}>
      <h1>Delete Records</h1>

      <button style={{
          width: 200,
          backgroundColor: "#2196F3",
          height: 30,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 30,
          marginLeft: 40,

        }} onClick={ deleteData}>Delete Record </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
