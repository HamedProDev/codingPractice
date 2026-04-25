def generate_shape(n, shape):
    grid = [[0]*n for _ in range(n)]
    
    if shape == "checkerboard":
        for i in range(n):
            for j in range(n):
                grid[i][j] = (i + j) % 2

    elif shape == "diamond":
        mid = n // 2
        for i in range(n):
            for j in range(n):
                if abs(i - mid) + abs(j - mid) <= mid:
                    grid[i][j] = 1

    return grid


n = 5
shape = "diamond"

result = generate_shape(n, shape)

for row in result:
    print(" ".join(map(str, row)))