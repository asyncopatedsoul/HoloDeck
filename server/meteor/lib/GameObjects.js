GameObjects = new Mongo.Collection('gameObjects');

GameObjects.flipCard = function (objectId) {
  let object = GameObjects.findOne({_id: objectId});
  GameObjects.update({
    _id: objectId
  }, {
    $set: {
      showingBack: !object.showingBack
    }
  });
};

Meteor.methods({

  'gameObjects.flipCard': function (objectId) {
    GameObjects.flipCard(objectId);
  },

  'gameObjects.log': function (message) {
    console.log('We got a message! ', message);
  }

});
