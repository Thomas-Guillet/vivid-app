import React, { Component } from 'react';
import { Image } from 'react-native';
import { Viewport } from '@skele/components';
const ViewportAwareImage = Viewport.Aware(Image);

let randomHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default class ImageTest extends Component {
  showAlert = () => {
    alert("ALERT");
  }
  render() {
    return (
      <ViewportAwareImage
        source={require('../assets/images/robot-dev.png')}
        preTriggerRatio={0.5}
        onViewportEnter={ this.showAlert }
        onViewportLeave={ this.showAlert }
        onPress={ this.showAlert }
        innerRef={ref => (this._ref = ref)} />
    )
  }
}
