while True:

    try:
        num = int(input("Enter a positive number: "))
        break

    except:
        print("Invalid Input, Please retry")

temp = num

rev = 0
while temp > 0:
    rev = rev * 10 + temp % 10
    temp = temp // 10

if num == rev:
    print(num, "is a palindrome")
else:
    print(num, "is not a palindrome")
