'use strict';

const expect = require('chai').expect;
const { mergeSort, merge } = require('./merge_sort');

describe('Merge sort algorithm', function () {


  describe('merge function', function () {

    it('combines two arrays into one', function () {
      expect(merge([], [])).to.deep.equal([]);
    });

    it('combines two sorted arrays of equal length into one sorted array', function () {
      expect(merge([-2, 3, 6], [4, 5, 19])).to.deep.equal([-2, 3, 4, 5, 6, 19]);
      expect(merge([1, 2, 3, 4], [5, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('combines sorted arrays of different lengths into one sorted array', function () {
      expect(merge([-5, -3, -2, 7, 9, 11], [4, 5, 50])).to.deep.equal([-5, -3, -2, 4, 5, 7, 9, 11, 50]);
    });

  });

  describe('mergeSort function', function () {

    it('returns a sorted array regardless if it\'s 0 or 1 in length', function () {
      expect(mergeSort([])).to.deep.equal([]);
      expect(mergeSort([42])).to.deep.equal([42]);
    });

    it('can merge sort longer arrays', function () {
      const sorted = mergeSort([19, 11, 100, 17, 60, 43, -40]);
      expect(sorted).to.deep.equal([-40, 11, 17, 19, 43, 60, 100]);
    });

  });

});