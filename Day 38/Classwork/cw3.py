numbers = [54, 25, 24, 26, 63, 45, 16, 37]
evens = [num + 1 for num in numbers if num % 2 == 0]
print(evens)

name = [(i + 3) * 2 for i in range(1, 11)]
print(name)

name2 = [i for i in range(31) if i % 5 == 0]
print(name2)