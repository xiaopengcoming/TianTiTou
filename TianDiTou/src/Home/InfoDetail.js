/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  WebView,
  TextInput,
  TouchableHighlight
} from 'react-native';
var INFO_URL = 'http://122.114.60.121/yimi_server/servlet/zixun_pl_count?id=465';
var INFO_WEB_URL = 'http://122.114.60.121/hailier_model/nongji/info.jsp?id=';
class InfoDetail extends Component {
  constructor(props){
    super(props);

  }
  render() {
    var url = INFO_WEB_URL;
    url += encodeURIComponent(this.props.item.id);
    console.log(this.props.item.id);
    console.log(url);
    return (
      <View style={{flex:1}}>
        <WebView style={styles.container}
          url={url} startInLoadingState={true}
          startInLoadingState={true}>
        </WebView>
        <View style={styles.bottomView} >
          <TextInput style={styles.inputView}
            placeholder="请输入跟帖内容">
          </TextInput>
          <TouchableHighlight>
            <Text style={styles.button}>跟帖
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bottomView:{
    backgroundColor:'#007aff',
    height:50,
    flexDirection:'row'
  },
  inputView:{
    height:38,
      marginLeft:10,
      marginRight:50,
      borderWidth:2,
      marginTop:5,
      marginBottom:5,
      borderColor: '#868687',
      borderRadius:3,
      backgroundColor:'#fff',
      fontSize:15,
      flex:0.8
  },
  button:{
    fontSize:15,
    flex:0.2,
    marginRight:10,
    width:50,

    marginTop:15,
    color: '#fff',
  }
});

module.exports = InfoDetail;
