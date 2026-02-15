def greeting(visitor, *guests, special):
    print("Welcome " + visitor)
    print("Hooray " + special)
    for guest in guests:
        print("Howday " + guest)
greeting("Zurabi", "Irakli", "Luka", "Dachi", special="Nika", celebrity="Mark Zuckerberg", Influencer="idk")
