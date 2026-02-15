def outer():
    x = 10
    def inner():
        print(x)
    inner()
outer()

x=5
def func():
    x = 20
    print(x)
func()
print(x)