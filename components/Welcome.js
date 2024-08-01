import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function Welcome() {
  const fonts = () =>
    Font.loadAsync({
      "rb-bold": require("../assets/fonts/roboto/RobotoCondensed-Black.ttf"),
    });

  const [font, setFont] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFont(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (font) {
      await SplashScreen.hideAsync();
    }
  }, [setFont]);

  if (!font) {
    return null;
  }
  return (
    <View style={styles.welcome}>
      <View style={styles.box}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
        <Text style={styles.text}>Globe Life</Text>
      </View>
      <LinearGradient
        colors={["#0A578B4D", "#369A4630", "#FFFFFF40"]}
        style={styles.semi1}
      />
      <LinearGradient
        colors={["#00558C4F", "#319B413B"]}
        style={styles.semi2}
      />
      <LinearGradient
        colors={["#00558C4F", "#319B413B"]}
        style={styles.semi3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
  },

  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
  },
  text: {
    fontFamily: "rb-bold",
    color: "#005582",
    fontSize: 65,
    textAlign: "center",
    paddingHorizontal: 90,
  },

  vecContainer: {
    flex: 1,
  },

  logo: {
    width: "20%",
    height: "10%",
  },
  semi1: {
    overflow: "hidden",
    position: "absolute",
    top: 600,
    alignSelf: "center",
    width: 330,
    height: 200,
    borderTopRightRadius: 190,
    borderTopLeftRadius: 190,
  },
  semi2: {
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    top: 550,
    width: 400,
    height: 250,
    borderTopLeftRadius: 190,
    borderTopRightRadius: 190,
  },
  semi3: {
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    top: 500,
    width: 450,
    height: 320,
    borderTopLeftRadius: 220,
    borderTopRightRadius: 220,
  },
});
