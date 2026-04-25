# 🔥 PART 1 — PROBLEM 1 to 10 (ARRAY FOUNDATION MASTERY)
## **1. REVERSE ARRAY (NO .reverse)**
__Idea__

Swap elements from both ends moving inward.

Key concept: two pointers
```javascript
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
```
*Insight*

__You are not creating a new array — you are mutating memory in place (important interview concept).__

## **2. MAX NUMBER IN ARRAY**
__Idea__

Track biggest value while scanning.
```javascript
function max(arr) {
    let maxVal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }

    return maxVal;
}
```
*Insight*

__This is called linear scan (O(n)) — best possible.__

## **3. SECOND LARGEST NUMBER**
Idea

Track two values:
```javascript
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

```

__You must update both in one pass → O(n) optimal.__

## **4. CHECK IF SORTED**
```javascript
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
```
*Insight*

__Stop early when violation found → optimization technique.__



## **5. REMOVE DUPLICATES**
Method 1 (best)

```javascript 
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

```
*Insight*
Set = hash-based uniqueness
includes = slow O(n)
## **6. MOVE ZEROS TO END**
__Idea__

Keep track of insert position.

```javascript 
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
``` 
*Insight*

No swapping needed → overwrite strategy.

## **7. SUM OF ARRAY**
```javascript 
function sum(arr) {
    let total = 0;

    for (let num of arr) {
        total += num;
    }

    return total;
}

``` 
Advanced version
```
arr.reduce((a, b) => a + b, 0);
```
## **8. FREQUENCY COUNT**

__Idea: hash map__

```javascript 
function frequency(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return map;
}
```
*Insight*

This is the base of:
```
hashing problems
interview patterns
database indexing logic
```
## **9. MISSING NUMBER (1 to N)**

__Idea__

Use math formula OR XOR

Method 1 (sum)

```javascript 
function missing(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    let sum = 0;
    for (let num of arr) sum += num;

    return total - sum;
}
``` 
Insight

This avoids extra memory → O(1) space

## **10. PAIR WITH TARGET SUM**
Idea

Use set (fast lookup)

```javascript
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
```
*Insight*

This is O(n) instead of O(n²)

*🧠 PART 1 SUMMARY (IMPORTANT)*

You just learned core patterns:

🔥 Patterns used:
Two pointers (reverse)
Single scan (max, sorted)
Hashing (frequency, two sum)
Math optimization (missing number)
In-place modification (move zeros)
🚀 NEXT STEP

If you’re ready, I’ll continue:

👉 PART 2 (11–20):

rotation
intersection
union
Kadane’s algorithm
Dutch flag
and more real interview killers

Just say:
👉 "continue part 2"

"continue part 2"

Good — now we go deeper. These are the problems where interviews start separating good devs from serious devs.

🔥 PART 2 — PROBLEM 11 to 20 (INTERMEDIATE CORE PATTERNS)
11. ROTATE ARRAY BY K STEPS
Problem
[1,2,3,4,5], k=2 → [4,5,1,2,3]
🔥 Idea (3-step reversal trick)

Instead of shifting one by one (slow), we reverse parts:

reverse whole array
reverse first k
reverse rest
Code
```
function reverse(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

function rotate(arr, k) {
    k = k % arr.length;

    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
}
```
🧠 Insight

This is O(n) vs brute force O(n·k)

👉 Very common interview trick

12. INTERSECTION OF TWO ARRAYS
Idea

Use set for fast lookup
```
function intersection(a, b) {
    let setB = new Set(b);
    let result = [];

    for (let num of a) {
        if (setB.has(num)) {
            result.push(num);
        }
    }

    return result;
}
```
🧠 Insight
Hashing avoids nested loops
O(n + m)
13. UNION OF TWO ARRAYS
```
function union(a, b) {
    return [...new Set([...a, ...b])];
}
```
🧠 Insight

Set = automatic deduplication engine

14. FIND DUPLICATES

```
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

```
🧠 Insight

We track:

seen values
repeated values
15. FIRST NON-REPEATING ELEMENT

