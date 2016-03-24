Meteor.methods({

  'groups/updatePosition': function (args) {
    var groupId = args[0];
    var position = args[1];
    Groups.updatePosition(groupId, position);
  }
})
