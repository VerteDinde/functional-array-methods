const assert = require('chai').assert;
const method = require('../lib/arrays');

describe('Array Methods', () => {

  it('forEach', () => {
    const array = [15, 16, 17, undefined, 20];
    let indexArr = [];
    let count;
    const returned = method.forEachFn(array, (item, index) => {
      count = array[index] = item + 2;
      indexArr.push(index);
    });
    assert.equal(returned, undefined);
    assert.equal(count, 22);
    assert.deepEqual(indexArr, [0, 1, 2, 4]);
  });


  it('map(array, callback)', () => {
    const array = [42, 24, 66, undefined, 13];
    const returned = method.mapFn(array, (item, index) => {
      array[index] = item + 2;
    });
    assert.deepEqual(returned, [44, 26, 68, undefined, 15]);
    assert.equal(returned[0], 44);
  });


  it('filter(array, callback)', () => {
    const array = [15, 20, 15, 15, 25];
    const returned = method.filterFn(array, (item, index) => {
      return array[index] >= 20;
    });
    assert.deepEqual(returned, [20, 25]);
    assert.equal(returned.length, 2);
  });


  it('reduce(array, callback [, initialValue])', () => {
    const array = [15, 20, 15, 15, 25];
    const returned = method.reduceFn(array, (acc, item, index) => {
    }, 20);
    assert.equal(returned, undefined);
  });

  it('findIndex(array, callback)', () => {
    // Takes a callback of signature `(item, index) => {}` 
    // and returns the index of the first item whose callback returns `true` or a truthy value.
    // Returns the index of the found item, `-1` if no item is found.
  });

  it('every(array, callback)', () => {
    // Takes a callback of signature `(item, index) => {}`
    // and returns an overall `true` value if **all ** callback return `true` or a truthy value.
    // Returns the `true` if every item in the array has returned `true`, otherwise`false`.
  });

});