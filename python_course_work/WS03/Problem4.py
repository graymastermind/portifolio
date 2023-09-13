# Defining the base wage and overtime rate
base_wage = 36.25
overtime_rate = 1.5 * base_wage

# Asking the user for the number of hours worked and cars sold
hours_worked = int(input("How many hours were worked? "))
cars_sold = int(input("Total number of cars sold for the week? "))

# Calculating the salary for the normal work week
if hours_worked <= 37:
    salary = hours_worked * base_wage
else:
    salary = 37 * base_wage

# Calculating the salary for overtime hours
if hours_worked > 37:
    overtime_hours = hours_worked - 37
    salary += overtime_hours * overtime_rate

# Calculating the bonus for selling more than 5 cars
if cars_sold > 5:
    bonus = (cars_sold - 5) * 200
    salary += bonus

# Print the total salary for the week
print(f"The salary is {salary:.2f}")


# ●	Hours worked: 25; Number of cars sold: 10
# ●	Hours worked: 40; Number of cars sold: 5
