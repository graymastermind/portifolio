
filename = input("File name: ")

with open(filename, "r") as f:
    content = f.read()
    num_chars = len(content)
    num_words = len(content.split())
    num_lines = content.count("\n") + 1
    print(f"Characters: {num_chars}")
    print(f"Words: {num_words}")
    print(f"Lines: {num_lines}")