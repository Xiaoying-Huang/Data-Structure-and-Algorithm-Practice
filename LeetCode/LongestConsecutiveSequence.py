def longestConsecutive(nums):
    to_see = sorted(nums, reverse=False)
    print(to_see)
    max = 1
    count = 1
    for i in range(1, len(nums)):
        if to_see[i] - to_see[i - 1] == 1:
            count += 1
            if count > max:
                max = count
        elif to_see[i]==to_see[i - 1]:
            continue
        else:
            count = 1
        print("i=", i, "max=", max, "count=", count)
    return max


print(longestConsecutive([1,2,0,1]))
