# Recursion-Time limit exceeded
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs):
        output = []
        if len(strs) <= 1:
            return [strs]
        elif len(strs) == 0:
            return []
        else:
            if strs[0] == "":
                pivot = strs[0]
            else:
                pivot = "".join(sorted(strs[0], key=str.lower))
            pivot_anagram = []
            non_anagram = []
            for i in range(len(strs)):
                if strs[i] == "":
                    to_compare = ""
                else:
                    to_compare = "".join(sorted(strs[i], key=str.lower))
                if to_compare == pivot:
                    pivot_anagram.append(strs[i])
                else:
                    non_anagram.append(strs[i])
            output.append(pivot_anagram)
            output.extend(self.groupAnagrams(non_anagram))
        return output


# Sort string and use dictionary, worked
class Solution:
    def groupAnagrams(self, strs):
        groupedAnagrams = {}
        for i in range(len(strs)):
            key = "".join(sorted(strs[i], key=str.lower))
            if key not in groupedAnagrams:
                groupedAnagrams[key] = []
                groupedAnagrams[key].append(strs[i])
            else:
                groupedAnagrams[key].append(strs[i])
        return groupedAnagrams.values()

    # Neetcode: use letter pattern as key in hash map, so that only need to iterate through all the strings once
    class Solution:
        def groupAnagrams(self, strs):
            groupedAnagrams = defaultdict(list)
            for s in strs:
                letter_count = [0] * 26
                for c in s:
                    letter_index = ord(c) - ord("a")
                    letter_count[letter_index] += 1
                    letter_count_tuple = tuple(letter_count)

                groupedAnagrams[letter_count_tuple].append(s)
            return groupedAnagrams.values()
