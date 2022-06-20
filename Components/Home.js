import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react/cjs/react.development";
import CreateRecord from "./CreateRecord";
import Delete from "./Delete";
import getAlldata from "./GetAllData";
import Update from "./Update";

function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>

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
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