```
function firstUnique(arr) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of arr) {
        if (freq[num] === 1) return num;
    }

    return -1;
}
```
🧠 Insight

Two-pass pattern:

count first
then find
16. MAJORITY ELEMENT (> n/2)
Boyer-Moore Voting Algorithm (VERY IMPORTANT)
```
function majority(arr) {
    let count = 0;
    let candidate;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

```
🧠 Insight
No hashmap needed
Cancels out different elements
O(n), O(1) space
17. KADANE’S ALGORITHM (MAX SUBARRAY SUM)

```
function maxSubArray(arr) {
    let maxSum = arr[0];
    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        maxSum = Math.max(maxSum, current);
    }

    return maxSum;
}
```
🧠 Insight

At every step:

continue previous subarray OR restart
18. CHECK ARRAY EQUALITY

``` 
function isEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}
```
🧠 Insight

Arrays are equal only if:

same length
same order
same values
19. LONGEST CONSECUTIVE SEQUENCE
```
function longestConsecutive(arr) {
    let set = new Set(arr);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            maxLen = Math.max(maxLen, length);
        }
    }

    return maxLen;
}

```
🧠 Insight

We only start counting at sequence beginnings.

20. DUTCH NATIONAL FLAG (0,1,2 SORT)
```
function sortColors(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}
```
🧠 Insight

Three pointers:

low → zeros
mid → current
high → twos
🧠 PART 2 SUMMARY

You just learned interview-grade patterns:

🔥 Patterns:
Reverse trick (rotation)
Hashing (intersection, duplicates)
Voting algorithm (majority)
Kadane (dynamic max subarray)
Two-pass frequency logic
Two-pointer partitioning (Dutch flag)
🚀 NEXT STEP

If you continue, Part 3 will be:

👉 HARD LEVEL (21–35):

Two Sum variations
Sliding window
Rain water trapping
Product of array except self
Maximum sliding window
Subarray problems (very important)

Say:
👉 "
continue part 3"

part 3 but with more examples

Good — now we enter real interview territory. Part 3 is where people either become strong or get stuck. I’ll explain each problem with:

clear idea
step-by-step logic
full code
multiple examples
common mistakes
🔥 PART 3 — PROBLEM 21 to 35 (HARD CORE PATTERNS)
21. TWO SUM (FUNDAMENTAL INTERVIEW PROBLEM)
Problem

Find two numbers that add to target.

[2,7,11,15], target = 9 → [2,7]
🔥 Idea

We store numbers we’ve seen and check complements.

Code
``` 
function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [complement, arr[i]];
        }

        map.set(arr[i], i);
    }

    return [];
}
``` 
🧠 Example walk
arr = [2,7,11,15]
target = 9

2 → store
7 → 9-7=2 exists → return
⚠️ Mistake

Using nested loops → O(n²) (too slow)

22. THREE SUM (SUM = 0)
Idea

Sort + two pointers

Code

```
function threeSum(arr) {
    arr.sort((a,b)=>a-b);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
```
🧠 Example
[-1,0,1,2,-1,-4]
→ [-1,-1,2], [-1,0,1]
23. PRODUCT EXCEPT SELF
Problem
[1,2,3,4] → [24,12,8,6]
🔥 Idea

Use prefix and suffix multiplication

Code
```
function productExceptSelf(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result;
}
``` 
🧠 Walkthrough
prefix:  1  1  2  6
suffix:  24 12 4  1
result:  24 12 8 6
24. MAX PRODUCT SUBARRAY
Idea

Track max and min (because negatives flip)

Code
``` 
function maxProduct(arr) {
    let max = arr[0];
    let min = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let temp = max;

        max = Math.max(arr[i], max * arr[i], min * arr[i]);
        min = Math.min(arr[i], temp * arr[i], min * arr[i]);

        result = Math.max(result, max);
    }

    
    return result;
}
``` 
🧠 Example
[2,3,-2,4] → 6
25. PEAK ELEMENT
Problem

Find element greater than neighbors.

Code
``` 
function peak(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return arr[i];
        }
    }
}
``` 
🧠 Insight

