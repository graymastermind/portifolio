
def execute_adder_script(filename):
    variables = {}  # dictionary to store variable values

    with open(filename) as f:
        lines = f.readlines()

    for line in lines:
        # splitting the line into words and remove any leading/trailing whitespace
        words = line.split()
        words = [word.strip() for word in words]

        # handling each command based on the first word
        if words[0] == "input":
            if len(words) != 2 or not words[1].isalpha():
                print("Syntax error in script.")
                return
            else:
                val = input(f"Enter a value for {words[1]}: ")
                variables[words[1]] = val
        elif words[0] == "print":
            if len(words) != 2:
                print("Syntax error in script.")
                return
            elif words[1].isalpha():
                if words[1] in variables:
                    print(f"{words[1]} equals {variables[words[1]]}")
                else:
                    print(f"{words[1]} is undefined")
            elif words[1].isdigit():
                print(words[1])
            else:
                print("Syntax error in script.")
                return
        else:
            try:
                if words[1] == "gets":
                    if len(words) != 3 or not words[0].isalpha() or not (words[2].isalpha() or words[2].isdigit()):
                        print("Syntax error in script.")
                        return
                    elif words[2].isalpha() and words[2] not in variables:
                        print(f"{words[2]} is undefined in script")
                        return
                    else:
                        if words[2].isalpha():
                            val = variables[words[2]]
                        else:
                            val = int(words[2])
                        variables[words[0]] = val

                elif words[1] == "adds":
                    if len(words) != 3 or not words[0].isalpha() or not (words[2].isalpha() or words[2].isdigit()):
                        print("Syntax error in script.")
                        return
                    elif words[0] not in variables:
                        print(f"{words[0]} is undefined in script")
                        return
                    else:
                        if words[2].isalpha():
                            if words[2] not in variables:
                                print(f"{words[2]} is undefined in script")
                                return
                            val = variables[words[2]]
                        elif words[2].isdigit():
                            val = int(words[2])
                        else:
                            print("Syntax error in script.")
                            return
                        variables[words[0]] = int(variables[words[0]]) + int(val)

                else:
                    print("Syntax error in script.")
                    return

            except Exception as e:
                return

    print("Script execution completed.")


filename = input("Script name: ")
execute_adder_script(filename)
