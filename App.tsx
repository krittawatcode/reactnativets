import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredCharacter, setEnteredCharacter] = useState("");
  const [characters, setCharacters] = useState<string[]>([]);

  function characterInputHandler(enteredText: string) {
    setEnteredCharacter(enteredText);
  }

  function addCharacterHandler() {
    setCharacters((prevCharacters) => [...prevCharacters, enteredCharacter]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Character Name"
          style={styles.textInput}
          onChangeText={characterInputHandler}
        />
        <Button title="Submit" onPress={addCharacterHandler} />
      </View>
      <View style={styles.characterContainer}>
        {characters.map((character) => (
          <View key={character} style={styles.characterItem}>
            <Text>{character}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  characterContainer: {
    flex: 5,
  },
  characterItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
