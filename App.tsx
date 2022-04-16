import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

interface CourseGoals {
  text: string;
  id: string;
}

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      } as CourseGoals,
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
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
