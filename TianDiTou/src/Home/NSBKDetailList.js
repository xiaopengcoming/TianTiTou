import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ListView,
  ActivityIndicator,
  SegmentedControlIOS
} from 'react-native';
import NSBKWebview from './NSBKWebview';
var REQUEST_URL = 'http://122.114.60.121/yimi_server/servlet/baike_list';
class NSBKDetailList extends Component{
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
      this.fetchData('病害')
  }

  fetchData(index){
    console.log(index);
    URL = REQUEST_URL+'?bname='+encodeURIComponent(this.props.item.zuowu)+'&types='+encodeURIComponent(index);
    fetch(URL)
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

  showInfoDetail(item){
    console.log(item.named);

    this.props.navigator.push({
      title:item.named,
      component:NSBKWebview,
      passProps:{item}
    })
  }

  renderRow(item){
    return(
      <TouchableHighlight
        onPress={()=>this.showInfoDetail(item)} underlayColor='#dddddd'>
        <View style={styles.container}>
          <Text style={styles.title}>{item.named}</Text>
          <View style={styles.line}></View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    if (this.state.isLoading) {
      return this.isLoadingView;
    }
    return (
      <View style={{flex:1}}>
        <SegmentedControlIOS
          values={['病害','虫害']}
          tintColor='blue'
          selectedIndex={0}
          onValueChange={(value)=>this.fetchData(value)}
          style={{marginTop:70,height:30,width:200,alignSelf:'center'}}/>
        <ListView style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
        </ListView>
      </View>
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
module.exports = NSBKDetailList;
