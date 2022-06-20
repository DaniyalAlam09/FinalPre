import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CreateRecord from "./CreateRecord";
import Delete from "./Delete";
import getAlldata from "./GetAllData";
import Update from "./Update";

function Home({ navigation }) {
  const moveCreate = () => {
    navigation.navigate(CreateRecord);
  };
  const moveDelete = () => {
    navigation.navigate(Delete);
  };
  const getData = () => {
    navigation.navigate(getAlldata);
  };
  const updateRecord = () => {
    navigation.navigate(Update);
  };
  return (
    <View>
      <TouchableOpacity
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
        onPress={moveCreate}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Create
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
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
        onPress={moveDelete}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          delete Record
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
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
        onPress={getData}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Get All Record
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
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
        onPress={updateRecord}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Update Record
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
