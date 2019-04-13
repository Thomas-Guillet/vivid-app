import React from 'react';
import { View, Text, StyleSheet, Platform, } from 'react-native';

export class BarInfo extends React.Component {
  render() {
    return <View style={styles.test}>
      <Text>
        Ceci est un log d'historique.
      </Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  test: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginLeft: "5%",
    borderWidth: 0,
    borderColor: '#07E7DC',
    width: '90%',
    marginBottom: 5,
    fontSize: 14,
    color: '#2e78b7',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
})
