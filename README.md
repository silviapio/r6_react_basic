# Modulo R6 React I
Ejercicios resueltos con create-react-app, organizados en niveles (a cada nivel corresponde un branch y una pull request).

## Nivel 1: 
### Ejercicio 1:
Instalación e inicialización de create-react-app. En este caso no hay pull request (corresponde al branch master).
### Ejercicio 2: 
Visualizar "Hello World!" debajo del logo de React, a través del componente padre App y del componente hijo Salutacio. Ambos componentes son class-based.

## Nivel 2:
### Ejercicio 3: 
Visualizar "Hello Montse!" en lugar de "Hello World!". "Montse" es el valor de la variable name: esta variable se está pasando a Salutacio desde App, como props.

## Nivel 3:
### Ejercicio 4: 
Añadir un botón en el componente Salutacio (Click me!). Al hacer click (OnClick) se lanza el metodo handleClick del propio componente, que a su vez llama el metodo handleClick del componente padre App (pasado por props) con parametro la variable name (pasada también por props). El resultado es un alert con el texto "You look beautiful today, Montse!" ("Montse" es el valor de name). Se ha hecho de esta forma para poder usar la variable name en el texto del alert. Si todo el texto del alert hubiese sido 'hard-coded', se hubiera podido simplemente pasar como props a Salutacio el metodo handleClick de App.
### Ejercicio 5:
Añadir en Salutacio un contador, un botón Increment y un botón Decrement. El valor del contador se guarda en la propiedad count del state de App; está inicializado a 0 y se pasa a Salutacio como props. Al hacer click (OnClick) en los botones se lanzan los métodos, respectivamente, increment() y decrement() de App (pasados a Salutacio como props, handleIncrement y handleDecrement). Estos métodos llaman a setState() y cambian el count.

## Estilos:
Para no complicar el ejercicio, se han usado estilos en línea en el componente Salutacio.
