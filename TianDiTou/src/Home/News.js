/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
  TouchableHighlight
} from 'react-native';
var NEWS_REQUEST= 'http://122.114.60.121/yimi_server/servlet/zixun_page?page_size=1';
import InfoDetail from './InfoDetail';
class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading:true,
      Titlle:'',
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=> row1 !== row2
      })
    };
  }
componentDidMount() {
  this.fetchData();
}
  fetchData(){
    fetch(NEWS_REQUEST)
    .then((response)=>response.json())
    .then((responseData)=>{
      console.log(responseData);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(responseData),
        isLoading:false
      });
    })
    .done();
  }

  showInfoDetail(item){
    this.props.navigator.push({
      title:'详情',
      component:InfoDetail,
      passProps:{item},
    });
  }

  renderRow(item){
    return(
      <TouchableHighlight
        onPress={()=>this.showInfoDetail(item)} underlayColor='#dddddd'>
        <View style={styles.container}>
          <Text style={styles.title}>{item.tag}</Text>
          <Text style={styles.welcome}>{item.times}</Text>
          <Text style={styles.welcome}>{item.title}</Text>
          <View style={styles.line}></View>
        </View>
      </TouchableHighlight>
    )
  }
  renderLoadingView(){
    return(
      <View style={styles.loading}>
        <ActivityIndicator size="large"/>
        <Text>loading .....
        </Text>
      </View>
    )
  }
  render() {
    if (this.state.isLoading) {
      return (this.renderLoadingView())
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        style={styles.listView}
        renderRow={this.renderRow.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginTop:10
  },
  title:{
    fontSize:18,
    color:'#007aff',
    textAlign: 'left',
    marginLeft: 20,
    marginTop:10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   listView: {
     backgroundColor: '#F5FCFF',
   },
   line:{
     height:1,
     backgroundColor:'gray',
     marginLeft:10
   }
});
module.exports = Home;
