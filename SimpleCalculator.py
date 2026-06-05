user_input=input("Number: " )
number1=int(user_input)
user_input=input("Number: " )
number2=int(user_input)
user67_input=input("Operator: " )
operator=str(user_input)
if operator == "+":
    print(number1 + number2)
elif operator == "-":
    print(number1 - number2)
elif operator == "*":
    print(number1 * number2)
elif operator == "/":
    print(number1 / number2)
else:
    print("Syntax error")