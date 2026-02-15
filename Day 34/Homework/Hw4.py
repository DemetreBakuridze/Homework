def unique_elements(lst):
    for item in set(lst):
        print(f"{item} - {lst.count(item)}")
