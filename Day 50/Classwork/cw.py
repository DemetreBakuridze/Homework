def greet():
    return "Welcome"
def goodbye():
    return "Goodbye"
def higher_order(func):
    return func(func)
print(higher_order(greet()))
print(higher_order(goodbye()))