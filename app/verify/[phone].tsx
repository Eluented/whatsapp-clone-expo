import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";

export default function Page() {
  const { phone } = useLocalSearchParams<{ phone: string; signin: string }>();
  console.log(phone, "THIS IS A TEST")
  const [code, setCode] = useState("");
  useEffect(() => {
    if (code.length === 6) {
      console.log("code", code);
    }
  }, [code]);

  const verifyCode = async () => {};

  const verifySignIn = async () => {};

  const resendCode = async () => {};
  return (
    <View>
      <Stack.Screen options={{ title: phone }} />
      <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 260,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 4,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
