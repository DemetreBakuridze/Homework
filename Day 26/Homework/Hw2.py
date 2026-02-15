word = input("Enter a word: ")
print(word.upper())



countries = ["Georgia", "Armenia", "Greece", "Norway", "Denmark"]

for country in countries:
    print(country.upper())




word = input("Enter a word: ")
print(word.isupper())




sentence = input("Enter a sentence: ")
print(sentence.capitalize())





text = "gEoRGia"
print(text.capitalize())





words = ["georgia", "aRMENIA", "greeCE"]

for word in words:
    print(word.lower().capitalize())






word = input("Enter a word: ")
print(word.find("a"))






text = "I visited Georgia, Armenia and Greece"
print(text.find("Armenia"))






text = "Python is easy to learn"
word = input("Enter word to search: ")

pos = text.find(word)
if pos != -1:
    print(pos)
else:
    print("word not found")