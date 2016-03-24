function methods(scope, player, object) {

  // Global methods
  scope.changeDealer( gameObjects, players, gameState ) {
    // assign dealer button
  }

  scope.dealCardsToPlayers( gameObjects, groups, players, gameState ) {

    // check dealer

    // check at least 2 players seated

    // check gameState new hand
  }

  scope.returnCardsToDeck( gameObjects, players, gameState ) {

  }

  scope.dealFlop( gameObjects, players, gameState ) {

  }

  scope.dealTurn( gameObjects, players, gameState ) {

  }

  scope.dealRiver( gameObjects, players, gameState ) {

  }

  // Player methods
  player.foldHand( gameObjects, players, gameState ) {

  }

  player.revealHand( gameObjects, players, gameState ) {

  }

  // Object methods
}

function setup( scope, config ) {

    // 1 deck - 52 playing cards
    

    PlayTable.locations({
    // 1 deck position
      "deck": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

      "discard": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

    // 5 card positions
      "flop1": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

      "flop2": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

      "flop3": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

      "turn": {
        position: function(table) {
          return {x:100,y:100};
        }
      },

      "river": {
        position: function(table) {
          return {x:100,y:100};
        }
      }

    })



    // per player: 1 dock position

}
