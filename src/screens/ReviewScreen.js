import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = {
    title: "ReviewJobs",
    header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="Settings"
            backgroundColor="rgba(0,0,0,0)"
            onPress={() => navigate("settings")}
          />
        )
      };
    }
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
