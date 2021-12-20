### **Bucles 01.**

Crea un bucle que imprima por consola la lista de números del 1 al 30, incrementándose de 3 en 3.

```javascript
// 3
// 6
// 9
// ...
```

---

### **Bucles 02.**

Utiliza un bucle `for` para imprimir por la consola la tabla de multiplicar del 8.

---

### **Bucles 03.**

Escribe un programa que saque una lista de números del 1 al 20 y que indique si el número es par o impar.

---

### **Bucles 04.**

Haz un programa que pida una frase al usuario. Utilizando un `for...of` imprimiremos el número total de letras "a" que haya en la frase.

---

### **Bucles 05.**

Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:

* Para los múltiplos de 3, muestra en pantalla la palabra "Fizz" en lugar del número.
* Para los números múltiplos de 5, muestra en pantalla la palabra "Buzz" en lugar del número.
* Para los múltiplos de 3 y 5, muestra en pantalla la palabra "FizzBuzz" en lugar del número.

---

### **Bucles 06.**

Complicando el ejercicio de ==Bucles 02.== Haz un programa que muestre las tablas del 1 al 10 todas seguidas.

---

### **Bucles 07.**

Escribe un programa que pida al usuario introducir un número entero mayor que 10, el cuadro de texto volverá a aparecer si el número es menor.

---

### **Bucles 08.**

Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.

---

### **Bucles 09.**

En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.

---

### **Bucles 10.**

Con un `while` construye y muestra por consola un "triángulo" de 7 líneas como el siguiente:

```javascript
*
**
***
****
*****
******
*******
```



---

### **Bucles 11.**

Con el `for of`, crea un array con cinco nombres de persona y recórrelo mostrando el texto "Conozco a alguien llamado..."

---

### **Bucles 12.**

Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:

```javascript
myList = [1,9,3,8,5,7];
```

---

### **Bucles 13.**

En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros.

---

### **Bucles 14. - ¡La guinda!**

Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100. 

* Se considera que cuando el usuario introduce un valor, éste es siempre válido. 
* Con cada intento del jugador, el programa le dice si el número secreto es mayor o menor. 
* El jugador tiene 6 intentos para adivinar el número.
* Para crear un número aleatorio real utilizamos este código:
  * `Math.floor((Math.random() * 100) + 1);`