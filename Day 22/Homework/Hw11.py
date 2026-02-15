words = ["apple", "banana", "cherry", "orange", "grape", "melon"]
reversed_words = words[::-1]

i = 0
for word in reversed_words:
    if i % 2 == 0:
        print(word)
    i += 1