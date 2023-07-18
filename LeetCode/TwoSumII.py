from collections import defaultdict


def twoSum(numbers, target):
    seen = defaultdict()
    for i in range(len(numbers)):
        pair = target - numbers[i]
        if pair in seen:
            return [seen[pair] + 1, i + 1]
        else:
            seen[numbers[i]] = i


print(twoSum([2, 3, 4], 6))
