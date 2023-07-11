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

  const [bntname, setbtnname] = useState("calcular");
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
    setresult((inputvalue / (inicialsize * inicialsize)).toFixed(2));
    setbtnname("calcular novamente");
  };
  const youstate = () => {
    if (result < 18.5) {
      return "Baixo peso";
    }
    if (result >= 18.5 && result <= 24.99) {
      return "normal";
    }
    if (result >= 25 && result <= 29.99) {
      return "sobrepeso";
    }
    if (result >= 30) {
      return "Obesidade";
    }
  };

  return (
    <View style={styles.mainwindow}>
      <Text style={{ fontSize: 20, color: "red" }}>ONEBITHEALTH</Text>

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
        <CustomButton title={bntname} onPress={btn}></CustomButton>

        <Text style={styles.items}>seu imc é:{result}</Text>
      </View>
      <Text
        style={{
          marginTop: 60,
          color: "red",
          fontSize: 19,
        }}
      >
        {youstate()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainwindow: {
    flex: 1,
    backgroundColor: "#DCDCDC",
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
    height: 40,
    borderRadius: 12,
    marginTop: 50,
    backgroundColor: "red",
    width: 200,
  },
  buttonText: {
    color: "white",
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
  },
});

export default Cat;
