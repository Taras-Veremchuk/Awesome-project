import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
  },
});
