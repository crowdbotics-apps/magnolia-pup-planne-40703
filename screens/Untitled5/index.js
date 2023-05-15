import { ImageBackground } from "react-native";
import { Slider } from "react-native-elements";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }} style={styles.vadrfzVD}>     
          <Pressable><View style={styles.row1}></View></Pressable>
          <Pressable><View style={styles.row2}></View></Pressable>
          <Pressable><View style={styles.row3}></View></Pressable>  
      <Pressable><View style={styles.VNPmYMXI}><ImageBackground style={styles.gsFXwYrT} source={require("./paw-g6b404d2a5_1280.png")} resizeMode="cover"></ImageBackground></View></Pressable><Text style={styles.JrihrQJZ}>{"Main Menu"}</Text><Pressable><View style={styles.lynqIZjt}></View></Pressable><Slider style={styles.ZnxOvyuA} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#97ae8a" maximumValue={1} minimumValue={0} value={9} disabled={true} step={6} minimumTrackTintColor="#f4f4f4" maximumTrackTintColor="#dedede"></Slider></ScrollView>
    <Text style={styles.vtgOylMN}>{"To get started select a button below. It's time to get your precious pooch organized!"}</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#405a6b"
  },
  row1: {
    flex: 1,
    backgroundColor: "#b4a7a7",
    width: 168,
    height: 96,
    position: "absolute",
    left: 9,
    top: 125,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "#5d4e4e"
  },
  row2: {
    flex: 1,
    borderWidth: 6,
    backgroundColor: "#7e7575",
    width: 110,
    height: 111,
    position: "absolute",
    left: 220,
    top: 369,
    borderRadius: 40,
    borderColor: "#5d4e4e"
  },
  row3: {
    flex: 1,
    borderColor: "#5d4e4e",
    backgroundColor: "#c0b8b8",
    width: 108,
    height: 115,
    position: "absolute",
    left: 221,
    top: 243,
    borderRadius: 40,
    borderWidth: 6
  },
  VNPmYMXI: {
    height: 66,
    width: 258,
    backgroundColor: "#efebea",
    borderRadius: 10,
    color: "#777777",
    flexWrap: "no-wrap",
    position: "absolute",
    left: 50,
    top: 2,
    flexDirection: "row",
    flex: 1,
    borderColor: "#474141",
    borderWidth: 3,
    opacity: 0.94
  },
  JrihrQJZ: {
    width: 221,
    height: 28,
    lineHeight: 21,
    fontSize: 30,
    borderRadius: 0,
    textAlign: "center",
    fontFamily: "Crimson Text",
    letterSpacing: 7,
    position: "absolute",
    left: 100,
    top: 37,
    color: "#5b4c4b"
  },
  vtgOylMN: {
    width: 327,
    height: 46,
    lineHeight: 24,
    fontSize: 9,
    borderRadius: 0,
    position: "absolute",
    left: 10,
    top: 76,
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: "Playfair Display"
  },
  vadrfzVD: {
    borderRadius: 40,
    backgroundColor: "#f1e8e8",
    width: 380,
    height: 571,
    position: "absolute",
    left: -10,
    top: -1,
    opacity: 0.99
  },
  lynqIZjt: {
    height: 116,
    width: 113,
    backgroundColor: "#5d4e4e",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 219,
    top: 119,
    borderColor: "#d1c8c8",
    borderWidth: 5
  },
  ZnxOvyuA: {
    width: 118,
    height: 26,
    position: "absolute",
    left: 40,
    top: 192
  },
  gsFXwYrT: {
    width: 44,
    height: 41,
    position: "absolute",
    left: 4,
    top: 7,
    transform: [{
      rotate: "-4deg"
    }]
  }
});
export default Untitled5;