from collections.abc import Callable
import my_library
import random

def addition(a:float, b:float) -> float:
    result = a + b
    return result

result = addition(2, 3)
print(result)

def calculer(calcul1: Callable, calcul2: Callable, a, b, c) -> float:
    result = calcul1(a, b)
    result = calcul2(result, c)

    return result

result = calculer(addition, addition, 122, 42, 3.14)
print(result)


def randint_list(lower_value, higher_value, count):
    numbers = []
    for i in range(0,count):
        number = random.randint(lower_value, higher_value)
        numbers.append(number)

    return numbers

my_list = randint_list(0, 100, 10)
print(my_list)

my_list = my_library.randint_list(0, 100, 10)
print(my_list)

# écrire une fonction qui accepte une liste et qui renvoie la moyenne des nombres de la liste

def average(lower_value, higher_value, count):
    numbers = randint_list(lower_value, higher_value, count) 
    total = 0
    count = 0
    for number in numbers:
        if type(number) != int or type(number) is float:
            total += number
            count += 1
    result = total / len(numbers)
    return result

print(average(0, 100, 20))