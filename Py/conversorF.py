def conversor_dolares(tipo_pesos, valor_dolar):
    pesos = input("¿Cuántos pesos " + tipo_pesos + " tienes?: ")
    pesos = float(pesos)
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")
# def conversor_pesos(tipo_pesos,valor_pesos):
#     dolares = input("¿Cuántos dolares tienes?: ")
#     dolares = float(dolares)
#     pesos = dolares * valor_pesos
#     pesos = round(pesos, 2)
#     pesos = str(pesos)
#     print("Tienes $" + pesos + " pesos "+ tipo_pesos)
# def menu_selec():
menu = """
    Elige la moneda:

    1-Pesos Mexicanos
    2-Pesos Colombianos
    3-Pesos Argentinos

Elige una opción: 

"""
opcion = int(input(menu))
    # return eleccion


# menu = """
# Bienvenido al conversor de monedas multipais

# 1-De Pesos a Dolares
# 2-De Dolares a Pesos

# Elige una opción: 

#"""
if opcion == 1:
        conversor_dolares("mexicanos", 24)
elif opcion == 2: #pesos colombianos
        conversor_dolares("colombianos", 3875)
elif opcion == 3: #pesos argentinos
        conversor_dolares("argentinos", 285)
else:  #el usuario escribió algo diferente
        print('Escribe una opción correcta: ')