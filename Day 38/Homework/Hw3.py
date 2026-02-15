numbers = [1, 4, 7, 10, 13, 16, 19]
new_list = []
for n in numbers:
    if n % 2 != 0:
        new_list.append(n * 2)
print(new_list)