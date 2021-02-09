# bank-accounts-assignment

# VERY IMPORTANT
After you download this app, make sure you run **npm install** FIRST in your local machine to install the dependencies before you run any docker commands.

The BankAccount class should have a balance. When a new BankAccount instance is created, if an amount is given, the balance of the account should initially be set to that amount; otherwise, the balance should start at $0.

The User class is associated with the BankAccount class. When a new User instance is created, a new instance of BankAccount should also be created. Store the BankAccount instance as account attribute in User class.

**You must write the test first, have it failed, then write the necessary code for it to pass​.**

Run **npm test** command in a separate shell to see all your test output.

# Required Features:

1. User should be able to create multiple accounts. User has to specify which account they are withdrawing or depositing to. 
2. User should be able to deposit to his/her BankAccount
3. User should be able to withdraw from his/her BankAccount if there are sufficient funds; if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
4. User should be able to see his/her remaining balance. It should print it to the console: eg. "Balance: $100"

# Reminders:

1. Write a single test first (for example for #1), see the test fail, write the code for the test to pass, see the test pass.
2. Then proceed to the other features.

# Instructions

1. Treat these classes like Models in an MVC application. You will need to put these files in the /models folder and just require these classes in your test file.
2. Make sure you work on this assignment in a docker container. The necessarily files to build and run this app in a docker container is already provided.
3. Once done, you need to zip your app in one file and upload the zipped file in Hacker Hero.
