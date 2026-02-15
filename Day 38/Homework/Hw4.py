words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']
long_words = []
for w in words:
    if len(w) > 5:
        long_words.append(w)
print(long_words)