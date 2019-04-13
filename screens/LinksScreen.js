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
import { MonoText } from '../components/StyledText';
import { BarInfo } from '../components/HistoryBar';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <MonoText style={styles.Logo}>Vivid</MonoText>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
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
});
