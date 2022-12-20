# exo 6.15
# Trouvez la chaîne de caractères la plus longue dans une liste.
# Affichez son index, sa valeur et sa longueur.

my_list = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']

# réponse 6.15
longest_string = max(my_list, key=lambda x: len(x))

print('Index:', my_list.index(longest_string))
print('Valeur:', longest_string)
print('Longueur', len(longest_string))
