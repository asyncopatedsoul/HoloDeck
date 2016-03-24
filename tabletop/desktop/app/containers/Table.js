import React, { Component } from 'react';
import css from '../scss/containers/Table.scss';
import Deck from '../components/Deck.js';


class Table extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table">
        <Deck startX={200} startY={10} />
        <Deck startX={500} startY={300} />
      </div>
    );
  }
}

export default Table;
