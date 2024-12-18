# Radix Sort

Thuật toán sắp xếp theo cơ số  (Radix Sort)  là một thuật toán sắp xếp các số bằng cách xử lý từng chữ số từ hàng đơn vị
đến hàng cao nhất, sử dụng thuật toán đếm (Counting Sort) ở mỗi chữ số.

## Approach

1. Xác định giá trị nhỏ nhất (min) và lớn nhất (max) trong mảng. 
2. Chia toàn bộ mảng thành nhiều nhóm (bucket) dựa trên khoảng giá trị, mỗi nhóm có kích thước cố định (bucketSize). 
3. Phân phối các phần tử vào từng bucket dựa trên giá trị.
4. Sắp xếp từng bucket bằng thuật toán sắp xếp khác (như Insertion Sort hoặc QuickSort). 
5. Kết hợp các bucket để tạo mảng đã sắp xếp.

## Complexity

- Time Complexity: 
  - Trường hợp tốt: O(n + k) (với k là số bucket). 
  - Trường hợp xấu: O(n²) nếu tất cả các phần tử rơi vào một bucket và phải sắp xếp bucket đó.

- Auxiliary Space: O(n + k)

## Applications

- Dữ liệu có giá trị phân bố đồng đều, ví dụ: điểm số, chiều cao, hoặc trọng lượng. 
- Không phù hợp nếu dữ liệu có khoảng giá trị quá rộng hoặc phân bố không đều.

## Code Example

```javascript
const bucketSort = (arr, bucketSize = 5) => {
    if (arr.length === 0) return arr;

    // 1. Tìm giá trị min và max
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // 2. Tính số lượng bucket
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    // 3. Phân phối các phần tử vào bucket
    for (let num of arr) {
        const bucketIndex = Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    }

    // 4. Sắp xếp từng bucket và hợp nhất
    return buckets.reduce((sortedArr, bucket) => {
        bucket.sort((a, b) => a - b); // Sắp xếp bucket
        return sortedArr.concat(bucket);
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
