marks = 0


def getMark():
    global marks
    # Ask the user for their marks
    marks = input("How many marks? ")
    try:
        marks = float(marks)
        return marks

    except:
        print("Invalid Input, Please retry")
        getMark()


getMark()

# Determine the grade based on the marks
if marks >= 85:
    grade = 7
elif marks >= 75:
    grade = 6
elif marks >= 65:
    grade = 5
elif marks >= 50:
    grade = 4
else:
    grade = "F"

# Print the grade
print(f"Grade awarded: {grade}")
