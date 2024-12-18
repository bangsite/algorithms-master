# Quick Sort

Thuật toán sắp xếp nhanh (Quick Sort)  là một thuật toán sắp xếp chia để trị, chọn một phần tử gọi là pivot và chia
mảng thành hai phần:

- Các phần tử nhỏ hơn pivot.
- Các phần tử lớn hơn pivot.
- Sau đó, đệ quy áp dụng cho các phần đã chia.

## Approach

1. Chọn pivot.
2. Phân vùng mảng dựa trên pivot.
3. Sắp xếp đệ quy hai phần.

## Complexity

- Time Complexity:
    - Tốt nhất và trung bình: O(n log n).
    - Xấu nhất (mảng đã sắp xếp): O(n^2).
- Auxiliary Space: O(log n) (do stack đệ quy).

## Applications

- Dùng trong xử lý dữ liệu lớn và hệ thống không yêu cầu tính ổn định.

## Code Example

```javascript
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
