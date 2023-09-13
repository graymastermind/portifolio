
def convert_digits_to_underline(input_string):
    return ''.join(['_' if c.isdigit() else c for c in input_string])


string = input("Input a string? ")
converted_string = convert_digits_to_underline(string)
print("Output:", converted_string)

