// import React, { Component } from 'react';
// import { Text, View, ListView, StyleSheet } from 'react-native';
//
// class BrandList extends Component {
//   constructor(props) {
//     super();
//     const data = props.brand.map((brand) => brand.name)
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows(data),
//     };
//   }
//
//   render () {
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={(rowData) => <Text>{rowData}</Text>}
//       />
//
//         // {/* {props.movies.map((movie, i) => <Text key={i}>{movie.name}</Text>)} */}
//     )
//   }
// };
//
// export default BrandList;
