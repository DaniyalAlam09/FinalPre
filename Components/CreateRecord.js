import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react/cjs/react.development";
import {
  collection,
  addDoc,
  
} from "firebase/firestore";
import { db } from "./config";

export default function CreateRecord() {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Rank, setRank] = useState("");
  const [Fees, setFees] = useState("");
  const [Merit, setMerit] = useState("");

  function create() {
    addDoc(collection(db, "Universities"), {
      Name: Name,
      Location: Location,
      Rank:Rank,
      Fees:Fees,
      Merit:Merit
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
        style={styles.input}
        placeholder="Name"
        onChangeText={(Name) => {
          setName(Name);
        }}
        value={Name}
      />
      <TextInput
        style={styles.input}
        placeholder="Fees"
        onChangeText={(Fees) => {
          setFees(Fees);
        }}
        value={Fees}
      />
      <TextInput
        style={styles.input}
        placeholder="Merit"
        onChangeText={(Merit) => {
          setMerit(Merit);
        }}
        value={Merit}
      />
      <TextInput
        style={styles.input}
        placeholder="Rank"
        onChangeText={(Rank) => {
          setRank(Rank);
        }}
        value={Rank}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        onChangeText={(Location) => {
          setLocation(Location);
        }}
        value={Location}
      />

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
        Sumbit{" "}
      </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFFB1",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
});
