import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { Children, createContext, useContext } from "react";

type RadioButtonProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};
type RadioGroupProps = {
  children: React.ReactNode;
  groupName: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};
type RadioContextType = {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};
const RadioContext = createContext<RadioContextType>({
  selectedValue: "",
  setSelectedValue: () => {},
});

const RadioButton: React.FC<RadioButtonProps> = ({ label, value }) => {
  const { selectedValue, setSelectedValue } = useContext(RadioContext);

  return (
    <Pressable
      style={{ flexDirection: "row", gap: 10 }}
      onPress={() => setSelectedValue(value)}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: selectedValue === value ? "#306A68" : "#BDBDBD",
          borderRadius: 10,
          width: 20,
          height: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedValue === value && (
          <View
            style={{
              backgroundColor: "#306A68",
              borderRadius: 5,
              height: 10,
              width: 10,
            }}
          ></View>
        )}
      </View>
      <Text style={{ color: selectedValue === value ? "#306A68" : "#BDBDBD" }}>
        {label}
      </Text>
    </Pressable>
  );
};
const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  groupName,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <RadioContext.Provider value={{ selectedValue, setSelectedValue }}>
      <Text style={{ color: "#BDBDBD" }}>{groupName}</Text>
      <View style={{ gap: 10 }}>{children}</View>
    </RadioContext.Provider>
  );
};
export { RadioButton, RadioGroup };
const styles = StyleSheet.create({});
