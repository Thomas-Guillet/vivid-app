import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: 100
  }
});

export default class ImageLol extends Component {
  showAlert() {
    alert("ALERT");
  }
  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('../assets/images/robot-dev.png')}
          onClick={ this.showAlert }
        />
      </View>
    );
  }
}
