import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  Linking
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Hyperlink from 'react-native-hyperlink'



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
          {/* <Image source={require('../fashionfinder.png')} style={{width: 200, height: 200}}/> */}
          <Image style={{width: 150, height: 150, marginBottom: 30}}
            source={{uri: params.image}}/>
          <Text style={styles.name}>{params.name}</Text>
          <Text style={styles.fields}>Ethical: {params.ethical}</Text>
          <Text style={styles.fields}>Sustainable: {params.sustainable}</Text>
          <Text style={styles.fields}>{params.description}</Text>
          <Text style={styles.fields}>Certificates: {params.certificates}</Text>
          <Hyperlink onPress={ url => Linking.openURL(url) }>{params.link}</Hyperlink>
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
    padding: 30,
    textAlign: 'center'
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
    padding: 5,
    borderWidth: 2
  }
});
