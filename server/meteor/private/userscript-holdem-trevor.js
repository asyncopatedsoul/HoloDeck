{
  
  P.onGameStart() {
    P.groups('main').shuffle();
    P.startRound('flop');
  }

  // This function is called right before a round is about to start
  P.roundWillStart(round) {
    if (round === 'flop') {
      // Gather all the cards to the main group
      P.groups('main').collect();

      // Shuffle cards
      P.groups('main').shuffle();
    }

    if (round === 'turn') {
      // Don't need to do anything just before the round starts
    }

    if (round === 'river') {
      // Don't need to do anything just before river round starts
    }
  }

  // This function would be called each time a round started
  P.roundDidStart(round) {
    if (round.name === 'flop') {
      // Deal two cards to all players from the main group
      // group name is defined in the config file
      // .to and .from take a query to find the correct groups
      P.deal(2).to({type: 'player'}).from('main');

      // Deal the flop
      P.deal(3).to('table').from('main');

      // Begin turns for all players
      P.groups({
        type: 'player',
        position: 'first'
      }).startTurn();
    }

    if (round.name === 'turn') {

    }
  }

  P.roundWillEnd(round) {

  }

  P.roundDidEnd(round) {
    if (round.name === 'flop') {

    }
  }

  P.players().turnWillStart(function (turn) {

  });

  // Function to run when a players turn starts
  P.players().turnDidStart(function(round) {
    this.actions({
      'check': function () {
        P.nextTurn();
      },
      'pass': function () {
        P.nextTurn();
      },
      'fold': function () {
        this.endRound();
        P.nextTurn();
      }
    });
  });

  /**
   * NOTES
   *
   * If P.nextTurn() is called and there are no


}
