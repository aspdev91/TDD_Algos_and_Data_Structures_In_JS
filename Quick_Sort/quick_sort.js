'use strict';

const quickSort = function (arr) {
    if(arr.length <= 1){
        return arr;
    }
    return quickSortHelp(arr, 0, arr.length - 1);
}

const quickSortHelp = function (arr, first, last) {
    if (first >= last) {
        return;
    }
    const splitPoint = partition(arr, first, last);
    quickSortHelp(arr, first, splitPoint - 1);
    quickSortHelp(arr, splitPoint + 1, last);
    return arr;
}

const partition = function (arr, first, last) {
    const pivot_value = arr[first];

    let left_mark = first + 1;
    let right_mark = last;

    let done = false;
    let temp;
    while (!done) {
        while (left_mark <= right_mark && arr[left_mark] <= pivot_value) {
            left_mark += 1;
        }

        while (arr[right_mark] >= pivot_value && right_mark >= left_mark) {
            right_mark -= 1;
        }

        if (right_mark < left_mark) {
            done = true;
        } else {
            temp = arr[left_mark];
            arr[left_mark] = arr[right_mark];
            arr[right_mark] = temp;
        }
    }

    temp = arr[first];
    arr[first] = arr[right_mark];
    arr[right_mark] = temp;

    return right_mark;
}

module.exports = {
    quickSort,
    quickSortHelp,
    partition
}

