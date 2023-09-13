
from random import randint

randA = randint(0, 6)
randB = randint(7, 10000)

salary_chart = {
    (14, 15): 343.44,
    (16, 17): 457.92,
    (18, 19): 610.56,
    (20, randA): 686.88,
    (20, randB): 763.20,
    (20, None): 850.34
}


age = int(input("Age: "))
contract_length = input("Contract length: ")


if age == 20 and contract_length is None:
    weekly_salary = salary_chart[(20, None)]
elif age == 20 and contract_length == randA:
    weekly_salary = salary_chart[(20, randA)]
elif age == 20 and contract_length == randB:
    weekly_salary = salary_chart[(20, randB)]
else:
    for age_range, weekly_salary in salary_chart.items():
        if age_range[0] <= age <= age_range[1]:
            break

annual_salary = 52 * weekly_salary

print("Annual salary: ", annual_salary)
