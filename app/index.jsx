import { Text, View, Image, Button } from "react-native";
import { useState } from "react"
import Games from "../Components/Games.jsx";
import Pressable from "../Components/Button.jsx"

const simpsons = require("../assets/images/simpsons.jpeg");
const nfs = require("../assets/images/nfs2.jpeg");
const tonyhawk = require("../assets/images/tonyhawk.jpeg")

const images = { "simpsons" : simpsons, "nfs": nfs, "tonyhawk": tonyhawk};

import gameData from "../assets/games.json";
console.log(gameData);

export default function Index() {

  const  [gameIndex, setGameIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text style={{
                        fontSize: 50
                      }}>Top 3 PS2 Games</Text>
      <Games gameData={gameData[gameIndex]} image={images[gameData[gameIndex].image]} />
      <Pressable title="Switch Game" onPress={ () => setGameIndex( (gameIndex + 1) % gameData.length)}/>

    </View>
  );
}