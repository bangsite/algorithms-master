# Bucket  Sort

Thuật toán sắp xếp theo cơ số  (Bucket Sort)  là một thuật toán chia các phần tử thành các nhóm (bucket) dựa trên khoảng giá trị, sau đó sắp xếp từng bucket và hợp lại để tạo mảng đã sắp xếp.

## Approach

1. Tìm chữ số lớn nhất (max).
2. Lặp qua từng chữ số, từ hàng đơn vị đến cao nhất.
3. Sắp xếp từng chữ số bằng Counting Sort.

## Complexity

- Time Complexity: O(d * (n + k)), với d là số chữ số tối đa.

- Auxiliary Space: O(n + k)

## Applications

- Phù hợp với sắp xếp số nguyên lớn hoặc chuỗi ký tự. 
- Không phù hợp với dữ liệu phức tạp như số thực hoặc dữ liệu âm.

## Code Example

```javascript
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

console.log(bucketSort([3.1, 2.4, 1.8, 5.7, 4.3, 6.2]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
