import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
// import { TextInput } from "react-native-web";
import { useState } from "react/cjs/react.development";
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export default function getAlldata() {
  const [data, setData] = useState([]);
  const [masterdata, setMasterData] = useState("");
  const [search, setSearch] = useState("");

  const get = () =>
    getDocs(collection(db, "users")).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      setMasterData(users);
      console.log("Document data:", users);
    });
  useEffect(() => {
    const uma = get();
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterdata.filter((item) => {
        const itemData = item.username
          ? item.username.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterdata);
      setSearch(text);
    }
  };

  return (
    <View style={style.container}>
      <h1>Registered Records</h1>

      <FlatList
        ListHeaderComponent={
          <View>
            <View>
              <TextInput
                placeholderTextColor="grey"
                placeholder="Search Here"
                value={search}
                onChangeText={(text) => {
                  searchFilter(text);
                }}
                // style={styles.searchBar}
              />
            </View>
          </View>
        }
        data={data}
        keyExtractor={({ id }, db) => id}
        renderItem={({ item }) => (
          <View>
            <View style={style.container2}>
              <View>
                <Text style={style.data}>
                  {" "}
                  <strong>Name:</strong> {item.username}
                </Text>
                <br />
                <Text style={style.data}>
                  <strong>Email:</strong>
                  {item.email}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container2: {
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    width: 400,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    flexDirection: "row",
  },
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
  data: {
    margin: 5,
    fontSize: 19,
    color: "black",
  },
});
