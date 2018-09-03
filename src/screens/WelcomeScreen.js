import _ from "lodash";
import React, { Component } from "react";
import { AppLoading } from "expo";
import { View, Text, AsyncStorage } from "react-native";
import { Slides } from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Joblah", color: "#03A9F4" },
  { text: "This application can be used to get a job", color: "#009688" }
  { text: "Enter your location, and swipe away", color: "#03A9F4" }
];
class WelcomeScreen extends Component {
  state = {token: null};

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
      this.props.navigation.navigate("map");
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth"); 
  }
  
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
