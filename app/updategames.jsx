import { Text, TextInput, Button, View } from 'react-native';
import { useState, useContext } from 'react';
import { GameContext } from '../Components/GameContext';

export default function UpdateGames() {
  const [currentGame, setCurrentGame] = useState(0);
  const { gameData, setGameData } = useContext(GameContext);

  const [title, setTitle] = useState(gameData[currentGame].title);
  const [position, setPosition] = useState(gameData[currentGame].position);
  const [year, setYear] = useState(gameData[currentGame].year);
  const [publishers, setPublishers] = useState(gameData[currentGame].publishers.join(','));
  const [rating, setRating] = useState(gameData[currentGame].rating.toString());

  const changeYear = (value) => {
    const updatedYear = parseInt(value) || 0;
    setYear(updatedYear);
  };

  const changeRating = (value) => {
    const updatedRating = parseFloat(value);
    if (!isNaN(updatedRating)) {
      setRating(value);
    } else if (value === '') {
      setRating('');
    }
  };

  const changePublishers = (value) => {
    setPublishers(value);
  };

  const changeGameIndex = (value) => {
    const index = parseInt(value);
    if (isNaN(index) || index < 0 || index >= gameData.length) return;

    setTitle(gameData[index].title);
    setPosition(gameData[index].position);
    setYear(gameData[index].year);
    setPublishers(gameData[index].publishers.join(','));
    setRating(gameData[index].rating.toString());
    setCurrentGame(index);
  };

  const updateGameData = () => {
    const updatedData = {
      ...gameData[currentGame],
      title,
      position,
      year,
      publishers: publishers.split(',').map(pub => pub.trim()),
      rating: parseFloat(rating) || 0,
    };

    const updatedGameData = [...gameData];
    updatedGameData[currentGame] = updatedData;
    setGameData(updatedGameData);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Game Index (0-{gameData.length - 1})</Text>
      <TextInput
        value={currentGame.toString()}
        onChangeText={changeGameIndex}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Position</Text>
      <TextInput
        value={position}
        onChangeText={setPosition}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Year</Text>
      <TextInput
        value={year.toString()}
        onChangeText={changeYear}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Publishers (comma separated)</Text>
      <TextInput
        value={publishers}
        onChangeText={changePublishers}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Rating</Text>
      <TextInput
        value={rating}
        onChangeText={changeRating}
        keyboardType="decimal-pad"
        style={{ borderWidth: 1, marginBottom: 20, padding: 5 }}
      />

      <Button title="Update Game" onPress={updateGameData} />
    </View>
  );
}
