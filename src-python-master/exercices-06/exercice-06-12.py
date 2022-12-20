# exo 6.12
# Comptez les nombres plus petits ou égaux à 10 dans la liste et affichez le résultat

my_list = [2.71, 42, 123, 2, 3.14, 1.61]

# réponse 6.12
result = len(list(filter(lambda x: x <= 10, my_list)))
print(result)