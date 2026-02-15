person = {
    "username": "Demetre",
    "hobby": "sport",
    "weight": "62",
    "height": 172,
    "is16yearsold": True,
}

person.clear()
print(person)

person.update({"hobby": "basketball", "age": 20})
print(person)

print(person.get("username"))
print(person.get("salary"))

print(person.kets())

print(person.values())

print(person.items())

person_copy = person.copy()
print(id(person))
print(id(person_copy))

last_item = person.popitem()
print(last_item)
print(person)

removed_value = person.pop("weight")
print(removed_value)
print(person)