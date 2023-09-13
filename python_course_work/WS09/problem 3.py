
import re
import math


def calculate_distance(coordinates):
    total_distance = 0.0
    prev_x, prev_y = None, None

    for coordinate in coordinates:
        if not re.match(r'^[A-Z]\d+$', coordinate):
            print("Bad reference:", coordinate)
            exit()

        x = ord(coordinate[0]) - ord('A')
        y = int(coordinate[1:])

        if prev_x is not None and prev_y is not None:
            distance = math.sqrt((x - prev_x) ** 2 + (y - prev_y) ** 2) * 0.5
            total_distance += distance

        prev_x, prev_y = x, y

    return round(total_distance, 1)


input_line = input("Enter trip map references: ")
coordinates = input_line.split()

total_distance = calculate_distance(coordinates)
print("Total distance = {} km".format(total_distance))

