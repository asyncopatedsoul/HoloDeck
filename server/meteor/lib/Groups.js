/**
  * Group of game objects
  * this is represented as a stack of object _ids
  * When we deal objects, we are just passing object _ids from group to group
  *
  * Group Properties:
  *
  * name: name of the group (not really used for anything?)
  * type: ['deck', 'row', 'fan'] => this determines how the group looks on the table
  * position: {x: number, y: number} => determines where on the table the group is located
  * objects.allowed: [allowed types] => array of allowed object classes
  * objects.default: [object names] => array of object names that should start in the group
  * objects.current: [objectIds] => array of objectIds that represents the current objects in the group
  *
  * Methods:
  *
  * populateWithDefaults() => repopulates all the groups with the default objects
  * addObjectByName(groupId, objectName) => adds an object to a group
  * removeObjectByName(groupId, objectName) => removes an object from a group, if it exists
  * updatePosition(groupId, position) => updates the position of a group
  *
  */

Groups = new Mongo.Collection('groups');

Groups.populateWithDefaults = function () {
  let groups = this.find().forEach(function (group) {
    _.each(group.objects.default, function (objectName) {
      Groups.addObjectByName(group._id, objectName);
    });
  });
};

Groups.removeObjectByName = function (groupId, objectName) {
  let object = GameObjects.findOne({name: objectName});
  Groups.update({
    _id: groupId
  }, {
    $pullAll: {
      'objects.current': [object._id]
    }
  });
}

Groups.addObjectByName = function (groupId, objectName) {
  let object = GameObjects.findOne({name: objectName});
  Groups.upsert({
    _id: groupId
  }, {
    $addToSet: {
      'objects.current': object._id
    }
  });
};

Groups.updatePosition = function (groupId, position) {
  Groups.update({
    _id: groupId
  }, {
    $set: {
      position: position
    }
  });
}

Groups.shuffle = function () {

};

/**
 * [dealOne deals the top object]
 * @return {[type]} [description]
 */
Groups.dealTopFromTo = function (fromGroupId, toGroupId, fromGroup) {
  if (!fromGroup) {
    var fromGroup = Groups.findOne({_id: fromGroupId});
  }
  // Get the object id before we remove it
  let objectId = fromGroup.objects.current[0];

  // Pop off object from the from group
  Groups.upsert({
    _id: fromGroupId
  }, {
    $pop: {
      'objects.current': -1
    }
  });

  // Push objectId onto the To group
  Groups.update({
    _id: toGroupId
  }, {
    $push: {
      'objects.current': objectId
    }
  });
};

Groups.dealTopFromToByName = function (fromName, toName) {
  var fromGroup = Groups.findOne({name: fromName});
  var toGroup = Groups.findOne({name: toName});

  Groups.dealTopFromTo(fromGroup._id, toGroup._id, fromGroup);
};

/**
 *  [dealAll deals all of the objects evenly to all players]
 */
Groups.dealAll = function () {

};

/**
 * [collectAll collects all objects of the specified type]
 *
 */
Groups.collectAll = function (type) {

};
