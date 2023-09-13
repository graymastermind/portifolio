while True:

    try:
        n = int(input("Enter a positive number: "))
        if n > 0:
            break
        else:
            print("Invalid Input, Please retry")

    except:
        print("Invalid Input, Please retry")

# Printing the upper half of the diamond
for i in range(1, n + 1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)

# Printing the lower half of the diamond
for i in range(n - 1, 0, -1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)
