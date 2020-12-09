# MantVehi

Bienvenidos, este es el proyecto de fin de curso del curso formativo DAM, de Robert Marian Amariutei.

## Entorno de desarrollo

Para el instalar el entorno de desarrollo, se ha dispuesto un script que compilará el front y el back a la vez y se actualizará cada vez que haya un cambio.

Para instalar las librerias de node [FRONT]:
```bash
npm install
```
Para instalar las librerias de node [BACK]:
```bash
cd API
npm install
```

Para ejecutar la aplicación en entorno de desarrollo:
```bash
npm run dev
```


## Entorno de producción

Si se quiere pasar el proyecto al entorno de produccion se deben compilar tanto el Front como el Back.

Compilación [FRONT]:
```bash
ng build
```
Para instalar las librerias de node [BACK]:
```bash
cd API
npm run tsc
```

Tambien hay que instalar la base de datos, el fichero SQL se incluirá en este repositorio.
```bash
mysql -u username -p database_name < file.sql
```


Nota¹: Para que el backend se conecte con la base de datos, hay que actualizar en el fichero ormconfig.json los datos de la conexion.

Nota²: El codigo generado con al compilar se mete en una carpeta llamada dist, tanto en el front como en el back 


## Memoria del proyecto
En el siguiente enlace se encuentra la memoria del proyecto en formato pdf

[Memoria mantvehi](https://go.robert9191.com/memoria-mantvehi)


## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
