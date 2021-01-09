import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  const deleteHandler = (deleteItem) => {
    setCourseGoal((currentGoals) => {
      return courseGoal.filter((goal) => goal.id !== deleteItem);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        data={courseGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
  },
});
