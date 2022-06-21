import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { useState } from "react/cjs/react.development";
import React, { useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  index,
  orderBy,
} from "firebase/firestore";
import { db } from "./config";
import Filters from "./Filters";

export default function getAlldata({ navigation }) {
  const uniRef = collection(db, "Universities");

  const [data, setData] = useState([]);
  const [masterdata, setMasterData] = useState("");
  const [search, setSearch] = useState("");
  const [fee, setFee] = useState("");
  const [text, setText] = useState("");
  const moveFilter = () => {
    navigation.navigate(Filters);
  };

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

  function sortByRank() {
    getDocs(query(uniRef, orderBy("Rank", "asc"))).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
    });
  }

  function sortbyfee() {
    getDocs(
      query(uniRef, where("Fees", ">", "30000"), where("Fees", "<", "70000"))
      // query(uniRef, where("Fees", ">", `${text}`), where("Fees", "<", "70000"))
    ).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
      console.log("mytxt", text);
    });
  }

  function sortByMerit() {
    getDocs(query(uniRef, orderBy("Merit", "asc"))).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setData(users);
      console.log(users);
    });
  }
  console.log(text);

  return (
    <View style={style.container}>
      <h1>Registered Records</h1>
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal={true}>
            {/* <View>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Search Here"
              value={search}
              onChangeText={(text) => {
                searchFilter(text);
              }}
              // style={styles.searchBar}
            />
          </View> */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#2196F3",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                }}
                onPress={moveFilter}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#E1E2E4",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
                onPress={getDataWithQuery}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Lahore</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#E1E2E4",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
                onPress={sortByRank}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Rank</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#E1E2E4",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
                onPress={sortByMerit}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Merit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#E1E2E4",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
                onPress={sortbyfee}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Fee</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 80,
                  backgroundColor: "#E1E2E4",
                  height: 30,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 10,
                }}
                onPress={Admission}
              >
                <Text style={{ color: "black", fontSize: 15 }}>Open</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        }
      />

      <FlatList
        data={data}
        keyExtractor={({ id }, db) => id}
        renderItem={({ item }) => (
          <View>
              

            <View style={style.container2}>
            <Image
                style={style.image}
                source={require("./COMSATS.jpg")}
              />

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
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#F1FFFF",
    width: 500,
    marginTop: 10,
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#FEFFB1",
    // alignItems: "center",
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
    marginLeft:20,
    fontSize: 17,
    color: "black",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
});
