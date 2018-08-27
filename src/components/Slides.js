import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({});

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View key={slide.text}>
          <Text>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal={true} style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
