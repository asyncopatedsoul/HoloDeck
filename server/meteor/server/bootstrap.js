Meteor.startup(function () {

  // Read the gameConfig File
  const gameConfig = JSON.parse(Assets.getText('config-cards.json'));

  // Empty the collections
  GameObjects.remove({});
  Groups.remove({});

  // Seed the game objects and groups
  _.each(gameConfig.objects, function (object) {
    GameObjects.insert(object);
  });

  _.each(gameConfig.groups, function (group) {
    Groups.insert(group);
  });

  // Groups have a default property that defines the object names that should exist initially
  Groups.populateWithDefaults();

  // Deal an object from the Main Deck to the Shared Cards
  Groups.dealTopFromToByName('Main Deck', 'Shared Cards');

});
