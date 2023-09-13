
source_file_name = input("Enter the name of the source file: ")
target_file_name = input("Enter the name of the target file: ")

with open(source_file_name, "r") as source_file, open(target_file_name, "w") as target_file:
    for line in source_file:
        if not line[0].isdigit():
            target_file.write(line)

print("File copy complete.")
