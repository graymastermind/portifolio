filename = input("File name: ")

with open(filename, "r") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        numbers = line.split()
        total = sum(map(float, numbers))
        average = total / len(numbers)
        print(f"The average of line {i+1} is {average:.2f}")