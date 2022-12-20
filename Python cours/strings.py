#heredoc string
my_text = """Texte
multi-ligne
abc
foo
bar"""

print(my_text)

my_text1 = """Texte\nmulti-ligne\nabc\nfoo\nbar"""

print(my_text1)

my_number = 123
#interaction avec une f-string
my_text2 = f"Nombre = {my_number}"

print(my_text2)

my_text3 = f"""
Le nombre
est
{my_number}
foo
"""
print(my_text3)

# afficher des accolades dans une heredoc string 
my_text4 = f"""
{{
    foo
}}
{{bar}}
"""
print(my_text4)

my_number1 = 3.14
#Concaténation de chaînes de caractères
my_text5 = ("Le nombre PI est ") + str(my_number1) + "\nEt le nombre d'or est 1.618"
print(my_text5)

#tronquer un float dans une interpolation

my_number2 = 1/3
my_text6 = f"1/3 ~= {my_number2:.4f}"
print(my_text6)

my_text7 = f"1 + 1 = {1 + 1}"
print(my_text7)

def hello(name : str) -> None :
    if name == "Toto":
        print(f"Yo {name}")
    else:
        print(f"Salut {name}")

def hello1(name : str) -> None :
    """Cette fonction dit bonjour à quelqu'un

    name str indique le nom de la personne à saluer
    return None
    """
    print(f"Salut {name}")


hello('Toto')

my_text8 = "Lorem ipsum."

my_number3 = len(my_text8)
print(my_number3)

my_number4 = my_text8.find("ipsum")
print(my_number4)

my_list = my_text8.split()
print(my_list)
print(len(my_list))

print(my_text8[2])

# accès en lecture du 0 au 10ème caractère à la fin de la str
print(my_text8[0:10])

# accès en lecture du 10ème caractère à la fin de la str
print(my_text8[10:])
# accès en lecture par la fin de la str
print(my_text8[::-1])
# accès en lecture 1 caractère sur 2 de la str
print(my_text8[::2])