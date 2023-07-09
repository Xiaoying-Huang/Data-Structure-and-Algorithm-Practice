#First hash all numbers into a map, then sort the map and take k items from the sorted list

# O(n)

class Solution:
    def topKFrequent(self, nums, k):
        seen={}
        for i in range(len(nums)):
            if nums[i] not in seen:
                seen[nums[i]]=1
            else:
                seen[nums[i]]+=1
        sorted_seen=sorted(seen.items(), key=lambda x:x[1],reverse=True)
        output=[]
        for i in range(k):
            output.append(sorted_seen[i][0])
        return output