import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

interface goalInput {
  text: string;
  id: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<goalInput[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      } as goalInput,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
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
  goalContainer: {
    flex: 5,
  },
});
