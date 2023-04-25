import random

while True:
    choices = ["rock", "paper", "scissors"]
    computer = random.choice(choices)
    player = None

    while player not in choices: 
        player = input("rock, paper, or scissors?: ").lower()

    print("computer: "+computer)
    print("your: "+player)

    if computer==player:
        print("tie")
    elif player=="rock":
        if computer=="paper":
            print("you lose")
        if computer=="scissors":
            print("you win")
    elif player=="paper":
        if computer=="scissors":
            print("you lose")
        if computer=="rock":
            print("you win")
    elif player=="scissors":
        if computer=="rock":
            print("you lose")
        if computer=="paper":
            print("you win")

    replay = input("play again? (yes/no): ").lower()
    if replay!="yes":
        break
    
print("bye! have a good time ;)")