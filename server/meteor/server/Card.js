class Card {

  constructor(options) {
    const {name, showingBack, images} = options;
    this.name = name;
    this.showingBack = showingBack;
    this.imageUrls = images;
  }

  flipCard() {
    this.showingBack = !this.showingBack;
  }

};