Can also be solved using binary search (advanced optimization)

26. SUBARRAY WITH GIVEN SUM
``` 
function subarraySum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === target) {
                return [i, j];
            }
        }
    }
}
```
🧠 Example
[1,2,3,4], target=6 → [1,2,3]
27. LONGEST SUBARRAY WITH SUM K
``` 
function longestSubarray(arr, k) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === k) {
            maxLen = i + 1;
        }

        if (map.has(sum - k)) {
            maxLen = Math.max(maxLen, i - map.get(sum - k));
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}
``` 
🧠 Insight

Prefix sum + hashmap = powerful pattern

28. COUNT SUBARRAYS WITH SUM K
function countSubarrays(arr, k) {
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
29. MERGE TWO SORTED ARRAYS
```
function merge(a, b) {
    let i = 0, j = 0;
    let result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) result.push(a[i++]);
        else result.push(b[j++]);
    }

    return result.concat(a.slice(i)).concat(b.slice(j));
}
```
30. MEDIAN OF TWO SORTED ARRAYS (BASIC VERSION)
```

function median(a, b) {
    let merged = [...a, ...b].sort((x,y)=>x-y);

    let n = merged.length;

    if (n % 2 === 1) return merged[Math.floor(n/2)];

    return (merged[n/2 - 1] + merged[n/2]) / 2;
}
```
31. TRAPPING RAIN WATER

```
function trap(arr) {
    let left = 0, right = arr.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) leftMax = arr[left];
            else water += leftMax - arr[left];
            left++;
        } else {
            if (arr[right] >= rightMax) rightMax = arr[right];
            else water += rightMax - arr[right];
            right--;
        }
    }

    return water;
}
```

🧠 Example
[0,1,0,2,1,0,1,3]
→ trapped water = 6
32. CONTAINER WITH MOST WATER
```
function maxArea(arr) {
    let left = 0, right = arr.length - 1;
    let max = 0;

    while (left < right) {
        let area = Math.min(arr[left], arr[right]) * (right - left);
        max = Math.max(max, area);

        if (arr[left] < arr[right]) left++;
        else right--;
    }

    return max;
}```
33. NEXT GREATER ELEMENT
```
function nextGreater(arr) {
    let result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                result[i] = arr[j];
                break;
            }
        }
    }

    return result;
}```

34. ALL SUBARRAYS

```
function allSubarrays(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            result.push(arr.slice(i, j + 1));
        }
    }

    return result;
}```

35. SLIDING WINDOW MAXIMUM (BASIC)

```
function maxWindow(arr, k) {
    let result = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];

        for (let j = i; j < i + k; j++) {
            max = Math.max(max, arr[j]);
        }

        result.push(max);
    }

    return result;
}
```
🧠 PART 3 SUMMARY

You just learned the most important interview patterns:

🔥 Patterns:
Prefix sum + hashmap
Sliding window
Two pointers
Monotonic thinking (water/container)
Subarray logic
Stack-like logic (next greater)
🚀 NEXT STEP

Next is the final level (Part 4: Elite / Hard Interview Level):

sliding window optimized
LIS
inversions
k-th element
advanced greedy + DP array patterns

Say:
👉 "continue part 4"

part 4

Good — this is the elite level. These are the problems that separate “I know JS” from “I can pass top interviews.”

We’re now in:

🔥 PART 4 — PROBLEM 36 to 50 (ELITE / HARD INTERVIEW LEVEL)
36. SMALLEST MISSING POSITIVE INTEGER
Problem
[3,4,-1,1] → 2
🔥 Idea

We place numbers in correct index positions.

Code
```

function firstMissingPositive(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (
            arr[i] > 0 &&
            arr[i] <= n &&
            arr[arr[i] - 1] !== arr[i]
        ) {
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}
```
🧠 Insight

We are using the array itself as a “hash table”.

37. LONGEST INCREASING SUBSEQUENCE (LIS)
Problem
[10,9,2,5,3,7,101,18] → 4
Code (DP O(n²))

```
function LIS(arr) {
    let dp = new Array(arr.length).fill(1);
    let max = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }

    return max;
}

```
🧠 Insight

Each element builds on previous best subsequences.

38. LONGEST SUBARRAY WITH DISTINCT ELEMENTS

```
function longestUnique(arr) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < arr.length; right++) {
        while (set.has(arr[right])) {
            set.delete(arr[left]);
            left++;
        }

        set.add(arr[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```

🧠 Insight

Sliding window + set = dynamic tracking

39. MINIMUM SWAPS TO SORT ARRAY

```
function minSwaps(arr) {
    let n = arr.length;
    let sorted = [...arr].sort((a,b)=>a-b);

    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(sorted[i], i);
    }

    let visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || map.get(arr[i]) === i) continue;

        let cycle = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = map.get(arr[j]);
            cycle++;
        }

        swaps += cycle - 1;
    }

    return swaps;
}
```

🧠 Insight

Sorting creates cycles → cycles determine swaps.

40. FIND DUPLICATE NUMBER (NO MODIFICATION)
```

function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];

    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);

    slow = arr[0];

    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
}

```
🧠 Insight

Floyd cycle detection (linked list trick inside array)

41. REPEATING + MISSING NUMBER

```
function findTwo(arr) {
    let n = arr.length;
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let repeat, missing;

    for (let i = 1; i <= n; i++) {
        if (!freq[i]) missing = i;
        if (freq[i] === 2) repeat = i;
    }

    return { repeat, missing };
}
```

42. COUNT INVERSIONS
Problem

Count pairs where:

i < j but arr[i] > arr[j]
Code (brute force)

``` function inversions(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) count++;
        }
    }

    return count;
}
```
🧠 Insight

Advanced version uses merge sort (O(n log n)).

43. MAX CIRCULAR SUBARRAY SUM
function maxCircular(arr) {
    let total = arr.reduce((a,b)=>a+b,0);

    let maxKadane = kadane(arr);
    let minKadane = kadaneMin(arr);

    if (maxKadane < 0) return maxKadane;

    return Math.max(maxKadane, total - minKadane);
}

function kadane(arr) {
    let max = arr[0], curr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        curr = Math.max(arr[i], curr + arr[i]);
        max = Math.max(max, curr);
    }

    return max;
}

