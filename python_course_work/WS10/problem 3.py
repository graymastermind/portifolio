class GoCardAccount:
    def __init__(self, initial_balance):
        self.balance = initial_balance
        self.transactions = [("Initial balance", initial_balance)]

    def record_ride(self, amount):
        if amount <= 0:
            print("Invalid ride amount.")
        else:
            self.balance -= amount
            self.transactions.append(("Ride", amount))

    def record_topup(self, amount):
        if amount <= 0:
            print("Invalid top-up amount.")
        else:
            self.balance += amount
            self.transactions.append(("Top-up", amount))

    def get_balance(self):
        return self.balance

    def print_statement(self):
        print("Statement:")
        print("{:<15s}{:<12s}{:<12s}".format("event", "amount ($)", "balance ($)"))
        for transaction in self.transactions:
            print("{:<15s}${:<11.2f}${:<11.2f}".format(transaction[0], transaction[1], self.balance))
            self.balance -= transaction[1]
        print("{:<15s}${:<11.2f}".format("Final balance", self.balance))


# Create a new Go Card account with an initial balance of $100
account = GoCardAccount(100)

# Record a ride costing $3.50
account.record_ride(3.50)

# Record a ride costing $10.90
account.record_ride(10.90)

# Record a top-up of $20
account.record_topup(20)

# Print the current balance
print("Balance = ${:.2f}".format(account.get_balance()))

# Print a statement of all transactions
account.print_statement()