
longest_string = ""

while True:
    string = input("Enter a string: ")
    if string.startswith("A"):
        break
    if len(string) > len(longest_string):
        longest_string = string

print("Longest was:", longest_string)
