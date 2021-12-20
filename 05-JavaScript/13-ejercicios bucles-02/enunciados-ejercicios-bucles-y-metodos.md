### **Métodos Arrays y Math 01.**

Escribe un programa que pida un número mayor que 1 y que devuelva si el número es primo o no. 

<small>Un número es primo si **SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1**</small>

---

### **Métodos Arrays y Math 02.**

Crea 3 arrays:

* El primero tendrá 5 números. 
* El segundo se llamará ==pares== y el tercero ==impares==.  Ambos estarán vacíos.
* Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10:
  * Si el resultado es par, guarda ese número en el array de pares y si es impar en el otro.
* Mostrar por consola:
  * La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
  * El array de pares e impares.

---

### **Métodos Arrays y Math 03.**

Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya escribiendo.

* Imprime el array por consola. 

Cuando acabe, suma el total de todos los números.

* Imprime en consola la suma total, la raíz cuadrada del total y también éste último pero redondeado al alta.

---

### **Métodos Arrays y Math 04.**

Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos incluidos).

Luego elimina del array todos los números pares y en lugar de ellos ponemos el string `"los impares molan"`.

---

### **Métodos Arrays y Math 05.**

Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.

Elimina todas las vocales de la frase y imprime la nueva frase por consola.

---

### **Métodos Arrays y Math 06.**

Haz un programa que pida el número de DNI sin letra. Lo que hará el programa es devolver el mismo número con la letra que debería tener.

* Revisar que el número no pueda ser negativo ni tener más de 8 dígitos.

* Te doy un array de letras:

```javascript
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
```

* La posición de la letra que deberás añadir al DNI es la del resultado del MÓDULO del número de DNI introducido entre 23.