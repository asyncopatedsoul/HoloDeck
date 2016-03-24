import React, { Component } from 'react';
import css from '../scss/components/Deck.scss';
import Obj from './Object.js';

class Group extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var {startX, startY} = this.props;
    return (
      <Obj startX={startX} startY={startY}>
        <div className="deck">
          <img src="./public/img/back.png" draggable="false"/>
        </div>
      </Obj>
    );
  }
}

export default Group;
