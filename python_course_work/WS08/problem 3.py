def is_arithmetic_progression(lst):
    if len(lst) < 2:
        return True
    diff = lst[1] - lst[0]
    for i in range(2, len(lst)):
        if lst[i] - lst[i - 1] != diff:
            return False
    return True

file_name = input("File name: ")

# Read the input from a file
with open(file_name) as f:
    for line in f:
        lst = list(map(int, line.strip().split()))
        print("[", " ".join(str(x) for x in lst).replace(",", ""), "]", is_arithmetic_progression(lst))
