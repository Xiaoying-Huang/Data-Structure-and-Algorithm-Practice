def isPalindrome(s):
    to_sort = []
    sorted_str = []
    for c in s:
        if c.isalnum():
            to_sort.append(c.lower())
            sorted_str.insert(0, c.lower())
    if "".join(to_sort) == "".join(sorted_str):
        return True
    else:
        return False


print(isPalindrome("A man, a plan, a canal: Panama"))
