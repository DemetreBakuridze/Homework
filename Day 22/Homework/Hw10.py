word = input("Enter a word: ")

if word == word[::-1]:
    print("This is a special word (palindrome)")
else:
    print("This is a normal word")