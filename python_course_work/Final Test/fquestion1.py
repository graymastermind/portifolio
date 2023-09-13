class BankAccount:
    def __init__(self, account_holder, initial_balance):
        self.account_holder = account_holder
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return amount
        else:
            amount_withdrawn = self.balance
            self.balance = 0
            return amount_withdrawn


def create_account(account_holder, initial_balance):
    return BankAccount(account_holder, initial_balance)


def deposit(account, amount):
    account.deposit(amount)


def withdraw(account, amount):
    return account.withdraw(amount)


account = create_account("Paul Samuelson", 100.00)
deposit(account, 50.00)
amount_withdrawn = withdraw(account, 70.00)
print("Amount withdrawn:", amount_withdrawn)
