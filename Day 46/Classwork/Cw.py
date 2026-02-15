events = ["WW1", "WW2", "Cold War"]
index = int (input())
try:
    print(events[index])
except IndexError:
    print("Given index isn't available in the list")
else:
    print("Event successfully found")
finally:
    print("Code block of finally, Will execute regradless")
