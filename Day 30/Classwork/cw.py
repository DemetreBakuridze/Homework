my_tuple = (1, 2, 3, 2, 4, 2)
def manual_count(sequence, target):
    count = 0
    for item in sequence:
        if item in sequence:
            if item == target:
                count += 1
    return count
result = manual_count(my_tuple, 2)
print(result)