function kadaneMin(arr) {
    let min = arr[0], curr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        curr = Math.min(arr[i], curr + arr[i]);
        min = Math.min(min, curr);
    }

    return min;
}
44. REARRANGE ALTERNATE MAX-MIN
function rearrange(arr) {
    arr.sort((a,b)=>a-b);

    let result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]);
        } else {
            result.push(arr[right--]);
            result.push(arr[left++]);
        }
    }

    return result;
}
45. PARTITION ARRAY AROUND PIVOT
function partition(arr, pivot) {
    let left = [];
    let right = [];

    for (let num of arr) {
        if (num < pivot) left.push(num);
        else right.push(num);
    }

    return [...left, ...right];
}
46. KTH LARGEST ELEMENT
function kthLargest(arr, k) {
    arr.sort((a,b)=>b-a);
    return arr[k - 1];
}
47. TOP K FREQUENT ELEMENTS
function topK(arr, k) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let sorted = Object.entries(freq)
        .sort((a,b)=>b[1]-a[1]);

    return sorted.slice(0, k).map(x => Number(x[0]));
}
48. LONGEST REPEATING CHARACTER REPLACEMENT
function characterReplacement(s, k) {
    let map = {};
    let left = 0;
    let maxCount = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        map[s[right]] = (map[s[right]] || 0) + 1;

        maxCount = Math.max(maxCount, map[s[right]]);

        while ((right - left + 1) - maxCount > k) {
            map[s[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}
49. SUBARRAY WITH ZERO SUM
function zeroSum(arr) {
    let set = new Set();
    let sum = 0;

    set.add(0);

    for (let num of arr) {
        sum += num;

        if (set.has(sum)) return true;

        set.add(sum);
    }

    return false;
}
50. MINIMUM WINDOW SUBARRAY (HARD)
Idea

Shrink window while maintaining condition.

function minWindow(arr, target) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}