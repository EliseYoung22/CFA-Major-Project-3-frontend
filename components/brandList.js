import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet, TextInput } from 'react-native';

class BrandList extends Component {
  constructor(props, context) {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    super(props, context);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      brands: [],
      searchText: '',
    };
  }
  componentDidMount() {
    console.log('mounted');
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
      .catch((error) => {
        console.error(error);
      });
  }

  setSearchText(event) {
   let searchText = event;
   this.setState({searchText});
   console.log(event);
  }

  render() {
    let filteredBrands = this.state.brands.filter(brand => {
              const brandName = `${brand.name}`;
              return brandName.indexOf(this.state.searchText) !== -1;
          });

    return (
      <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:250, marginLeft:60}}             value={this.state.searchText}
            onChangeText={this.setSearchText.bind(this)}
          />
          {filteredBrands.map((brand, i) =>  <Text key={i}>{brand.name}</Text>)}
      </View>
    )
  }
  //   return (
  //     <ListView
  //       dataSource={this.state.dataSource}
  //       renderRow={(rowData) => <Text>{rowData}</Text>}
  //     />
  //   )
  // }
};

export default BrandList;
