value = 0


def getPrice():
    global value
    # Ask the user for their marks
    value = input(instruction)
    try:
        value = float(value)
        return value

    except:
        print("Invalid Input, Please retry")
        getPrice()


# Ask the user for the base price, weight, and distance
instruction = "How much is the base price? "
getPrice()
base_price = value
instruction = "What is the weight? "
getPrice()
weight = value
instruction = "What is the distance? "
getPrice()
distance = value

# Calculate the discount based on the distance
if distance < 250:
    discount = 0
elif distance < 500:
    discount = 0.1
elif distance < 1000:
    discount = 0.15
elif distance < 2000:
    discount = 0.2
elif distance < 3000:
    discount = 0.35
else:
    discount = 0.5

# Calculate the shipping cost
cost = base_price * weight * distance * (1 - discount)

# Print the shipping cost
print(f"The shipping cost is {cost:.2f}")


# Base price: 0.35; Weight: 350.5; Distance: 734.5