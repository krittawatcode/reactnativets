import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props: any) {
  function onDeleteItem() {
    props.onDeleteItem(props.item.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
