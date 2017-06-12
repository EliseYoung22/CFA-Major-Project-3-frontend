import React, { Component } from 'react';
import {AppRegistry, Image, StyleSheet } from 'react-native';


class BackgroundImage extends Component {

  render() {
    return (
        <Image source={require('../marble-back.jpg')} style={styles.backgroundImage}>
        {this.props.children}
        </Image>
    )
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

module.exports = BackgroundImage;
