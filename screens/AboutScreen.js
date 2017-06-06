import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

export default class AboutScreen extends Component{
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the About page </Text>
        <Text> fashionfinder was created </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
