import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  isActive?: boolean;
};

export default function Button({ label, onPress, isActive }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          isActive ? styles.activeButton : styles.inactiveButton
        ]}
      >
        <Text style={styles.buttonLabel, styles.button, styles.buttonContainer}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  activeButton: {
    backgroundColor: 'gray',
  },
  inactiveButton: {
    backgroundColor: '#007BFF',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
  },
});
