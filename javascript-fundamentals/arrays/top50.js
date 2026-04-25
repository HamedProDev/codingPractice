/*

🔥 PART 1 — PROBLEM 1 to 10 (ARRAY FOUNDATION MASTERY)
1. REVERSE ARRAY (NO .reverse)
Idea

Swap elements from both ends moving inward.

Key concept: two pointers
left = 0
right = n - 1
Code
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}
Insight

You are not creating a new array — you are mutating memory in place (important interview concept).

2. MAX NUMBER IN ARRAY
Idea

Track biggest value while scanning.

function max(arr) {
    let maxVal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }

    return maxVal;
}
Insight

This is called linear scan (O(n)) — best possible.

3. SECOND LARGEST NUMBER
Idea

Track two values:

max
second max
function secondLargest(arr) {
    let max = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num !== max) {
            second = num;
        }
    }

    return second;
}
Insight

You must update both in one pass → O(n) optimal.

4. CHECK IF SORTED
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
Insight

Stop early when violation found → optimization technique.

5. REMOVE DUPLICATES
Method 1 (best)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
Method 2 (manual)
function removeDuplicates(arr) {
    let result = [];

    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}
Insight
Set = hash-based uniqueness
includes = slow O(n)
6. MOVE ZEROS TO END
Idea

Keep track of insert position.

function moveZeros(arr) {
    let pos = 0;

    for (let num of arr) {
        if (num !== 0) {
            arr[pos] = num;
            pos++;
        }
    }

    while (pos < arr.length) {
        arr[pos] = 0;
        pos++;
    }

    return arr;
}
Insight

No swapping needed → overwrite strategy.

7. SUM OF ARRAY
function sum(arr) {
    let total = 0;

    for (let num of arr) {
        total += num;
    }

    return total;
}
Advanced version
arr.reduce((a, b) => a + b, 0);
8. FREQUENCY COUNT
Idea: hash map
function frequency(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return map;
}
Insight

This is the base of:

hashing problems
interview patterns
database indexing logic
9. MISSING NUMBER (1 to N)
Idea

Use math formula OR XOR

Method 1 (sum)
function missing(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    let sum = 0;
    for (let num of arr) sum += num;

    return total - sum;
}
Insight

This avoids extra memory → O(1) space

10. PAIR WITH TARGET SUM
Idea

Use set (fast lookup)

function twoSum(arr, target) {
    let seen = new Set();

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            return [complement, num];
        }

        seen.add(num);
    }

    return [];
}
Insight

This is O(n) instead of O(n²)

*/