import math


while True:
    dimension1 = float(input("Enter room dimension 1 (m): "))
    dimension2 = float(input("Enter room dimension 2 (m): "))
    if dimension1 == 0:
        break
    if dimension2 == 0:
        break

    length = max(dimension1, dimension2)
    width = min(dimension1, dimension2)

    print(f"Length of room = {length:.3f} m")
    print(f"Width of room = {width:.3f} m")

    carpet_length_lengthways = math.ceil(math.ceil(width/3.66)*length)
    carpet_length_widthways = math.ceil(math.ceil(length / 3.66) * width)

    print(f"Total carpet length required in lengthways manner = {carpet_length_lengthways} m")
    print(f"Total carpet length required in widthways manner = {carpet_length_widthways} m")