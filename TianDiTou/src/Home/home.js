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
    Image,
    TextInput,
    ListView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
var REQUEST_URL = 'http://122.114.60.121/yimi_server/servlet/que_list_page?page_size=1'
class Home extends Component {
  constructor(){
    super();
    this.state = {
      isLoading:true,
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=> row1 !== row2
      })
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
    .then((response)=>response.json())
    .then((responseData)=>{
      console.log(responseData);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(responseData),
        isLoading:false,
      });
    })
    .catch(error =>{
      console.error('An error occured');
      console.error(error.message);
    })
    .done();
  }

  renderBook(item){
    if (item.user_img !== null) {
      return(
        <View style={styles.container}>
            <Image style={{width:40,height:40}} source={{uri:item.user_img}} />
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
            <Image style={{width:40,height:40}} source={{uri:'http://ubmcmm.baidustatic.com/media/v1/0f000cbW0-FND0Kmf87TDs.jpg'}} />
        </View>
      )
    }
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
      return this.renderLoadingView();
    }
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBook.bind(this)}
          style={styles.listView}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
   }
});
module.exports = Home;
