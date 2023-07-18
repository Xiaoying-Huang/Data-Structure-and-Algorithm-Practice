def threeSum(nums):
    nums.sort()
    result = []
    for i, a in enumerate(nums):
        if a > 0:
            break
        if a == nums[i - 1]:
            continue

        l = i + 1
        r = len(nums) - 1
        while l < r:
            if nums[l] + nums[r] + a == 0:
                result.append([a, nums[l], nums[r]])
                l += 1
                r -= 1
                while nums[l] == nums[l - 1] and l < r:
                    l += 1
            elif nums[l] + nums[r] + a > 0:
                r -= 1
            else:
                l += 1
    return result


threeSum([0, 0, 0])
