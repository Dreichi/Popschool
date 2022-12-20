

counter = 1

 # while counter != 10:
#    print(f"{counter = }")
 #   counter += 1

for i in range(0,10):
    print(f'{i = }')

fruits = ['abricot', 'baie', 'cerise']

for foo in fruits:
    print(foo)

for i, foo in enumerate(fruits):
    print(f'{i}: {foo}')

for counter in range(0,10,2):
    print(f'{counter = }')

for counter in range(10, 0, -1):
    print('foo')
    print(f'{counter = }')

print(reversed(fruits))
print(fruits[::-1])

for foo in reversed(fruits):
    print(foo)

for foo in fruits[::-1]:
    print(foo) 

my_list = [123,2,42,3.14,56, 2]
my_number = 2
counter = 0

for item in my_list:
    if item == 2:
        counter += 1
        print(item)
        print(f'{counter =}')

accumulateur = 0

for item in my_list:
    accumulateur += item
print(f'{accumulateur = }')

for fruit in fruits:
    print(fruit)

fruits = ['abricot', 'baie', 'cerise']

for i in range(0, len(fruits), 2):
    print(fruits[i])

my_array = [['a', 'c'], ['b', 'd']]

for i in range(0,len(my_array)):
    for j in range(0,len(my_array[i])):
        print(i,j, my_array[i][j])