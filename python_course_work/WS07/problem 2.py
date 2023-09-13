filename = input("File name: ")

with open(filename, "r") as f:
    lines = f.readlines()
    print("Output:")
    print(lines[0])
    print(lines[1])
    print(lines[-2])
    print(lines[-1])