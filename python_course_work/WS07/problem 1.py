source_file = input("Source file name: ")
target_file = input("Target file name: ")

with open(source_file, "r") as f1, open(target_file, "w") as f2:
    lines = f1.readlines()
    empty_lines = 0
    for line in lines:
        if line.strip() != "":
            f2.write(line)
        else:
            empty_lines += 1

print("Lines removed: ", empty_lines)