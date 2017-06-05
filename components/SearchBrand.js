import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class DataList extends Component{
  static navigationOptions = {
    title: 'Brand List',
    text: '',
  };
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        brandDataSource: ds,
        brands: [],
    };
  }

  componentDidMount(){
    this.fetchBrands();
    console.log('mounted');
  }

  fetchBrands(){
    fetch('https://brands-fb.herokuapp.com/api')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                brandDataSource: this.state.brandDataSource.cloneWithRows(response),
                brands: response,
            });
        });
  }

  renderRow(brand, sectionId, rowId, highlightRow){
    const { navigate } = this.props.navigation;
      return(
        <TouchableHighlight onPress={() => navigate('BrandShow',
          {name: brand.name,
            ethical: brand.ethical,
            sustainable: brand.sustainable,
            description: brand.description,
            link: brand.link})}>
          <View style={styles.row}>
              <Text style={styles.rowText}>{brand.name}</Text>
          </View>
        </TouchableHighlight>
      )
  }

 filterSearch(text){
    const newData = this.state.brands.filter(function(brand){
        const brandData = brand.name.toUpperCase()
        const textData = text.toUpperCase()
        return brandData.indexOf(textData) > -1
    })
    this.setState({
        brandDataSource: this.state.brandDataSource.cloneWithRows(newData),
        // brand: brand
      })
  }
  render(){
    return(
      <View style={{backgroundColor: 'white'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:250, marginLeft:60, marginTop:120, marginBottom:80}}
          value={this.state.searchText}
          placeholder="Search"
          onChangeText={(brand) => this.filterSearch(brand)}
        />
        <ListView
            dataSource={this.state.brandDataSource}
            renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('SearchBrand', () => SearchBrand);
