import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = ({ secureTextEntry, placeholder, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputStyles = [styles.input, isFocused && styles.inputFocused];

  return (
    <TextInput
      style={inputStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}   
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00", 
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 16,
  },
});
