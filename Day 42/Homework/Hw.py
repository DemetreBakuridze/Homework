animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']
first_letters = []
for a in animals:
    first_letters.append(a[0])
print(first_letters)

e_words = []
for a in animals:
    if a.startswith("e"):
        e_words.append(a)
print(e_words)