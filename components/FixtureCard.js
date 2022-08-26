import { Text, View, Image } from "react-native";
import { styles } from "./FixtureCardStyles";

const FixtureCard = ({ title, round, team1, team2, winner }) => (
  <View style={styles.card}>
    <Text
      style={{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: 500,
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 8,
        marginBottom: 5,
      }}
    >
      {round}
    </Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        // borderWidth: 1,
        // borderColor: "green",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          // borderWidth: 1,
          // borderColor: "red",
        }}
      >
        <Image
          style={{ width: 30, height: 30, borderRadius: "50%" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
          }}
        />
        <Text
          style={{
            fontSize: 7,
            color: "#FFFFFF",
            marginTop: 5,
            width: 50,
            alignItems: "center",
            alignContent: "center",
            // borderWidth: 1,
            // borderColor: "red",
          }}
        >
          {team1[0].name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          // borderWidth: 1,
          // borderColor: "blue",
          color: "#FFFFFF",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 8, marginBottom: 3 }}>
          V/S
        </Text>
        <View style={styles.viewScoreCard}>
          <Text>21-19, 9-21, 16-21</Text>
        </View>
        <Image
          style={{ width: 30, height: 30, borderRadius: "50%", marginTop: 6 }}
          source={require("../assets/sample-mp4-file-small.mp4")}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          // borderWidth: 1,
          // borderColor: "yellow",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
          }}
        />

        <Text
          style={{
            fontSize: 7,
            color: "#FFFFFF",
            marginTop: 5,
            width: 50,
            // borderWidth: 1,
            // borderColor: "red",
          }}
        >
          {team2[0].name}
        </Text>
      </View>
    </View>
    {/* <Text>winner: {winner}</Text> */}
  </View>
);

const renderItem = ({ item }) => (
  <FixtureCard
    title={item.tournament[0].name}
    round={item.round}
    team1={item.team1}
    team2={item.team2}
    winner={item.winner}
  />
);

export default renderItem;
