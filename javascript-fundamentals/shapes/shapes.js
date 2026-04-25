function generateShape(n, shape) {
    let grid = Array.from({ length: n }, () => Array(n).fill(0));

    if (shape === "checkerboard") {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                grid[i][j] = (i + j) % 2;
            }
        }

    } else if (shape === "diamond") {
        let mid = Math.floor(n / 2);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (Math.abs(i - mid) + Math.abs(j - mid) <= mid) {
                    grid[i][j] = 1;
                }
            }
        }
    }

    return grid;
}

// Example usage
let n = 5;
let shape = "checkerboard";

let result = generateShape(n, shape);

// Print result
result.forEach(row => {
    console.log(row.join(" "));
});