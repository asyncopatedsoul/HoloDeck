import React, { Component } from 'react';
import styles from './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingBack: props.showingBack
    };
  }

  imageUrl() {
    if (this.state.showingBack) {
      return 'public/img/' + this.props.backImage;
    } else {
      return 'public/img/' + this.props.frontImage;
    }
  }

  flipCard() {
    const showingBack = this.state.showingBack;

    this.setState({
      showingBack: !showingBack
    });
  }

  render() {
    return (
      <div className={styles.card} onClick={this.flipCard.bind(this)}>
        <img src={this.imageUrl()} />
      </div>
    );
  }
}

export default Card;
