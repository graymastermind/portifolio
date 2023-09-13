while True:
    string = input("Enter a string: ")
    if not string:
        break
    words = string.lower().split()
    sorted_words = sorted(words, reverse=True)
    print(' '.join(sorted_words))

