count = 0

while True:

    try:
        num = int(input("Enter a number: "))

    except:
        print("Invalid Input, Please retry")

    try:
        if num == 0:
            break

        if num > 0:
            count += 1

    except:
        count = count


print(count, " positive numbers were entered.")
