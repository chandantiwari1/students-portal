def getMode():
    while True:
        mode = input("Do you want to encrypt or decrypt or brute force a message?: ").lower()
        if mode in 'encrypt e decrypt d brute b'.split():
            return mode
        else:
            print("Enter either 'encrypt' or 'e' or 'decrypt' or 'd' or 'brute' or 'b': ")

def getMessage():
    print("Enter your message: ")
    return input()

def getKey():
    key = 0
    while True:
        key = int(input("Enter the key number(1-26): "))
        if key >= 1 and key <= 26: 
            return key

def getTranslatedMessage(mode, message, key):
    if mode[0] == 'd':
        key = -key
    translated = ""

    for symbol in message:
        if symbol.isalpha():
            num = ord(symbol)
            num += key

            if symbol.isupper():
                if num > ord('Z'):
                    num -= 26
                elif num < ord('A'):
                    num += 26
            elif symbol.islower():
                if num > ord('z'):
                    num -= 26
                elif num < ord('a'):
                    num += 26

            translated += chr(num)
        else:
            translated += symbol
    return translated

mode = getMode()
message = getMessage()
if mode[0] != 'b':
    key = getKey()

print("Your translated text is: ")
if mode[0] != 'b':
    print(getTranslatedMessage(mode, message, key))
else:
    for key in range (1, 27):
        print(key, ")", getTranslatedMessage('decrypt', message, key))