import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class Login extends Component{
  constructor() {
    super();
    this.state = {
      user:'',
      pwd:'',
    }
  }
  userTextInput(event) {
    this.setState({user:event.nativeEvent.text});
    if (this.state.user.length > 11) {
      alert('请输入正确的电话号码')
    }
 }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numInputView}>
            <View style={{flex:1}}>
              <Text style={[styles.numberLab]}>手机:</Text>
            </View>
            <View style={{flex:2}}>
              <TextInput style={styles.number_input}
                        placeholder='请输入手机号！'
                        numberOfLines={1}
                        autoFocus={true}
                        keyboardType="number-pad"
                        clearButtonMode="while-editing"
                        underlineColorAndroid={'transparent'}
                        textAlign='center'
                        onChange={this.userTextInput.bind(this)}/>
            </View>
        </View>
        <View style={styles.numInputView}>
            <View style={{flex:1}}>
              <Text style={[styles.numberLab]}>密码:</Text>
            </View>
            <View style={{flex:2}}>
              <TextInput style={styles.number_input}
                        placeholder='请输入密码！'
                        numberOfLines={1}
                        autoFocus={true}
                        secureTextEntry={true}
                        clearButtonMode="while-editing"
                        underlineColorAndroid={'transparent'}
                        textAlign='center'/>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row'}}>
            <TouchableHighlight underlayColor={'#FA6778'} style={styles.touch}>
              <Text style={styles.logbtn}>登录
              </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#FA6778'} style={styles.register}>
              <Text style={styles.logbtn}>免费注册
              </Text>
            </TouchableHighlight>
          </View>
    </View>
    );
  }
};

var styles = StyleSheet.create({

  container:{
    flex:1,
    marginTop:64,
    backgroundColor:'#F5F5F5'
},
numInputView:{
  flexDirection:'row',
  height:50,
  marginTop:30
},
numberLab:{
  marginLeft:70,
  marginTop:15,
  width:50,
  fontSize:20,
  flexDirection:'row',
  textAlign: 'center',

},
number_input:{
      backgroundColor:'white',
      marginTop:10,
      height:35,
      marginLeft:0,
      width:200,
  },
  touch:{
    marginTop:30,
    backgroundColor:'#00468E',
    width:80,
    height:40,
    marginLeft:120,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
  register:{
    marginTop:30,
    backgroundColor:'#00468E',
    width:120,
    height:40,
    borderRadius:5,
    marginLeft:30,
    justifyContent:'center',
    alignItems:'center'
  },
logbtn:{
  fontSize:16,
  color:'#fff'
}
});

module.exports = Login;
