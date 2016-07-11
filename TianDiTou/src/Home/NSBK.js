import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ActivityIndicator
} from 'react-native';

import NSBKDetailList from './NSBKDetailList';
var REQUEST_URL = 'http://122.114.60.121/yimi_server/servlet/baike_mor';
class NSBK extends Component{
  constructor(props) {
    super(props);
    this.state = ({
      isLoading:false,
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=> row1 !== row2
      }),
    })
  }
  componentDidMount() {
      this.fetchData()
  }

  fetchData(){
    fetch(REQUEST_URL)
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

  isLoadingView(){
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large"/>
          <Text>loading .....</Text>
      </View>
    )
  }
  renderRow(item){
    return(
      <TouchableHighlight
        onPress={()=>this.showInfoDetail(item)} underlayColor='#dddddd'>
        <View style={styles.container}>
          <Text style={styles.title}>{item.zuowu}</Text>
          <View style={styles.line}></View>
        </View>
      </TouchableHighlight>
    )
  }
  showInfoDetail(item){
    console.log(item.zuowu);
    this.props.navigator.push({
      title:'详情',
      component:NSBKDetailList,
      passProps:{item},
    })
  }
  render() {
    if (this.state.isLoading) {
      return this.isLoadingView;
    }
    return (
      <ListView style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        >
      </ListView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
  title:{
    fontSize:18,
    color:'#007aff',
    textAlign: 'left',
    marginLeft: 20,
    marginTop:20,
    marginBottom:20
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  line:{
    height:1,
    backgroundColor:'gray',
    marginLeft:20
  }
});
module.exports = NSBK;
