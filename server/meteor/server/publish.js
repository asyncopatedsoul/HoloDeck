Meteor.publish('gameObjects', function(sessionName) {

  //check(sessionName, String);
  //return GameObjects.find({sessionName: sessionName});

  return GameObjects.find();
});
