import random

numbers = []

for _ in range(5):
    numbers.append(random.randint(1, 50))

print(numbers)
print(min(numbers))
print(max(numbers))