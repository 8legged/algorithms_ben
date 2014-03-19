var expect = require('chai').expect,
LinkedList = require('../lib/linked_list_class2.js');

describe('LinkedList', function () {
  var list;
  var listings = {
    head: 2,
    tail: {
        head: 7,
        tail: null
      }
    };
    beforeEach(function() {
      list = new LinkedList();
      list.set(listings);
    });
    it('push and verify a number', function() {
      list.push(666);
      expect(list.isElement(666)).to.equal(true);
    });
    it('pop a value', function() {
      expect(list.pop(1)).to.equal(7);
    });
    it('confirm value', function() {
      expect(list.isElement(7)).to.equal(true);
    });
    it('determine if empty', function() {
      expect(list.empty()).to.equal(false);
      list.set({});
      expect(list.empty()).to.equal(true);
    });
  });
