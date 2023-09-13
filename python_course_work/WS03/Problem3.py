# Ask the user for three integers
num1 = int(input("Integer 1? "))
num2 = int(input("Integer 2? "))
num3 = int(input("Integer 3? "))

# Determine the descending order of the integers
if num1 >= num2 and num1 >= num3:
    largest = num1
    if num2 >= num3:
        middle = num2
        smallest = num3
    else:
        middle = num3
        smallest = num2
elif num2 >= num1 and num2 >= num3:
    largest = num2
    if num1 >= num3:
        middle = num1
        smallest = num3
    else:
        middle = num3
        smallest = num1
else:
    largest = num3
    if num1 >= num2:
        middle = num1
        smallest = num2
    else:
        middle = num2
        smallest = num1

# Print the integers in descending order
print(f"Sorted: {largest} {middle} {smallest}")

# ●	Integer 1: 35; Integer 2: 21: Integer 3: 28
# ●	Integer 1: 25; Integer 2: 33: Integer 3: 43

