import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  WebView,
  ActivityIndicator
} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
class AboutUS extends Component{

  render() {
    return (
      <View style={{flex:1,marginTop:100}}>
        <Image source={require("../gridImage/waier.png")} style={styles.img}/>
        <TouchableHighlight >
          <View style={styles.touch}>
            <Text style={styles.title}>意见反馈
            </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight >
        <View style={styles.touch}>
          <Text style={styles.title}>关于我们
          </Text>
        </View>
    </TouchableHighlight>
    </View>
    );
  }
}

var styles = StyleSheet.create({

  touch:{
    width:width-40,
    alignSelf:'center',
    height:30,
    backgroundColor:'gray',
    marginTop:20
  },
  touchTop20:{
    marginTop:20
  },
  title:{
    marginLeft:10,
    fontSize:12,
    marginTop:9,
    color:'#fff'
  },
  img:{
    width:100,
    height:50,
    alignSelf:'center'
  }
});
module.exports = AboutUS;
