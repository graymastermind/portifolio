year = 0
num = 0

def getYear():
    global year
    year = input(instruction)
    global num
    try:
        num = int(year)
        return num

    except:
        print("Invalid Input, Please retry")
        getYear()


def is_leap_year(year):
    # Check if a year is a leap year.
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)


def days_between_years(start_year, end_year):
    # Calculating the number of days between two years inclusive.
    days = 0
    for year in range(start_year, end_year + 1):
        if is_leap_year(year):
            days += 366
        else:
            days += 365
    return days

instruction = "Year 1? "
year1 = getYear()
year1 = num
instruction = "Year 2? "
year2 = getYear()
year2 = num

days = days_between_years(year1, year2)

print("Number of days:", days)
