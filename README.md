
# Apuntes de la segunda semana de Back-End Fundamentals con NojeJS

## Bases de datos - Martes



Las Bases de datos se definen como un conjunto de tablas y herramientas que nos sirven para trabajar con ellas


## Evidencias
#### Creando un nuevo schema para poder empezar a crear las tablas con sus respectivos datos

![App Screenshot](https://lh5.googleusercontent.com/p2tUYD742_9CFA3SSUOsoMso0ofYTvTGNtn2SCZyxXRJj2Wi99QPQRlAps-oage6_EbCAaeC0BKd9Q=w888-h891-rw)

#### Acá creamos la tabla de usuarios, y como se puede ver la tabla tiene diferentes valores por ejemplo un id que es la primary key, fecha de nacimiento con tipo de dato DATE

![App Screenshot](https://lh5.googleusercontent.com/4g7Ihw6v4flO-TD_6IBi6ApnpfMSpksB8Ze-gTLqiaonX_ej1lLt0UrknAzUkMel799z8H2Y93tYng=w888-h891)

#### Como se puede ver usando la manera grafica es mucho mas facil y MySQL Workbench te da el codigo para hacerlo desde la consola y te arrojará esto: 

![App Screenshot](https://lh3.googleusercontent.com/YlPUq-wYWEYTUL44oXUW8BdeYdL2X4gye6xLvXqRraJecN7fDw3Jl5G5c9Gzl1STibYNY3Ge2-P7Cw=w888-h891-rw)

#### 
###
#### 

```sql
CREATE TABLE `Back-end-Fundamentals`.`users` (
  `idusers` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `birthdate` DATE NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

```

##### Le damos Apply y se creará nuestra primera tabla
#### 



![App Screenshot](https://lh3.googleusercontent.com/GrM5ltmlYd9AVAhOMjofTlQBqi9oWTPg2XJS7YOkrng0kuQhJ6gRBbmHT-LzrywyagkXXqJPl8CiSQ=w888-h891)




# 
 
  
   


#### 
#### 
#### 

## Comandos básicos SQL

#### 
#### 

#### Insertar datos a una tabla

Es posible escribir la declaración `INSERT INTO` de dos maneras:

- Especificando tanto los nombres de las columnas como los valores que se insertarán:
#### Sintaxis
```sql
INSERT INTO nombre_de_tabla (columna1, columna2, columna3, ...)
VALUES (valor1, valor2, valor3, ...);
```

##

- Si está agregando valores para todas las columnas de la tabla, no necesita especificar los nombres de las columnas en la consulta SQL. Sin embargo, asegúrese de que el orden de los valores sea el mismo que el de las columnas de la tabla. Aquí, la sintaxis `INSERT INTO` sería la siguiente
#### Sintaxis

```sql
INSERT INTO nombre_de_tabla
VALUES (value1, value2, value3, ...);
```

### Ejemplo

Ahora voy a crear un usuario en mi tabla que creé anteriormente:
##### 
![App Screenshot](https://lh3.googleusercontent.com/zt75sLm_LTNfK3_Z58gNcgWqelRV0o1oE0e2j7ofp3Nk1LaR9GckwLocVp4JExxUAQDKMhdlGCYKDg=w1782-h891)



Al escribir ese comando nuestra tabla debería lucir así:

| id | name     | birthdate                | email |
| :-------- | :------- | :------------------------- | :-: |
| `1` | desiree | 09-06-2001 | desireapgames@gmail.com |

Para ver esto en nuestro MySQL Workbench deberiamos seguir con el siguiente comando

#### Seleccionar datos de una tabla

##### La instrucción `SELECT` se utiliza para seleccionar datos de una base de datos.
#### 
##### Los datos devueltos se almacenan en una tabla de resultados, llamada conjunto de resultados
#### Sintaxis

```sql
SELECT * FROM nombre_de_tabla;
```

### Ejemplo 

Para traer los datos mediante el siguiente comando ` SELECT * FROM users; ` y efectivamente MySQL Workbench nos mostrará la tabla con los respectivos datos
#### 


![App Screenshot](https://lh3.googleusercontent.com/RDDxzrjdN2R1_Lbl3P1atqo8fRJiRWnrSLZe0wp7QyZYoKMZyaxtMWu0Fjl3SmOidcjmgLDp8fCf3g=w888-h891-rw)

#### Editar datos de una tabla
####

La instrucción `UPDATE` se usa para modificar los registros existentes en una tabla

#### Sintaxis

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

> **Nota: ¡Tenga cuidado al actualizar registros en una tabla!** Observe la existencia de la cláusula `WHERE` en la instrucción `UPDATE`. La cláusula `WHERE` especifica qué registros deben actualizarse. Si omite la cláusula `WHERE`, **¡se actualizarán todos los registros de la tabla!**




#### 
#### Borrar datos de una tabla 

La declaración `DELETE` se usa para eliminar registros existentes en una tabla

#### Sintaxis

```sql
DELETE FROM table_name WHERE condition;
```
> **Nota: ¡Tenga cuidado al borrar registros en una tabla!** Observe la existencia de la cláusula `WHERE` en la instrucción `DELETE`. La cláusula `WHERE` especifica qué registros deben actualizarse. Si omite la cláusula `WHERE`, **¡se borrarán TODOS los registros de la tabla!**

### Ejemplo

Acá podemos ver un simple CRUD con la tabla Compras

#### 

#### Crear
En este caso como se puede ver se crearon dos registros de compra para un mismo cliente
![App Screenshot]()

#### Consultar

![App Screenshot]()

#### Actualizar

![App Screenshot]()

Ahora se verá asi nuestra tabla

![App Screenshot]()
#### Borrar

![App Screenshot]()

Ahora se verá así nuestra tabla

![App Screenshot]()




## Referencias



[Tzuzul Code](https://dashboard.tzuzulcode.com/home/)

[W3 Schools](https://www.w3schools.com/sql/default.asp)

