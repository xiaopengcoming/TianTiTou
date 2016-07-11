import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text
}from 'react-native';
import GridView from './GridView';
import NSBK from './NSBK';

class MoreCustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
class Mine extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * 九宫格点击事件
   * @method gotoDetail
   * @param  {[type]}   text [传入宫格的id(String)]
   * @return {[type]}        [无返回值，跳入下一页]
   */
  gotoDetail(text){
    this.props.navigator.push({
        title:'搜索',
        component:NSBK,
        rightButtonTitle: '搜索',
        passProps:{
          text:text
        },
        onRightButtonPress: () => {
            this.props.navigator.pop()
          },
      });
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <GridView
              onPress={()=>this.gotoDetail(1)}
              source={require("../gridImage/nsbk.png")}
              text="农事百科"></GridView>
            <GridView
              onPress={()=>this.gotoDetail(2)}
              source={require("../gridImage/wdk.png")}
                text="问答库"></GridView>
              <GridView
                onPress={()=>this.gotoDetail(3)}
                source={require("../gridImage/zjdk.png")}
                  text="专家大咖"></GridView>
          </View>
          <View style={{flexDirection:'row'}}>
            <GridView
              onPress={()=>this.gotoDetail(4)}
              source={require("../gridImage/fjnzd.png")}
              text="附近农资店"></GridView>
            <GridView
              onPress={()=>this.gotoDetail(5)}
              source={require("../gridImage/fwcx.png")}
                text="防伪查询"></GridView>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:100
  }

})

module.exports = Mine;
