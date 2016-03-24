import React, { Component } from 'react';
import Card from './Card.jsx';
import {DraggableCore} from 'react-draggable';
import styles from './Group.css';
import DDPClient from 'ddp-client';

class Group extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: {
        x: this.props.group.position.x,
        y: this.props.group.position.y
      }
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e, dragInfo) {
    const x = this.state.position.x += dragInfo.position.deltaX;
    const y = this.state.position.y += dragInfo.position.deltaY;
    this.setState({
      position: {
        x: x,
        y: y
      }
    });
  }

  renderObjects() {
    const {group} = this.props;
    return group.objects.current.map(function (objectId, index) {
      const card = this.props.objects[objectId];
      return <Card
        key={objectId}
        showingBack={card.showingBack}
        backImage={card.images.back}
        frontImage={card.images.front} />
    }, this);
  }

  render() {
    var {group} = this.props;
    return (
      <DraggableCore
        onDrag={this.handleDrag}
        handle=".group-drag-handle" >
        <div
          className={'group ' + group.type}
          style={{
            position: 'absolute',
            left: this.state.position.x + 'px',
            top: this.state.position.y + 'px'
          }}>
          <div className="group-drag-handle"
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              top: '-50px',
              left: '-50px',
              backgroundColor: 'green'
            }} ></div>
          <ul>
            {this.renderObjects()}
          </ul>
        </div>
      </DraggableCore>
    );
  }
}

export default Group;
