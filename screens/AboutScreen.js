import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage'

export default class AboutScreen extends Component{
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <BackgroundImage>
        <ScrollView>
          <View style={styles.containerone}>
            <Image source={require('../fashionfinder.png')} style={{width: 100, height: 100, marginTop:10}}/>
          </View>
          <View style={styles.container}>
          <Text style={{marginBottom: 10}} style={styles.font}>
              fashionfinder was created to help people make more conscious decisions when purchasing clothes. We believe that everyone should make better choices to support ethical and sustainable fashion.
            </Text>
            <Text style={styles.title}>Do you know who made you clothes?</Text>
            <Text style={styles.font}> This is not something you may think of often but you should start. It is estimated that in cases where production is out sourced to a developing world country, workers’ wages only account for between 0.5-4% of the final retail cost of a garment. Guardian, (2012). Companies that have W.R.A.P certification means that they have gone through rigorous auditing to comply with their high standards for fair work.
            </Text>
            <Text style={styles.title}>
              Think sustainable, the future needs you to!</Text>
            <Text style={styles.font}> Companies that follow sustainable practices are helping to minimise the large negative impact that the fashion industry has on the environment. Companies can do this by using non-toxic dyes that will not affect the environment when they are leached into water ways. More and more companies are using recycled fabrics which save a lot of energy and reduces pollution.
            </Text>
          </View>
        </ScrollView>
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
    paddingLeft: 30,
    paddingRight: 30,
  },
  containerone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 20,
    marginTop:20,
    alignItems: 'center',

  },
  font: {
    fontSize:15,

  }
});
