import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TextInput } from "react-native-web";
import { useState } from "react/cjs/react.development";
import React, { useEffect } from "react";
import { collection, getDocs, query, where, index, orderBy } from "firebase/firestore";
import { db } from "./config";

export default function getAlldata() {
  const uniRef = collection(db, "Universities");
  
  const [data, setData] = useState([]);
  const [masterdata, setMasterData] = useState("");
  const [search, setSearch] = useState("");
  const [fee, setFee] = useState("");

  const get = () =>
    getDocs(collection(db, "Universities")).then((docSnap) => {
      let Universities = [];
      docSnap.forEach((doc) => {
        Universities.push({ ...doc.data(), id: doc.id });
      });
      setData(Universities);
      setMasterData(Universities);
      console.log("Document data:", Universities);
    });
  useEffect(() => {
    const uma = get();
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterdata.filter((item) => {
        const itemData = item.Name ? item.Name.toUpperCase() : "".toUpperCase();
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

  const sortbyfee = () => {
    var c;
    fee.sort(function (a, b) {
      return (c = a.fee - b.fee);
    });
    console.log(fee);
    console.log(this.setState({ universities: fee }));
  };

  function getDataWithQuery() {
    getDocs(
      query(collection(db, "Universities"), where("Location", "==", "Lahore"))
    ).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log("Uni in Lahore are", users);
    });
  }

  function Admission() {
    getDocs(
      query(collection(db, "Universities"), where("Admission", "==", "Open"))
    ).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
    });
  }

  function sortByRank (){
    getDocs(
    query(uniRef, orderBy("Rank", "asc"))
    ).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
    });
  }
  function sortByMerit (){
    getDocs(
    query(uniRef, orderBy("Merit", "asc"))
    ).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
    });
  }

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
            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "#2196F3",
                height: 30,
                borderRadius: 5,
                // justifyContent: "center",
                alignItems: "center",
                // alignSelf: "center",
                marginTop: 30,
                // marginLeft: 40,
              }}
              onPress={getDataWithQuery}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Uni in Lahore
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "#2196F3",
                height: 30,
                borderRadius: 5,
                // justifyContent: "center",
                alignItems: "center",
                // alignSelf: "center",
                marginTop: 30,
                // marginLeft: 40,
              }}
              onPress={sortByRank}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Rank
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "#2196F3",
                height: 30,
                borderRadius: 5,
                // justifyContent: "center",
                alignItems: "center",
                // alignSelf: "center",
                marginTop: 30,
                // marginLeft: 40,
              }}
              onPress={sortByMerit}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Merit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "#2196F3",
                height: 30,
                borderRadius: 5,
                // justifyContent: "center",
                alignItems: "center",
                // alignSelf: "center",
                marginTop: 30,
                // marginLeft: 40,
              }}
              onPress={Admission}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Admission Open
              </Text>
            </TouchableOpacity>
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
                  <strong>Name:</strong> {item.Name}
                </Text>
                <br />
                <Text style={style.data}>
                  <strong>Fees:</strong>
                  {item.Fees}
                </Text>
                <br />
                <Text style={style.data}>
                  <strong>Location:</strong>
                  {item.Location}
                </Text>
                <br />
                <Text style={style.data}>
                  <strong>Merit:</strong>
                  {item.Merit}
                </Text>
                <br />
                <Text style={style.data}>
                  <strong>Rank:</strong>
                  {item.Rank}
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
