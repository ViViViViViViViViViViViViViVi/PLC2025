def listFunc(a, b):
    return [i for i in range(a, b + 1)]  


def applicatorFunc(inpFunc, a, b, s):
    numbers = inpFunc(a, b)  
    if s == 's':
        return sum(numbers)  
    elif s == 'a':
        return sum(numbers) / len(numbers)  
    else:
        return "Invalid option! Use 's' for sum or 'a' for average."


a = int(input("Enter the starting number (a): "))
b = int(input("Enter the ending number (b): "))
s = input("Enter 's' for sum or 'a' for average: ")


print("Result =", applicatorFunc(listFunc, a, b, s))
