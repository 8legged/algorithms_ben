module.exports = function() {
  var list = {};
  var constructor = function() {};

  constructor.prototype.set = function(blah) {
    list = blah;
  };
  constructor.prototype.get = function() {
    return list;
  };
  //  push(element) – insert element at head of list
  constructor.prototype.push = function(value) {
    list = {head: value, tail: list};
  };
  //  pop(pos) – remove element at position pos, zero indexed
  constructor.prototype.pop = function(pos) {
    var node = list;
    // loop over the list, using pos minus 1 to identify the head
    for(var i = pos - 1; i >= 0; i--) {
      node = node.tail;
    }
    return node.head;
  };
  //  isElement(element)  – return true if element occurs in the list, else false.
  constructor.prototype.isElement = function(element) {
    var node = list;
    while(node) {
      if (node.head === element) {
        return true;
      } else {
        node = node.tail;
      }
    }
    return false;
  };
  //  size() – return number of elements in list
  constructor.prototype.size = function() {
    return this.size;
  };
  //  empty() – return true if empty, false, otherwise.
  constructor.prototype.empty = function() {
    if(list.head){
      return false;
    } else {
      return true;
    }
  };
  return new constructor();
};

