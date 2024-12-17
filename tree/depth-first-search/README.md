# Depth First Search

Tìm kiếm theo chiều sâu (DFS) là là một thuật toán để duyệt hoặc tìm kiếm cấu trúc dữ liệu hoặc đồ thị.

- DFS bắt đầu từ một đỉnh gốc (root) và đi sâu vào từng nhánh con cho đến khi không thể đi tiếp (tức là gặp nút lá hoặc
  đỉnh đã thăm), rồi quay lui (backtrack) để duyệt nhánh khác.

- DFS được triển khai bằng stack hoặc sử dụng đệ quy để duy trì trạng thái các đỉnh.

Để dễ hình dung, hãy tưởng tượng bạn đang đi qua 1 mê cung:

- Bạn chọn một lối đi và tiếp tục đi sâu nhất có thể.
- Nếu bạn gặp ngõ cụt hoặc đã đi qua một lối nào đó, bạn quay trở lại ngã rẽ gần nhất.
- Tiếp tục chọn lối khác để đi sâu nhất có thể.
- Quá trình này lặp lại cho đến khi toàn bộ mê cung được khám phá.

## Approach

1. Chọn một đỉnh bất kỳ làm gốc và đưa nó vào stack hoặc gọi hàm đệ quy để bắt đầu duyệt.
2. Lặp lại các bước sau:

- Lấy đỉnh trên cùng của stack hoặc đỉnh hiện tại trong hàm đệ quy.
- Đánh dấu đỉnh đó là "đã thăm" (visited).
- Duyệt tất cả các đỉnh kề của nó (nếu có):
    - Nếu đỉnh kề chưa được thăm, thêm nó vào stack hoặc gọi đệ quy cho đỉnh đó.

3. Quay lui (backtrack) khi đã duyệt hết các nhánh.

## Complexity

Time Complexity: O(V + E), trong đó

- V là số đỉnh (vertices)
- E là số cạnh (edges)

Mỗi đỉnh và cạnh chỉ được duyệt một lần.

Auxiliary Space: O(V) trong trường hợp tệ nhất khi sử dụng stack hoặc đệ quy.

## Applications

- Tìm kiếm trong đồ thị hoặc cây.
- Phát hiện chu trình trong đồ thị.
- Duyệt toàn bộ đỉnh trong đồ thị (Traversal)
- Giải quyết bài toán Backtracking, như:
    - Sudoku
    - Sinh tổ hợp, hoán vị
    - Tìm đường đi trong mê cung
- Phân loại thành phần liên thông trong đồ thị.
- Sinh tất cả các cấu trúc hợp lệ, như bài toán Generate Parentheses.

## Problem List

#### [Generate Parentheses]()

<details><summary><b>Detail</b></summary>
<p>
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

#### Example 1

- Input:

```
n = 3
```

- Output:

```
["((()))","(()())","(())()","()(())","()()()"]
```

#### Example 2

- Input:

```
n = 1
```

- Output:

```
["()"]
```

#### Constraints

- 1 <= n <= 8

</p>
</details>

---
