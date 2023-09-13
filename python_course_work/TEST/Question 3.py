
a = int(input("a: "))
b = int(input("b: "))
c = int(input("c: "))

if a >= b and a >= c:
    largest = a
    if b <= c:
        smallest = b
    else:
        smallest = c
elif b >= a and b >= c:
    largest = b
    if a <= c:
        smallest = a
    else:
        smallest = c
else:
    largest = c
    if a <= b:
        smallest = a
    else:
        smallest = b

if largest * smallest > 100:
    print("Output: ")
    print(True)
else:
    print("Output: ")
    print(False)