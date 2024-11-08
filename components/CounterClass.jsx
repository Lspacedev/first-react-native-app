import { Component } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    this.setState((state) => (state.counter += 1));
  }
  handleDecrement() {
    this.setState((state) => (state.counter -= 1));
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.counterCont}>
          <Pressable style={styles.button} onPress={this.handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.counterText}>{this.state.counter}</Text>

          <Pressable style={styles.button} onPress={this.handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#306A68",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#BDBDBD",
    textAlign: "center",
    textTransform: "uppercase",
  },
  counterCont: {
    flexDirection: "row",
  },
  counterText: {
    color: "#BDBDBD",
  },
});
