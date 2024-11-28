# Binary Search

Thuật toán Binary Search(tìm kiếm nhị phân) là một thuật toán tìm kiếm hiệu quả, được sử dụng trên một mảng đã sắp xếp
theo thứ tự tăng dần. Thuật toán này giảm phạm vi tìm kiếm bằng cách liên tục chia đôi mảng, từ đó giảm độ phức tạp thời
gian xuống còn O(log N).

## Approach

1. Xác định mảng tìm kiếm ban đầu:
    - Bắt đầu với left = 0 và right = array.length- 1.

2. Tìm phần tử giữa:
    - Tính chỉ số giữa: mid = Math.floor((left + right) / 2).
3. So sánh giá trị:
    - Nếu array[mid] === target: Trả về mid (đã tìm thấy giá trị).
    - Nếu array[mid] < target: Tìm trong nửa phải bằng cách gán left = mid + 1.
    - Nếu array[mid] > target: Tìm trong nửa trái bằng cách gán right = mid - 1.
4. Lặp lại: Tiếp tục chia đôi mảng cho đến khi left > right hoặc tìm thấy giá trị.

## Complexity

- Time Complexity: Mỗi bước lặp, phạm vi tìm kiếm giảm một nửa, nên độ phức tạp thời gian là O(log N).
- Auxiliary Space: Không sử dụng thêm bộ nhớ ngoài, vì vậy độ phức tạp không gian là O(1).

## Applications

- Tìm kiếm nhanh trong danh sách đã sắp xếp.
- Áp dụng trong tìm phần tử trong mảng xoay vòng (rotated sorted array).
- Áp dụng cho bài toán tối ưu như tìm giá trị lớn nhất hoặc nhỏ nhất thỏa mãn điều kiện.

## Problem List

#### [Search in Rotated Sorted Array](https://github.com/bangsite/algorithms-master/blob/main/search/binary-search/search-in-rotated-sorted-array.js)

<details><summary><b>Detail</b></summary>
<p>
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or
-1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

- Search in Rotated Sorted Array
- Search in Rotated Sorted Array

</p>
</details>

---
