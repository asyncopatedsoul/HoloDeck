import React, { Component } from 'react';
import Card from './Card.jsx';
import Draggable from 'react-draggable';
import styles from './Group.css';
import DDPClient from 'ddp-client';

class Group extends Component {

  constructor(props) {
    super(props);
    this.renderObjects.bind(this);
  }

  componentDidMount() {

  }

  renderObjects() {
    return this.props.objectIds.map(function (objectId, index) {
      const card = this.props.objects[objectId];
      return <Card
        showingBack={card.showingBack}
        backImage={card.images.back}
        frontImage={card.images.front} />
    }, this);
  }

  render() {
    return (
      <Draggable
        start={{x: 100, y: 100}} >
        <div className="group">
          <ul>
            {this.renderObjects()}
          </ul>
        </div>
      </Draggable>
    );
  }
}

export default Group;
