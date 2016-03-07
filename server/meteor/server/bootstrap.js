Meteor.startup(function () {

  if (GameObjects.find().count() === 0) {

    // seed playing cards
    var seedJson = JSON.parse(Assets.getText("config-cards.json"));

    _.each(seedJson, function(objectData) {
      console.log(objectData);
      GameObjects.insert(objectData);
    });

  } else {
    console.log("objectData seeded");
  }

})
