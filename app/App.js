import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  TabBarIOS,
  Image,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchBrand from '../components/SearchBrand';
import About from '../screens/AboutScreen';
import BrandShow from '../components/BrandShow';
import {bind} from '../Utils/utils';




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={{fontSize:40}}> Fashion Finder</Text>
      <Image source={require('../fashionfinder.png')} style={{width: 200, height: 200}}/>
      <Button
            style={{borderWidth: 5}}
            onPress={() => navigate('Search')}
            title="Search"
          />
        <Button
            style={{borderWidth: 5}}
            onPress={() => navigate('About')}
            title="About"
          />
      </View>
    );
  }
}

const fashionfinder = StackNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchBrand },
  About: {screen: About },
  BrandShow: {screen: BrandShow}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000033',
    backgroundColor: '#000033',
  },
});

AppRegistry.registerComponent('fashionfinder', () => fashionfinder);
