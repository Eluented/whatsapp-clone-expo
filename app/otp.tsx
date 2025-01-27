import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

const otp = () => {
  const openLink = () => {
    Linking.openURL("https://www.onurbelek.com");
  };

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const route = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        {" "}
        <Text style={styles.description}>otp</Text>
        <View style={styles.list}>
          <View >
            <Text>Germany</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
});

export default otp;
