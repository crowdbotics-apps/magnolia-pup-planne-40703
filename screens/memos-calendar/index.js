import { Text, StyleSheet, View } from "react-native";

const MagnoliaPupPlanner = () => {
  return <View style={styles.container}>
      <Text style={styles.headingTxt}>{"Magnolia Pup Planner"}</Text>
      <Text style={styles.instructionTxt}>{"Welcome to Magnolia Pup Planner! Plan your dog's activities and keep track of their health with ease."}</Text>
      <Text style={styles.instructionTxt}>{"To get started, navigate to the calendar tab and add your dog's activities for the week. You can also add notes and reminders for each activity."}</Text>
      <Text style={styles.instructionTxt}>{"In the health tab, you can keep track of your dog's vaccinations, medications, and vet appointments. Set reminders for upcoming appointments and never miss a dose of medication."}</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#c0b8b8"
  },
  headingTxt: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    width: 266,
    height: 32,
    textAlign: "center",
    position: "absolute",
    top: 15,
    left: 18,
    fontFamily: "Crimson Text",
    flexDirection: "row",
    flex: 1,
    color: "#fefefe"
  },
  instructionTxt: {
    fontSize: 18,
    fontWeight: "normal",
    padding: 2,
    marginVertical: 12,
    width: 266,
    height: 32,
    textAlign: "left",
    position: "relative",
    top: 15,
    left: 18,
    fontFamily: "Crimson Text",
    flexDirection: "row",
    flex: 1,
    color: "#fefefe"
  }
});
export default MagnoliaPupPlanner;