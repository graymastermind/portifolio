def no_pairs_differ_by_less_than_d(d, lst):
    for i in range(len(lst)):
        for j in range(i + 1, len(lst)):
            if abs(lst[i] - lst[j]) < d:
                return False
    return True


lst = [4, 500, 1, 6, 30]
d = 2
print(no_pairs_differ_by_less_than_d(d, lst))
