import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import CustomButton from "./components/CustomButton";
import Row from "./components/Row";

interface AppState {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
}
class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentValue: "0",
      operator: null,
      previousValue: null,
    };
  }

  handlerTap = <T extends string | number>(value: T) => {
    this.setState((state) => {
      if (typeof value === "number" || value === ".") {
        if (state.currentValue === "0") {
          return {
            ...state,
            currentValue: `${value}`,
          };
        }

        return {
          ...state,
          currentValue: `${state.currentValue}${value}`,
        };
      }
      if (typeof value === "string" && ["+", "/", "-", "*"].includes(value)) {
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      }

      if (value === "=" && state.operator) {
        const { currentValue, previousValue } = state;
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue!);
        if (state.operator === "/") {
          return {
            currentValue: previous / current,
            operator: null,
            previousValue: null,
          };
        }
        if (state.operator === "+") {
          return {
            currentValue: previous + current,
            operator: null,
            previousValue: null,
          };
        }
        if (state.operator === "x") {
          return {
            currentValue: previous * current,
            operator: null,
            previousValue: null,
          };
        }
        if (state.operator === "-") {
          return {
            currentValue: previous - current,
            operator: null,
            previousValue: null,
          };
        }
      }
      return state;
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <CustomButton
            theme="secondary"
            text="C"
            onPress={() => this.handlerTap("C")}
          />
          <CustomButton
            theme="secondary"
            text="+/- "
            onPress={() => this.handlerTap("+/-")}
          />
          <CustomButton
            theme="secondary"
            text="%"
            onPress={() => this.handlerTap("%")}
          />
          <CustomButton
            theme="accent"
            text="/"
            onPress={() => this.handlerTap("/")}
          />
        </Row>
        <Row>
          <CustomButton text="7" onPress={() => this.handlerTap(7)} />
          <CustomButton text="8" onPress={() => this.handlerTap(8)} />
          <CustomButton text="9" onPress={() => this.handlerTap(9)} />
          <CustomButton
            theme="accent"
            text="x"
            onPress={() => this.handlerTap("x")}
          />
        </Row>
        <Row>
          <CustomButton text="4" onPress={() => this.handlerTap(4)} />
          <CustomButton text="5" onPress={() => this.handlerTap(5)} />
          <CustomButton text="6" onPress={() => this.handlerTap(6)} />
          <CustomButton
            theme="accent"
            text="-"
            onPress={() => this.handlerTap("-")}
          />
        </Row>
        <Row>
          <CustomButton text="1" onPress={() => this.handlerTap(1)} />
          <CustomButton text="2" onPress={() => this.handlerTap(2)} />
          <CustomButton text="3" onPress={() => this.handlerTap(3)} />
          <CustomButton
            theme="accent"
            text="+"
            onPress={() => this.handlerTap("+")}
          />
        </Row>
        <Row>
          <CustomButton text="0" onPress={() => this.handlerTap(0)} />
          <CustomButton text="." onPress={() => this.handlerTap(".")} />
          <CustomButton
            theme="accent"
            text="="
            onPress={() => this.handlerTap("=")}
          />
        </Row>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    textAlign: "right",
    color: "#fff",
    fontSize: 48,
    marginRight: 20,
  },
});

export default App;
