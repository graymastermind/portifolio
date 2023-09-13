import math

radius = 0
instruction = ""

def getRadius():
    global radius
    # Ask the user for their marks
    radius = input(instruction)
    try:
        radius = float(radius)
        return radius

    except:
        print("Invalid Input, Please retry")
        getRadius()


instruction = "Radius of the large circle: "
getRadius()
r1 = radius

instruction = "Radius of the small circle: "
getRadius()
r2 = radius

area1 = math.pi * r1 ** 2

area2 = math.pi * r2 ** 2

diff = area1 - area2

print("Difference between their areas: ", diff)