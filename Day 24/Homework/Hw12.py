import random

numbers = []

for _ in range(5):
    numbers.append(random.randint(1, 50))

print(len(numbers))
print(sum(numbers))