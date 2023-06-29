menu = """
Bienvenido al conversor de monedas multipais

1-Pesos Mexicanos
2-Pesos Colombianos
3-Pesos Argentinos

Elige una opción: 

"""
opcion = int(input(menu))

if opcion == 1: #pesos mexicanos
	#pregunto al usuario la cantidad a convertir
	pesos = input('¿Cuántos pesos mexicanos tienes?: ')
	#convierto a float para mejor manejo de datos
	pesos = float(pesos)
	#escribo el valor del dolar en pesos mexicanos
	tipo_de_cambio = 24
elif opcion == 2: #pesos colombianos
	#pregunto al usuario la cantidad a convertir
	pesos = input('¿Cuántos pesos colombianos tienes?: ')
	#convierto a float para mejor manejo de datos
	pesos = float(pesos)
	#escribo el valor del dolar en pesos colombianos
	tipo_de_cambio = 3715.01
elif opcion == 3: #pesos argentinos
	#pregunto al usuario la cantidad a convertir
	pesos = input('¿Cuántos pesos argentinos tienes?: ')
	#convierto a float para mejor manejo de datos
	pesos = float(pesos)
	#escribo el valor del dolar en pesos argentinos
	tipo_de_cambio = 290
else:  #el usuario escribió algo diferente
	print('Escribe una opción correcta: ')


#hago la conversión
dolares = pesos / tipo_de_cambio
#redondeo los dólares a dos decimales
dolares = round(dolares, 2)
#convierto el float de dolares a un string
dolares = str(dolares)

#imprimo el valor de la conversion. Se pueden sumar (concatenar) strings con '+'
print('Tienes $' + dolares +' dólares')
# pesos = input("Indica la cantidad de pesos Argentinos: ")
# pesos = float (pesos)
# valor_dolar = 290
# dolares = pesos/valor_dolar
# dolares = round(dolares,2)
# dolares = str (dolares)
# print ("Tienes $ " +dolares+" Dolares")
