import { Text, View, Button, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { GameContext } from '../Components/GameContext';
import Game from '../Components/Games';

const simpsons = require("../assets/images/simpsons.jpeg");
const nfs = require("../assets/images/nfs2.jpeg");
const tonyhawk = require("../assets/images/tonyhawk.jpeg");

const images = { simpsons, nfs, tonyhawk };

export default function Index() {
  const [gameIndex, setGameIndex] = useState(0);
  const { gameData } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top 3 PS2 Games</Text>

      <Game
        gameData={gameData[gameIndex]}
        image={images[gameData[gameIndex].image]}
      />

      {/* Buttons to switch games */}
      {[0, 1, 2].map((index) => (
        <Button
          key={index}
          title={`Game ${index + 1}`}
          onPress={() => setGameIndex(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
