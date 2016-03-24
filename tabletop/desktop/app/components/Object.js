import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import css from '../scss/components/Object.scss';
import {Motion, spring} from 'react-motion';

class Group extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFront: true,
      isLifted: false,
      top: this.props.startY || 200,
      left: this.props.startX || 200
    }

    this.handlePress = this.handlePress.bind(this);
    this.handleTap = this.handleTap.bind(this);
    this.handlePressUp = this.handlePressUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handlePan = this.handlePan.bind(this);
    this.handlePanEnd = this.handlePanEnd.bind(this);
  }

  handlePress(e) {
    this.setState({
      isLifted: true
    });
  }

  handlePressUp(e) {
    this.setState({
      isLifted: false
    });
  }

  handleMouseOut(e) {
    console.log('handling mouseout event');
    this.setState({
      isLifted: false
    });
  }

  handleTap(e) {
    // Should flip the object
    // change the state
    var showFront = !this.state.showFront;
    this.setState({
      showFront: showFront
    });
  }

  handlePan(e) {
    console.log(e);
    console.log('type: ', e.type);
    console.log('deltaX: ', e.deltaX);
    console.log('deltaY: ', e.deltaY);

    this.moveTo(e.srcEvent.movementX, e.srcEvent.movementY);
  }

  handlePanEnd(e) {
    this.setState({
      isLifted: false
    });
    console.log('pan has ended', e);
    this.freeSlide(e.velocityX, e.velocityY);
  }

  freeSlide(velocityX, velocityY) {
    const self = this;
    var time = 0;
    const initial = {
      x: this.state.left,
      y: this.state.top,
      velX: velocityX,
      velY: velocityY
    };

    const interval = 20;
    const accel = -.001;

    setTimeout(function () {
      time += 20;
      self.moveTo(newX(), newY());
    }, 20);

    function newX() {
      return initial.x + (initial.velX * time) + ((accel * Math.pow(time, 2)) / 2);
    }

    function newY() {
      return initial.y + (initial.velY * time) + ((accel * Math.pow(time, 2)) / 2);
    }
  }

  moveTo(x, y) {
    console.log('x, y', x, y);
    let top = this.state.top + y;
    let left = this.state.left + x;
    this.setState({
      top: top,
      left: left
    });
  }

  render() {
    return (
      <Hammer
        onPress={this.handlePress}
        onPressUp={this.handlePressUp}
        onTap={this.handleTap}
        onPan={this.handlePan}
        onPanEnd={this.handlePanEnd} >

        <Motion style={{
            x: spring(this.state.isLifted ? -10 : 0),
            y: spring(this.state.isLifted ? -30 : 0),
            shadowOpacity: spring(this.state.isLifted ? 0.5 : 0)
          }} >

          {({x, y, shadowOpacity}) =>
            <div className="object" style={{
              transform: `translate(${x}px, ${y}px)`,
              boxShadow: `10px 50px 50px rgba(0, 0, 0, ${shadowOpacity})`,
              top: this.state.top,
              left: this.state.left
              }}>

              {this.props.children}

            </div>
          }

        </Motion>
      </Hammer>
    );
  }
}

export default Group;
