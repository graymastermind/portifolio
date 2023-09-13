import re

variables = {}  # Dictionary to store variable values


def execute_statement(statement):
    global variables

    # Pattern matching to identify different statements
    quit_pattern = re.compile(r'^quit$')
    input_pattern = re.compile(r'^input\s+([a-zA-Z]+)$')
    print_pattern = re.compile(r'^print\s+(.+)$')
    assignment_pattern = re.compile(r'^([a-zA-Z]+)\s+gets\s+(.+)$')
    addition_pattern = re.compile(r'^([a-zA-Z]+)\s+adds\s+(.+)$')

    if quit_pattern.match(statement):
        print("Goodbye.")
        exit()

    elif input_match := input_pattern.match(statement):
        variable_name = input_match.group(1)
        value = input(f"Enter a value for {variable_name}: ")
        variables[variable_name] = value

    elif print_match := print_pattern.match(statement):
        value = print_match.group(1)
        if value in variables:
            print(f"{value} equals {variables[value]}")
        else:
            print(value)

    elif assignment_match := assignment_pattern.match(statement):
        variable_name = assignment_match.group(1)
        value = assignment_match.group(2)
        variables[variable_name] = value

    elif addition_match := addition_pattern.match(statement):
        variable_name = addition_match.group(1)
        value = addition_match.group(2)
        if variable_name in variables:
            if value in variables:
                variables[variable_name] = str(int(variables[variable_name]) + int(variables[value]))
            else:
                if value.isdigit():
                    variables[variable_name] = str(int(variables[variable_name]) + int(value))
                else:
                    print(f"Error: Invalid operation. Cannot add string '{value}' to {variable_name}.")
        else:
            print(f"Error: Variable {variable_name} is undefined.")

    else:
        print("Syntax error.")


# Adder REPL loop
print("Welcome to the Adder REPL.")
while True:
    statement = input("??? ")
    execute_statement(statement)
