const mergeSort = function(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        // keeps dividing array into halves
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid, arr.length));
        // 
        return merge(left, right)
    }
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if(left[i] < right[j]){
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    while(i < left.length){
        result.push(left[i]);
        i += 1;
    }

    while(j < right.length){
        result.push(right[j]);
        j += 1;
    }

    return result;
}

module.exports = {
    mergeSort,
    merge
}