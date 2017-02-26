'use strict';

const expect = require('chai').expect;
const { quickSort, partition } = require('./quick_sort');

describe('Quick sort algorithm', function () {


    describe('partition function', function () {

        it('returns the correct partition point for two element arrays', function () {
            expect(partition([2,3], 0, 1)).to.equal(0);
            expect(partition([4,3], 0, 1)).to.equal(1);
        });

        it('returns the correct partition point for longer arrays', function () {
            expect(partition([2, 5, 4, 6, 7, 3, 1, 4, 12, 11], 0, 9)).to.equal(1);
            expect(partition([4, 6, 7, 3, 1, 4, 12, 11], 0, 7)).to.equal(2);
        });

    });

      describe('quickSort function', function () {

        it('can quick sort an array even if it\'s 0 or 1 in length', function () {
          expect(quickSort([])).to.deep.equal([]);
          expect(quickSort([42])).to.deep.equal([42]);
        });

        it('can quick sort longer arrays', function () {
          const sorted = quickSort([2, 5, 4, 6, 7, 3, 1, 4, 12, 11]);
          expect(sorted).to.deep.equal([ 1, 2, 3, 4, 4, 5, 6, 7, 11, 12 ]);
        });

      });

});