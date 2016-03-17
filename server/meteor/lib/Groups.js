/**
  * Group of game objects
  * this is represented as a stack of object _ids
  * When we deal objects, we are just passing object _ids from group to group
  *
  */

Groups = new Mongo.Collection('groups');

Groups.populateWithDefaults = function () {
  let groups = this.find().forEach(function (group) {
    _.each(group.objects.default, function (objectName) {
      Groups.pushObjectByName(group._id, objectName);
    });
  });
};

Groups.pushObjectByName = function (groupId, objectName) {
  let object = GameObjects.findOne({name: objectName});
  Groups.upsert({
    _id: groupId
  }, {
    $addToSet: {
      'objects.current': object._id
    }
  });
};

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
