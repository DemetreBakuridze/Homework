def manual_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count