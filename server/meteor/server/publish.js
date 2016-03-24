Meteor.publish('gameObjects', function() {

  //check(sessionName, String);
  //return GameObjects.find({sessionName: sessionName});

  return GameObjects.find();
});
