'use strict'

const bucketSort = (arr, bucketSize = 5) => {
    if (arr.length <= 1) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    // Phân phối các phần tử vào bucket
    for (let num of arr) {
        buckets[Math.floor((num - min) / bucketSize)].push(num);
    }

    // Sắp xếp từng bucket và ghép lại
    return buckets.reduce((sortedArr, bucket) => {
        return sortedArr.concat(bucket.sort((a, b) => a - b));
    }, []);
};


// Test case
const arr = [3.1, 2.4, 1.8, 5.7, 4.3, 6.2];
console.log('Sorted array:', bucketSort(arr));
