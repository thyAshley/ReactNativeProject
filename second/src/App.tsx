/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface AppState {
  remainingSeconds: number;
  isRunning: boolean;
}

class App extends React.Component<{}, AppState> {
  private timer: any;
  constructor(props: AppState) {
    super(props);

    this.state = {
      remainingSeconds: 10,
      isRunning: false,
    };
  }

  formatNumber = (minutes: number, seconds: number) => {
    let formattedMinutes: string = minutes.toString();
    let formattedSeconds: string = seconds.toString();
    if (minutes < 10) {
      formattedMinutes = "0" + formattedMinutes;
    }
    if (seconds < 10) {
      formattedSeconds = "0" + formattedSeconds;
    }
    return { formattedMinutes, formattedSeconds };
  };

  getRemaining = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return this.formatNumber(minutes, seconds);
  };

  start = () => {
    this.setState((state) => ({
      isRunning: true,
    }));
    this.timer = setInterval(() => {
      this.setState((state) => ({
        remainingSeconds: state.remainingSeconds - 1,
      }));
    }, 1000);
  };

  stop = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      isRunning: false,
      remainingSeconds: 5,
    });
  };

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidUpdate(_: any, prevState: AppState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop();
    }
  }

  render() {
    const { formattedMinutes, formattedSeconds } = this.getRemaining(
      this.state.remainingSeconds
    );
    const { isRunning } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isRunning ? (
          <Text
            style={styles.timeText}
          >{`${formattedMinutes}:${formattedSeconds}`}</Text>
        ) : null}
        <TouchableOpacity
          onPress={isRunning ? this.stop : this.start}
          style={[styles.button, isRunning ? styles.buttonStop : null]}
        >
          <Text
            style={[
              styles.buttonText,
              isRunning ? styles.buttonStopText : null,
            ]}
          >
            {isRunning ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "#89AAFF",
    borderRadius: screen.width / 2,
    borderWidth: 10,
    height: screen.width / 2,
    justifyContent: "center",
    marginTop: 30,
    width: screen.width / 2,
  },
  buttonStop: {
    borderColor: "#FF851B",
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF",
  },
  buttonStopText: {
    fontSize: 45,
    color: "#FF851B",
  },
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#07121B",
    justifyContent: "center",
  },
  timeText: {
    color: "#fff",
    fontSize: 90,
  },
});
export default App;
