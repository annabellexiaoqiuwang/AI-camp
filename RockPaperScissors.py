rpsPlayer={
    "rock": 1,
    "paper": 2,
    "scissors": 3
}
rpsBot={
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}
user_input = input("Would you like to play Rock, Paper, Scissors? ")
if user_input == "Yes" or user_input == "yes": 
    print("Let's play!")
    playing=True
else:
    print("Thank you for your time.")
    playing=False
while playing == True:
    user_input = input("Rock, Paper, or Scissors? ")
    selection=rpsPlayer.get(str(user_input.lower()), 0)
    import random
    BotSelection=random.randint(1,3)
    print("Bot chose " + rpsBot[BotSelection])
    
    if selection == BotSelection:
        print("tie")
    elif selection == 1 and BotSelection == 3:
        print("You win!")
    elif selection == 2 and BotSelection == 1:
        print("You win!")
    elif selection == 3 and BotSelection == 2:
      print("You win!")
    elif selection == 1 and BotSelection == 2:
     print("You lose!")
    elif selection == 2 and BotSelection == 3:
        print("You lose!")
    elif selection == 3 and BotSelection == 1:
        print("You lose!")
    else:
        print("Invalid")
    user_input = input("Play again?")
    if user_input == "Yes" or user_input == "yes": 
        print("Let's play")
        playing=True
    else:
        print("Thank you for your time.")
        playing=False