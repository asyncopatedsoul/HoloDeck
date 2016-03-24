import React, { Component } from 'react';
import { Link } from 'react-router';
import Card from './Card.jsx';
import Group from './Group.jsx';
import styles from './Table.css';
import DDPClient from 'ddp-client';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameObjects: {},
      groups: {}
    };
    this.renderGroups.bind(this);
    this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const that = this;
    const ddpClient = new DDPClient({url: 'ws://localhost:4000/websocket'});

    ddpClient.connect((err, wasReconnected) => {
      if (err) {
        throw new Error('Error connecting to ddp server');
      }

      if (wasReconnected) {
        console.log('ddp client was reestablished a connection');
      }

      that.addObservers(ddpClient);
    });
  }

  addObservers(ddpClient) {
    const that = this;
    // Observe the game objects
    const objectsObserver = ddpClient.observe('gameObjects');
    objectsObserver.added = function () {
      that.setState({gameObjects: ddpClient.collections.gameObjects});
    };
    objectsObserver.changed = function () {
      that.setState({gameObjects: ddpClient.collections.gameObjects});
    }
    objectsObserver.removed = function () {
      that.setState({gameObjects: ddpClient.collections.gameObjects});
    };

    // Observe the groups
    const groupsObserver = ddpClient.observe('groups');
    groupsObserver.added = function () {
      that.setState({groups: ddpClient.collections.groups});
    };
    groupsObserver.changed = function () {
      that.setState({groups: ddpClient.collections.groups});
    }
    groupsObserver.removed = function () {
      that.setState({groups: ddpClient.collections.groups});
    };
  }

  renderGroups() {
    return Object.keys(this.state.groups).map(function (groupId, index) {
      const group = this.state.groups[groupId];
      return <Group
        key={index}
        objects={this.state.gameObjects}
        objectIds={group.objects.current} />
    }, this);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          {this.renderGroups()}
        </div>
      </div>
    );
  }
}

export default Table;
