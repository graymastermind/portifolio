from prettytable import PrettyTable


class GoCardAccount:
    def __init__(self, initial_balance):
        self.balance = initial_balance
        self.transactions = {}
        self.next_id = 1
        self.add_transaction("Initial balance", initial_balance)

    def add_transaction(self, event, amount):
        self.transactions[self.next_id] = (event, amount, self.balance)
        self.next_id += 1

    def ride(self, fare):
        if fare > self.balance:
            print("Insufficient balance")
        else:
            self.balance -= fare
            self.add_transaction("Ride", fare)

    def top_up(self, amount):
        if amount <= 0:
            print("Top up amount must be positive")
        else:
            self.balance += amount
            self.add_transaction("Top up", amount)

    def get_balance(self):
        print("Balance = ${:.2f}".format(self.balance))

    def print_statement(self):
        print("Statement:")
        print("{:<15} {:<15} {:<15}".format("Event", "Amount ($)", "Balance ($)"))
        balance_str = 0.00
        for id, (event, amount, balance) in self.transactions.items():
            if event == "Initial balance":
                amount_str = ""
            else:
                amount_str = "{:.2f}".format(round(amount, 2))
            balance_str = "{:.2f}".format(round(balance, 2))
            print("{:<15} {:<15} {:<15}".format(event, amount_str, balance_str))
        event = "Final balance"
        amount_str = ""
        print("{:<15} {:<15} {:<15}".format(event, amount_str, balance_str))

def main():
    initial_balance = float(input("Creating account. Input initial balance: "))
    gocard = GoCardAccount(initial_balance)
    while True:
        command = input("? ")
        if command == "b":
            gocard.get_balance()
        elif command.startswith("r"):
            try:
                fare = float(command[2:])
                gocard.ride(fare)
            except ValueError:
                print("Bad command.")
        elif command.startswith("t"):
            try:
                amount = float(command[2:])
                gocard.top_up(amount)
            except ValueError:
                print("Bad command.")
        elif command == "q":
            gocard.print_statement()
            break
        else:
            print("Bad command.")


if __name__ == "__main__":
    main()
