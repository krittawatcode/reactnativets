import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props: any) {
  // function addGoalHandler() {
  //   props.onAddGoal(enteredGoalText);
  //   setEnteredGoalText("");
  // }

  function onDeleteItem() {
    props.onDeleteItem(props.item.id);
  }

  return (
    <Pressable onPress={onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
