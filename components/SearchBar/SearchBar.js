import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width:250, marginLeft:60}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


// App registration and rendering
AppRegistry.registerComponent('fashionfinder', () => SearchBar);

module.exports = SearchBar;
