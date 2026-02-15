data = [("B", 22, 1), ("A", 12, 3), ("C", 14, 2)]
print(sorted(data, key=lambda x: x[1]))



#nums = [2, 4, 6, 8, 10, 12]
#tripled = list(map(lambda x: x * 3, [2, 4, 6, 8, 10, 12]))
#print(tripled)













#products = {
    "Apple": [12, 5, "2027-Jan-15"]
    #"peach": [25, 2, "2027-Jun-13"]
    #"Berry": [21, 25, "2027-Nov-15"]
    #"Potato": [54, 14, "2027-Aug-12"]
    #"Tomato": [24, 7, "2027-Feb-15"]
    #"Pumpkin": [2, 15, "2027-Oct-15"]
#}
#def no_restock(key):
    #return products[key][0] > 20
#new_products = filter(no_restock, products)
#print(list(new_products))











#def four_multiple(x):
#    return x % 4 == 0
#filtered = filter(four_multiple, nums)
#print(list(filtered))





#def operation(x):
#    return x + 5 
#result = map(operation, nums)
#print(list(result))