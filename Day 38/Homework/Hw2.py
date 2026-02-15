def modify_dict(d):
    d.update({'age': 14})
    d.popitem()
    print(d)

my_dict = {'name': 'Alice', 'city': 'Tbilisi'}
modify_dict(my_dict)