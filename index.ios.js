import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import axios from 'axios';
import BrandList from './components/brandList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
// import brandList from './components/brandList.js';

const ReactNative = require('react-native');
const {
  Alert,
  Button,
} = ReactNative;

export default class fashionfinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ethical: '',
      sustainable: '',
      description: '',
      certificates:'',
    };
  }
  // .then((response) => {
  //   this.setState({
  //     name: response.data.name,
  //     ethical: response.data.ethical,
  //     sustainable: response.data.sustainable,
  //     description: response.data.description,
  //     certificates: response.data.certificates
  //   });
  // })

  componentDidMount() {
    console.log('mounted');
    this.getBrandsFromApiAsync();
  };

  onButtonPress() {
    Alert.alert('Button has been pressed!');
    console.log('button-pressed');
    this.getBrandsFromApiAsync();
  };

  getBrandsFromApiAsync() {
    return fetch('https://brands-fb.herokuapp.com/api')
      .then((response) => response.json())
      .then((response) => {
        this.setState({brands: response})
        // console.log(response);
        // return response
      })
      // .then((response) => {
      //   this.setState({
      //     name: response.data.name,
      //     ethical: response.data.ethical,
      //     sustainable: response.data.sustainable,
      //     description: response.data.description,
      //     certificates: response.data.certificates
      //   });
      // })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to fashionfinder!
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Button onPress={this.getBrandsFromApiAsync} title="click me"></Button>
        <Text style={styles.instructions}>
        </Text>
        <SearchBar />
        {/* <BrandList /> */}
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

AppRegistry.registerComponent('fashionfinder', () => fashionfinder);
