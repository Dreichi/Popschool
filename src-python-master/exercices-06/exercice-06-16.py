# exo 6.16
# Ici le but est d'intervertir les éléments de la liste deux à deux
# Liste initiale :
#
#   my_list = [2.71, 42, 123, 2, 3.14, 1.61]
#
# Résultat attendu :
#
#   my_list = [42, 2.71, 2, 123, 1.61, 3.14]

my_list = [2.71, 42, 123, 2, 3.14, 1.61]

# réponse 6.16
stock = [2.71, 42, 123, 2, 3.14, 1.61]
my_list[0] = stock[1]
my_list[1] = stock[0]
my_list[2] = stock[3]
my_list[3] = stock[2]
my_list[4] = stock[5]
my_list[5] = stock[4]

print(my_list)