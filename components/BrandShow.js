import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage'


export default class BrandShow extends Component{
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <BackgroundImage>
        <View style={styles.container}>
          {/* <Image source={require('../firstbase.jpg')} style={{width: 200, height: 200}}/> */}
          <Text style={styles.name}>{params.name}</Text>
          <Text style={styles.fields}>Ethical: {params.ethical}</Text>
          <Text style={styles.fields}>Sustainable: {params.sustainable}</Text>
          <Text style={styles.fields}>Description: {params.description}</Text>
          <Text style={styles.fields}>Certificates: {params.certificates}</Text>
        </View>
      </BackgroundImage>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  fields: {
    marginBottom:20,
    fontSize:20,
  },
  top: {
    marginTop:20,
  },
  name: {
    fontSize:30,
    marginBottom:10,
    fontFamily:'Cursive'
  }
});
