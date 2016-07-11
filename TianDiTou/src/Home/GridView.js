import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'
/**
 * 引入Dimensions，获取屏幕宽高
 */
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
/**
 * 自定义九宫格类控件
 */
class GridView extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor='#a5a5a5'
        onPress={this.props.onPress}>
        <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
                <Image source={this.props.source} style={styles.img} />
                <Text style={styles.title}>{this.props.text}</Text>
            </View>
         </View>
      </TouchableHighlight>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    width:width/3,
    height:width/3,
  },
  img:{
    alignSelf:'center',
    width:45,
    height:45,
    marginTop:30
  },
  title:{
    marginTop:5,
    textAlign:'center',
    fontSize:15,
    color:'#555555'
  }
})
module.exports = GridView;
