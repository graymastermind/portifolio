file_name = input("Enter the name of the file to read: ")
word_to_count = "for"

with open(file_name, "r") as file:
    count = 0
    for line in file:
        words = line.split()
        for word in words:
            if word == word_to_count:
                count += 1
    print(f"The word '{word_to_count}' appears {count} times in the file.")
