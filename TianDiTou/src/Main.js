/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  NavigatorIOS,
  View
} from 'react-native';
import Home from './Home/home'
import News from './Home/News'
import Login from './Home/Login'
import More from './Home/More'
import Mine from './Home/Mine';

class TianDiTou extends Component {
  constructor(){
    super();
    this.state = {
      selectedTab:'首页',
      presses:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS>
          <TabBarIOS.Item
            title="首页"
            icon={require("./tabbarImage/icon2.png")}
            selected={this.state.selectedTab === '首页'}
            onPress={()=>this.setState({selectedTab:'首页'})}>
            <NavigatorIOS style={styles.container}
              barTintColor="#007aff"
              titleTextColor="#fff"
              tintColor="#fff"
              style={styles.container}
              initialRoute={{
                title:'首页',
                component:Home
              }}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="资讯"
            icon={require("./tabbarImage/icon4.png")}
            selected={this.state.selectedTab === '资讯'}
            onPress={()=>this.setState({selectedTab:'资讯'})}>
            <NavigatorIOS
              barTintColor="#007aff"
              titleTextColor="#fff"
              tintColor="#fff"
              style={styles.container}
              initialRoute={{
                title:'资讯',
                component:News
              }}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="提问"
            icon={require("./tabbarImage/icon1.png")}
            selected={this.state.selectedTab === '提问'}
            onPress={()=>{this.setState({selectedTab:'提问'})}}>
            <Text>111
            </Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="更多"
            icon={require("./tabbarImage/icon0.png")}
            selected={this.state.selectedTab === '更多'}
            onPress={()=>this.setState({selectedTab:'更多'})}>
            <NavigatorIOS
              barTintColor="#007aff"
              titleTextColor="#fff"
              tintColor="#fff"
              style={styles.container}
              initialRoute={{
                title:'更多',
                component:More
              }}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="我的"
            icon={require("./tabbarImage/icon3.png")}
            selected={this.state.selectedTab === '我的'}
            onPress={()=>{this.setState({selectedTab:'我的'})}}>
            <NavigatorIOS
              barTintColor="#007aff"
              titleTextColor="#fff"
              tintColor="#fff"
              style={styles.container}
              initialRoute={{
                title:'登录',
                component:Mine
              }}/>

          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

module.exports = TianDiTou;
