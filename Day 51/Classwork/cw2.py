def mult(n):
    return lambda a: a * n
tripler = mult(3)
doubler = tripler(2)
print(doubler)