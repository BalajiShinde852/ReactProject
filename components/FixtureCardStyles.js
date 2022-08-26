import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 20,
    fontStyle: "bold",
  },

  card: {
    elevation: 7,
    marginTop: 10,
    backgroundColor: "#21294C",
    color: "#E5E5E5",
    borderRadius: 10,
  },

  img: {},

  vid: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
    alignSelf: "stretch",
    padding: 10,
    // marginLeft: "50%",
    marginBottom: 10,
  },

  viewScoreCard: {
    width: 120,
    height: 40,
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "#4BBBB2",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 12,
  },
});
