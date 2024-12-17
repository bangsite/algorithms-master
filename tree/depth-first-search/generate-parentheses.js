'use strict'


const generateParentheses = (n) => {
    const result = [];

    const dfs = (current, open, close) => {
        if (current.length === 2 * n) {
            return result.push(current);
        }

        if (open < n) {
            dfs(current + '(', open + 1, close);
        }

        if (close < open) {
            dfs(current + ')', open, close + 1);
        }
    }

    dfs('', 0, 0);
    return result;
}


const n = 3;
const n2 = 1;
const n3 = 4;

console.log(generateParentheses(n));
