mixed = [2, 5, 8, 11, 14, 17, 20]

evens = [n for n in mixed if n % 2 == 0]
odds = [n for n in mixed if n % 2 != 0]

print(evens)
print(odds)