measurement = 0.0
num = 0.0


def getMeasurement():
    global measurement
    measurement = input(instruction)
    global num
    try:
        num = float(measurement)
        return num

    except:
        print("Invalid Input, Please retry")
        getMeasurement()


instruction = "Length of park (m): "
length = getMeasurement()
length = num
instruction = "Width of park (m): "
width = getMeasurement()
width = num
instruction = "Litres per square metre: "
litres_per_sm = getMeasurement()
litres_per_sm = num
volume = float(length) * float(width) * float(litres_per_sm)
print("Litres required = ", volume)
