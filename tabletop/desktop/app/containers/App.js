import React, { Component, PropTypes } from 'react';
import css from '../scss/containers/App.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
