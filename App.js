import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";

const Cat = () => {
  const CustomButton = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const [inputvalue, setinputvalue] = useState("");
  const [inicialsize, setnewsize] = useState("");
  const [result, setresult] = useState("");
  const sizechanced = (size) => {
    setnewsize(size);
  };
  const textchanged = (text) => {
    setinputvalue(text);
  };

  const btn = () => {
    setresult(inputvalue / (inicialsize * inicialsize));
  };
  return (
    <View style={styles.mainwindow}>
      <Text>ONEBITHEALTH</Text>

      <View style={styles.secondwindow}>
        <Text style={styles.items}>Peso</Text>
        <TextInput
          style={(styles.items, styles.inputstyle)}
          placeholder="Ex:86.300"
          keyboardType="numeric"
          value={inputvalue}
          onChangeText={textchanged}
        ></TextInput>
        <Text style={styles.items}>Altura</Text>
        <TextInput
          style={(styles.items, styles.inputstyle)}
          placeholder="Ex:1.75"
          keyboardType="numeric"
          value={inicialsize}
          onChangeText={setnewsize}
        ></TextInput>
        <CustomButton title="calcular" onPress={btn}></CustomButton>

        <Text style={styles.items}>seu peso é:{result}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainwindow: {
    backgroundColor: "#B0C4DE",
    alignItems: "center",
    padding: 100,
  },
  secondwindow: {
    alignItems: "center",
    marginTop: 80,
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
  },
  items: {
    padding: 20,
  },
  inputstyle: {
    backgroundColor: "#F5FFFA",

    width: 200,
  },
  button: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
  },
});

export default Cat;
