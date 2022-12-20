# exo 6.14
# Créez une deuxième liste nommée `new_list` ne contenant que les nombres entiers de la liste

my_list = [2.71, 42, 123, 2, 3.14, 1.61]

# réponse 6.14
prime = []
def is_prime(n):
  for i in range(2,n):
    if (n%i) == 0:
      return False
  return True
print(prime)