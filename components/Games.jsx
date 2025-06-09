import { Text, View, Image } from "react-native";

export default function Game( {gameData, image}) {

    return (
        <>
            <Text>Title: {gameData.title}</Text>
            <Text>Position: {gameData.position}</Text>
            <Text>Year: {gameData.year}</Text>
            <Text>Rating: {gameData.rating}</Text>
            <Text>Publishers: {gameData.genre}</Text>
            {
               gameData.publishers.map( (publisher) => <Text key={publisher}>{publisher} </Text> )
            }
            <Image source={image}/>
        </>
    )
}