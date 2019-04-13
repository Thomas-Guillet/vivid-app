import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
  import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { BarInfo } from '../components/HistoryBar';
import ImageTest from '../components/ImageTest';
import ImageLol from '../components/ImageLol';
import BounceTest from '../components/BounceTest';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <MonoText style={styles.Logo}>Vivid</MonoText>
          </View>
          <ImageLol />
          <BounceTest />
        </ScrollView>

        <ScrollView style={styles.tabBarInfoContainer}>
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <BarInfo />
          <ImageTest />
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text style={styles.developmentModeText}>
          Development mode*
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  developmentModeText: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
    fontSize: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerContainer: {
    marginTop: 0  ,
  },
  Logo: {
    fontSize: 18,
    marginLeft: 5,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  tabTest: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
});
