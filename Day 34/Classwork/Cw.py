Name = ("Demetre", "Luka", "Irakli", "Nika")
def manual_index(sequence, target):
    for index in range(len(sequence)):
        if sequence[index] == target:
            return index
        
    return -1

print(manual_index(Name, "Demetre"))