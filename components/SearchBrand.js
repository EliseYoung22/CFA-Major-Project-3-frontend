import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundImage from './BackgroundImage';



export default class SearchBrand extends Component{
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
  // fetchBrandLogo(){
  //   fetch('https://brands-fb.herokuapp.com/api/files/:id')
  //   .then((brand) => {
  //     this.setState({ brandLogo: brand.data });
  //     console.log('');
  //   })
  //   console.log(this.state.brandLogo);
  // }

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
      console.log(brand);
        const brandData = brand.name.toUpperCase()
        const textData = text.toUpperCase()
        return brandData.indexOf(textData) > -1
    })
    this.setState({
        brandDataSource: this.state.brandDataSource.cloneWithRows(newData),
      })
  }
  render(){
    return(
      <BackgroundImage>
        <View style={{backgroundColor: 'transparent'}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:250, marginLeft:60, paddingLeft:10, backgroundColor:'white'}}
            value={this.state.searchText}
            placeholder="Search"
            onChangeText={(brand) => this.filterSearch(brand)}
          />
            <ListView
                dataSource={this.state.brandDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        </View>
    </BackgroundImage>
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
        flex:1,
        fontSize:17,
    }
});
