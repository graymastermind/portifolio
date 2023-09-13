input_list = [2, 4, 6, 5, 8, 10, 2, 4, 12]

hidden_pattern_count = 0
pattern_length = 0
for num in input_list:

    if num % 2 == 0:
        pattern_length += 1

    if num % 2 > 0:
        pattern_length = 0

    if pattern_length >= 3:
        hidden_pattern_count += 1

print(f"Output: {hidden_pattern_count}")
