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
import AboutScreen from '../screens/AboutScreen';
import BackgroundImage from '../components/BackgroundImage';
import BrandShow from '../components/BrandShow';
import {bind} from '../Utils/utils';




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <BackgroundImage>
        <View style={styles.container}>
        {/* <Text style={{fontSize:40}}> Fashion Finder</Text> */}
        <Image source={require('../fashionbible.png')}
        style={{marginBottom: 25}}  />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
              style={{borderWidth: 5, marginRight:20, fontSize:30}}
              color='black'
              onPress={() => navigate('Search')}
              title="Search"
            />
          <Button
              style={styles.button}
              color='black'
              onPress={() => navigate('About')}
              title="About"
            />
        </View>
      </View>
      </BackgroundImage>
    );
  }
}

const fashionfinder = StackNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchBrand },
  About: {screen: AboutScreen },
  BrandShow: {screen: BrandShow}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent'
  },
  button: {
    fontSize:50
  }
});

AppRegistry.registerComponent('fashionfinder', () => fashionfinder);
