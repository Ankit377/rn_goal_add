import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal("");
  };

  const Seperator = () => <View style={styles.seperator} />;
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          blurOnSubmit
          textAlign="center"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.cancelButton}>
            <Button title="CANCEL" color="red" onPress={props.onCancelGoal} />
          </View>
          {/* <Seperator /> */}
          <View style={styles.cancelButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 30,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  cancelButton: {
    width: "40%",
  },
  seperator: {
    marginHorizontal: 5,
  },
});
export default GoalInput;
