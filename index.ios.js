/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import BrandList from './components/brandList.js'


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

  getBrandList() {
      const URL =
      'https://brands-fb.herokuapp.com/api'
      axios.get(URL)
        .then((response) => {
          this.setState({ name: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to fashionfinder!
//         </Text>
//         <Text style={styles.instructions}>
//           Hello Hannah
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
render() {
    return (
      <div>
        <h1>Need</h1>
      <BrandList name={this.state.name} />}
      </div>
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
