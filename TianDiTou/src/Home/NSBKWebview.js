import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  WebView,
  ActivityIndicator
} from 'react-native';

var REQUEST_URL = 'http://122.114.60.121/yimi_server/bingchongcaohai.jsp?id=';
class NSBKWebview extends Component{
  constructor(props) {
    super(props);
    console.log(URL);
  }

  render() {
    URL = REQUEST_URL+encodeURIComponent(this.props.item.id);
    return (
      <View style={{flex:1}}>
          <WebView style={styles.webview_style}
            url={URL}
            startInLoadingState={true}
            domStorageEnabled={true}
            javaScriptEnabled={true}>
          </WebView>
      </View>
              );
  }
}

var styles = StyleSheet.create({
  webview_style: {
    backgroundColor: '#fff',
  }
});
module.exports = NSBKWebview;
