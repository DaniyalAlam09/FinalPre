import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Components/Home";
import CreateRecord from "./Components/CreateRecord";
import Delete from "./Components/Delete";
import getAlldata from "./Components/GetAllData";
import Update from "./Components/Update";
import Filters from "./Components/Filters";


const Stack = createNativeStackNavigator();

export default function Crud() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateRecord" component={CreateRecord} />
        <Stack.Screen name="Delete" component={Delete} />
        <Stack.Screen name="getAlldata" component={getAlldata} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
