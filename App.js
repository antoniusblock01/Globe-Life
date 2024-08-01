import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import ContactAdmin from "./components/ContactAdmin";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import LogIn from "./components/LogIn";
import PasswordScreen from "./components/PasswordScreen";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ContactAdmin" component={ContactAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
