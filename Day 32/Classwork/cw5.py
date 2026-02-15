def find_all(array, n):
    positions = []

    for index in range(len(array)):
        index_element = array[index]
        if index_element == n:
            positions.append(index)
    return positions