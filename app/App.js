import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchBrand from '../components/SearchBrand';
import About from '../screens/AboutScreen';
import BrandShow from '../components/BrandShow'



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <TabBarIOS>
          <TabBarIOS.Item
          onPress={() => navigate('List')}
          title="Search"
          />
        <TabBarIOS.Item
          onPress={() => navigate('About')}
          title="About"
        /> */}

        <Button
          style={styles.button}
          onPress={() => navigate('Search')}
          title="All Brands"
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
