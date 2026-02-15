password_data = [1234, 5522, 7777, 9921]
password = input ("enter your password: ")
password_found = False
for saved_password in password_data:
    if saved_password == password:
        password_found = True
        break
    if password_found:
        print("authorized")
    else:
        print("you entered wrong password")