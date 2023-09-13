
time = 0.0
num = 0.0


def getTime():
    global time
    time = input(instruction)
    global num
    try:
        num = float(time)
        return num

    except:
        print("Invalid Input, Please retry")
        getTime()


instruction = "Number of hours worked per day: "
hours = getTime()
hours = num
instruction = "Number of days worked in a week: "
days = getTime()
days = num
instruction = "Annual salary: "
annual = getTime()
annual = num
total_hours = float(hours) * float(days) * 52
hourly = float(annual) / total_hours
print("Hourly wage = ", hourly)
