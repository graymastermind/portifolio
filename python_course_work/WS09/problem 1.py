def adder_repl():
    variables = {}  # dictionary to store variable values

    print("Welcome to the Adder REPL.")
    while True:
        command = input("??? ")  # prompt user for command

        # splitting the command into words and remove any leading/trailing whitespace
        words = command.split()
        words = [word.strip() for word in words]

        # handling each command based on the first word
        if words[0] == "quit":
            print("Goodbye.")
            break
        elif words[0] == "input":
            if len(words) != 2 or not words[1].isalpha():
                print("Syntax error.")
            else:
                val = input(f"Enter a value for {words[1]}: ")
                variables[words[1]] = val
        elif words[0] == "print":
            if len(words) != 2:
                print("Syntax error.")
            elif words[1].isalpha():
                if words[1] in variables:
                    print(f"{words[1]} equals {variables[words[1]]}")
                else:
                    print(f"{words[1]} is undefined")
            elif words[1].isdigit():
                print(words[1])
            else:
                print("Syntax error.")
        else:
            try:
                if words[1] == "gets":
                    if len(words) != 3 or not words[0].isalpha() or not (words[2].isalpha() or words[2].isdigit()):
                        print("Syntax error.")
                    elif words[2].isalpha() and words[2] not in variables:
                        print(f"{words[2]} is undefined")
                    else:
                        if words[2].isalpha():
                            val = variables[words[2]]
                        else:
                            val = int(words[2])
                        variables[words[0]] = val

                elif words[1] == "adds":
                    if len(words) != 3 or not words[0].isalpha() or not (words[2].isalpha() or words[2].isdigit()):
                        print("Syntax error.")
                    elif words[0] not in variables:
                        print(f"{words[0]} is undefined")
                    else:
                        if words[2].isalpha():
                            if words[2] not in variables:
                                print(f"{words[2]} is undefined")
                                continue
                            val = variables[words[2]]
                        elif words[2].isdigit():
                            val = int(words[2])
                        else:
                            print("Syntax error.")
                            continue
                        variables[words[0]] += int(val)

                else:
                    print("Syntax error.")

            except:
                print("Different error.")


adder_repl()
