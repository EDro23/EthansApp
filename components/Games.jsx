import { Text, View, Image, StyleSheet } from "react-native";

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
            <Image source={image} style={styles.image} resizeMode="contain"/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        },
        title: {
            fontSize: 24,
            marginBottom: 10,
            },
        image: {
            width: 500,
            height: 400,
            borderRadius: 10,
            },
        });