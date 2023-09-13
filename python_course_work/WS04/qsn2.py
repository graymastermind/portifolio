while True:

    try:
        n = int(input("Enter a positive number: "))
        break

    except:
        print("Invalid Input, Please retry")


# Initialize the first two Fibonacci numbers
fib1, fib2 = 0, 1

# Print the first two Fibonacci numbers
print(fib1, fib2, end=" ")

# Generate and print the next n-2 Fibonacci numbers
for i in range(2, n):
    fib3 = fib1 + fib2
    print(fib3, end=" ")

    # Update the values of fib1 and fib2 for the next iteration
    fib1 = fib2
    fib2 = fib3

    # Start a new row of output after every 4 numbers
    if (i+1) % 4 == 0:
        print()