from math import floor

numberOfHalls = 0.0
num = 0.0


def getNumOfHalls():
    global numberOfHalls
    numberOfHalls = input("How many " + hallType + " exam halls? ")
    global num
    try:
        num = float(numberOfHalls)
        return num

    except:
        print("Invalid Input, Please retry")
        getNumOfHalls()


hallType = "big"
big = getNumOfHalls()
big = num
hallType = "small"
small = getNumOfHalls()
small = num
total_students = big * 45 + small * 22
num_classes = floor(total_students / 25)
print("Number of classes = ", num_classes)


