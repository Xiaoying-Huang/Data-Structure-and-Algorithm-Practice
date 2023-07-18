def maxArea(height):
    l = 0
    r = len(height) - 1
    max_area = (r - l) * min(height[l], height[r])

    while l < r and l != r:
        if height[l] <= height[r]:
            l += 1
        else:
            r -= 1
        new_area=(r - l) *min(height[l], height[r])
        if new_area > max_area:
            max_area = new_area

    return max_area

maxArea([1,8,6,2,5,4,8,3,7])