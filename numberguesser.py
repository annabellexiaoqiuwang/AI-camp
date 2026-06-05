import random
user_input = input("Would you like to play a number guessing game? ")
if user_input == "Yes" or user_input == "yes":
    print("Let's play!")
    playing=True
else:
    print("Thank you for your time.")
    playing=False
while playing == True:
    number = int(random.randint(1, 100))
    user_input = input("Guess a number between 1 and 100: ")
    if int(user_input) == number:
        print("You guessed the number!")
        playing=False
        user_input = input("Play again? ")
        if user_input == "Yes" or user_input == "yes":
            print("Let's play!")
            playing=True 
        else:
            print("Thank you for your time.")
    elif int(user_input) < number:
        print("Too low!")
    elif int(user_input) > number:
        print("Too high!")