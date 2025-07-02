import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { GameContext } from '../components/GameContext';

export default function UpdateGames() {
    const [currentGame, setCurrentGame] = useState(0);
    const { gameData, setGameData } = useContext(GameContext);

    const [title, setTitle] = useState(gameData[currentGame].title);
    const [year, setYear] = useState(gameData[currentGame].year);
    const [actors, setActors] = useState(gameData[currentGame].actors);

    const changeYear = (value) => {
        const updatedYear = parseInt(value);
        setYear(updatedYear);
    }

    const changeActors = (value) => {
        const updatedArray = value.split(',');
        setActors(updatedArray);
    }

    const updateGameData = () => {
        const updatedData = {
            title: title,
            year: year,
            actors: actors,
            image: "t2"
        }

        console.log(updatedData);
        gameData[currentGame] = updatedData;
        setGameData(gameData);
    }

    const changeGameIndex = (value) => {
        const index = parseInt(value);
        setTitle(gameData[index].title);
        setActors(gameData[index].actors);
        setYear(gameData[index].year);
        setCurrentGame(index);
    }

    return (
        <>
            <Text>Game Index</Text>
            <TextInput value={currentGame.toString()} onChangeText={changeGameIndex} />

            <Text>Title</Text>
            <TextInput value={title} onChangeText={setTitle} />

            <Text>Year</Text>
            <TextInput value={year.toString()} onChangeText={changeYear} />

            <Text>Actors</Text>
            <TextInput value={actors.toString()} onChangeText={changeActors} />

            <Button title="Update" onPress={updateGameData} />
        </>
    );
}
