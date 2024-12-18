# Merge Sort

Thuật toán sắp xếp trộn (Merge Sort)  là một thuật toán sắp xếp chia để trị, chia mảng thành các phần nhỏ hơn, sắp xếp
từng phần và hợp nhất lại để tạo thành mảng đã sắp xếp.

Sắp xếp trộn là một ví dụ về thuật toán chia để trị do John von Neumann phát minh năm 1945.

## Approach

1. Chia mảng thành hai nửa.
2. Đệ quy sắp xếp từng nửa.
3. Hợp nhất hai nửa đã sắp xếp.

## Complexity

- Time Complexity: O(n log n) (do chia mảng log n lần và hợp nhất mất O(n)).
- Auxiliary Space: O(n) (cần bộ nhớ phụ để lưu trữ mảng tạm).

## Applications

- Dùng trong xử lý dữ liệu cần sắp xếp nhanh, ổn định. 
- Hệ thống xử lý file lớn (external sorting)..

## Code Example

```javascript
const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
