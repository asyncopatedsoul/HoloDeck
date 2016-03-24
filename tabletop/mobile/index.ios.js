/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

// class mobile extends Component {
//   render() {
//     return (
//       <View style={stylesMain.container}>
//         <Text style={stylesMain.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={stylesMain.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={stylesMain.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const stylesMain = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

var _ = require('lodash');
var DDPClient = require("ddp-client");

var todos = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => !_.isEqual(row1, row2),
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    var ddpClient = new DDPClient({url: 'ws://localhost:3001/websocket'});

    ddpClient.connect(() => ddpClient.subscribe('publicLists'));

    // observe the lists collection
    var observer = ddpClient.observe("lists");
    observer.added = () => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.lists)));
    observer.changed = () => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.lists)));
    observer.removed = () => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.lists)));
  },

  updateRows: function(rows) {
    this.setState({
     dataSource: this.state.dataSource.cloneWithRows(rows),
     loaded: true,
   });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderList}
        style={styles.listView}
      />
    );
    //https://s-media-cache-ak0.pinimg.com/564x/2c/ca/3c/2cca3cb47237d9214d8d9ab1480d5ce4.jpg
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading lists...
        </Text>
      </View>
    );
  },

  renderList: function(list) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{list.name}</Text>
        <Text style={styles.incompleteCount}>{list.incompleteCount}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  name: {
    flex: 5,
    fontSize: 18,
  },
  incompleteCount: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#2196F3',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
});

//AppRegistry.registerComponent('mobile', () => mobile);

AppRegistry.registerComponent('mobile', () => todos);
