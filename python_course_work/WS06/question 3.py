def happyQa(s):
    for i in range(len(s)):
        if s[i] == 'g':
            if i > 0 and s[i - 1] == 'g':
                continue
            elif i < len(s) - 1 and s[i + 1] == 'g':
                continue
            else:
                return False
    return True


string = input("String: ")
print("Happy?", happyQa(string))
