import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30
  }
});

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View key={slide.text} style={styles.slide}>
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
