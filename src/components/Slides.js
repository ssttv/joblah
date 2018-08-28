import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonForward: {
    backgroundColor: "#0288D1",
    marginTop: 15
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    fontWeight: "bold",
    fontColot: "white",
    fontSize: 30,
    align: "center"
  }
});

class Slides extends Component {
  renderLastSlide() {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          text="Forward"
          raised
          buttonStyle={styles.buttonForward}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide()}
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
