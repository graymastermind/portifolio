list1 = input("List 1: ")
list2 = input("List 2: ")

list1 = list(map(int, list1.split()))
list2 = list(map(int, list2.split()))

sum1 = list1[0] + list1[-1] if len(list1) > 1 else list1[0]
sum2 = list2[0] + list2[-1] if len(list2) > 1 else list2[0]

if sum1 > sum2:
    print("Output: ", sum1)
elif sum2 > sum1:
    print("Output: ", sum2)
else:
    print("Same")
