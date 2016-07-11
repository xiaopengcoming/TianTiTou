import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text
}from 'react-native';
import GridView from './GridView';
import AboutUS from './AboutUS';

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

  gotoDetail(index){
    if (index === 8) {
      this.props.navigator.push({
        title:'关于我们',
        component:AboutUS,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <GridView
              onPress={()=>this.gotoDetail(1)}
              source={require("../gridImage/ywxg.png")}
              text="与我相关"></GridView>
            <GridView
              onPress={()=>this.gotoDetail(2)}
              source={require("../gridImage/jfyt.png")}
                text="积分用途"></GridView>
              <GridView
                onPress={()=>this.gotoDetail(3)}
                source={require("../gridImage/yqm.png")}
                  text="填写邀请码"></GridView>
          </View>
          <View style={{flexDirection:'row'}}>
            <GridView
              onPress={()=>this.gotoDetail(4)}
              source={require("../gridImage/mrqd.png")}
              text="每日签到"></GridView>
            <GridView
              onPress={()=>this.gotoDetail(5)}
              source={require("../gridImage/wdcf.png")}
                text="我的处方"></GridView>
              <GridView
                onPress={()=>this.gotoDetail(6)}
                source={require("../gridImage/jfdh.png")}
                    text="抢红包"></GridView>
          </View>
          <View style={{flexDirection:'row'}}>
            <GridView
              onPress={()=>this.gotoDetail(7)}
              source={require("../gridImage/jfdh.png")}
              text="积分兑换"></GridView>
            <GridView
              onPress={()=>this.gotoDetail(8)}
              source={require("../gridImage/qtsz.png")}
                text="其他设置"></GridView>

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
