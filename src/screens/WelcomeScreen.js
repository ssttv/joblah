import React, { Component } from "react";
import { View, Text } from "react-native";
import { Slides } from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Joblah", color: "#03A9F4" },
  { text: "This application can be used to get a job", color: "#009688" }
  { text: "Enter your location, and swipe away", color: "#03A9F4" }
];
class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

export default WelcomeScreen;
