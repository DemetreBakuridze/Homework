start = int(input("Enter start number: "))
end = int(input("Enter end number: "))

if end < start:
    print("Invalid range")
else:
    total = 0
    for i in range(start, end + 1):
        print(i)
        total += i
    print("Sum:", total)