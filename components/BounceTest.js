import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class BounceTest extends Component {
  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.bounce}>
        <Animatable.View ref={this.handleViewRef}>
          <Text>Bounce me!</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
