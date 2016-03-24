{
  numberOfRounds: 'infinite',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 6,

}

/**

most basic actions

Objects
  hold on object => object hovers
  drag => move an object in space
  release => object drops
  hover on another object or group => highlight object or group
  release over another object or group => combines or adds object to group
  tap => flip object
  move an object to a players hand

Groups
  hold on group => group hovers
  drag => moves group
  release => drops group

Deck
  stack cards visually
  swipe => pulls off top card
  tap => flips top card
  wiggle => shuffles deck
  double tap => collects all cards

Players (a type of group)
  join game
  leave game
