<img style="height: 200px; margin-top: 20px; margin-bottom: 40px;" alt="imagen alusiva a un Spa" src="https://media.istockphoto.com/photos/beauty-treatment-items-for-spa-procedures-on-white-wooden-table-picture-id1286682876?k=20&m=1286682876&s=612x612&w=0&h=AvkfEEqLUv0tH22S2dZl_1dyIT1A-qHL-0ZOQw-PDkw=">

------------------------------------------
### PAGINA WEB D'Luchy Spa

------------------------------------------

#### Índice 📑
------------------------------------------
1. [Características 👨‍💻](#características-)
2. [Contenido del proyecto 📋](#contenido-del-proyecto-)
3. [Tecnologías 👾](#tecnologías-)
4. [IDE y Herramientas⚙️](#ide-%EF%B8%8F)
5. [Instalación 🛠️](#instalación-%EF%B8%8F)
6. [Demo 📲](#demo-)
7. [Autor(es) ✒️](#autores-%EF%B8%8F)
8. [Institución Académica 🏫](#institución-académica-)
9. [Referencias 📖](#referencias-)

------------------------------------------
#### Características 👨‍💻
- Página web diseñada para gestionar un spa: 
permite generar reservas, logearse y al administrador agregar y borrar servicios.

------------------------------------------
#### Contenido del proyecto 📋
|ARCHIVO|DESCRIPCIÓN|
|-----------|---------------|
|[modulos de node](node_modules)| Contiene las funciones que las aplicaciones externas pueden usar .|
|[main.hbs](/views/layoutsmain.hbs)| Contiene la estructura de todas las paginas del proyecto, ademas contiene los linkeos de los estilos y los scripts.|
|[partials](/views/partials)|Contiene los trozs de codigo que se reutilizaran, como el nav bar, footer y las alertas.|
|[routes](/routes)| Contiene las rutas de todas las pestañas que permite su concexion y funcionamiento con express y node.je .|
|[css](/css)| Contiene los diferentes estilos utilizados en el proyecto .|
|[img](/img)| Contiene las diferentes imagenes utilizados en el proyecto .|
|[js](/js)| Contiene las funciones extras necesarias para el funcionamiento de la pagina. .|
|[info](/views/info)| Contiene las pestañas que muestran informacion al usuario .|
|[booking](/views/booking)| Contiene la pestaña de registro .|
|[Auth](/views/auth)| Contiene las pestañas que necesitan autenticación (logearse / registrarse para funcionar) .|
|[lib](/lib)| Contiene las funciones necesarias para el funcionamiento de la pagina que necesitan el uso de express. .|
|[keys.js](keys.js)| Conecta la base de datos con heroku .|
|[index.js](index.js)| Configura el uso de express , sus modulos, rutas variables handelbars, etc .|
|[database.js](database.js)| Tiene configuraciones basicas de la base de datos y sus mensajes de error .|

------------------------------------------
#### Tecnologías 👾
- [![HTML5](https://img.shields.io/badge/HTML5-CSS-orange)](https://esdima.com/que-es-html-y-css/#:~:text=Uno%20de%20sus%20componentes%20m%C3%A1s,hacia%20su%20dise%C3%B1o%20y%20apariencia.)
- [![Node](https://img.shields.io/badge/Node-yellow)](https://nodejs.org/es/about/)
- [![JavaScript](https://img.shields.io/badge/JavaScript-yellow)](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [![Mysql](https://img.shields.io/badge/Mysql-Workbench-blue)](https://developer.mozilla.org/es/docs/Web/JavaScript)


------------------------------------------
#### IDE y Herramientas⚙️
###### El proyecto se desarrolla con las herramientas:
|   	NOMBRE|   	DESCRIPCIÓN|    ICONO|
|---	|---	|---   |
|   	[Visual Studio Code](https://visualstudio.microsoft.com/es/) | 	Microsoft Visual Studio es un entorno de desarrollo integrado (IDE, por sus siglas en inglés) para Windows y macOS. Es compatible con múltiples lenguajes de programación, tales como C++, C#, Visual Basic .NET, F#, Java, Python, Ruby y PHP, al igual que entornos de desarrollo web, como ASP.NET MVC, Django, etc., a lo cual hay que sumarle las nuevas capacidades en línea bajo Windows Azure en forma del editor Monaco. ([Wikipedia, 2021](https://es.wikipedia.org/wiki/Microsoft_Visual_Studio)) [Descargar](https://visualstudio.microsoft.com/es/)|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/125px-Visual_Studio_Icon_2019.svg.png" height="50px" alt="imagen Android Studio">| 
|   	[Boostrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) |  Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales. A diferencia de muchos frameworks web, solo se ocupa del desarrollo front-end. ([Wikipedia, 2021](https://es.wikipedia.org/wiki/Bootstrap_(framework))) [Descargar](https://getbootstrap.com/docs/4.0/getting-started/download/)|<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" height="50px" alt="imagen Boostrap">|
|     [Express](https://expressjs.com/es/) |  Express.js , o simplemente Express , es un frameWork web back-end para Node.js , lanzado como software gratuito y de código abierto bajo la licencia MIT . Está diseñado para crear aplicaciones web y API.  Se le ha llamado el estándar de facto marco servidor para Node.js.)) ([Wikipedia, 2021](https://en.wikipedia.org/wiki/Express.js)) [Descargar](https://expressjs.com/es/starter/installing.html)|<img src="https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png" height="50px" alt="imagen de Express">|
|     [Node.js](https://nodejs.org/es/) |  Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.)) ([Wikipedia, 2021](https://es.wikipedia.org/wiki/Node.js)) [Descargar](https://nodejs.org/es/download/)|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png" height="50px" alt="imagen de Node.js">|
|     [Heroku](https://www.heroku.com/) |  Heroku es una plataforma como servicio (PaaS) de computación en la Nube que soporta distintos lenguajes de programación.)) ([Wikipedia, 2021](https://es.wikipedia.org/wiki/Heroku)) [Descargar](https://devcenter.heroku.com/articles/heroku-cli)|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/245px-Heroku_logo.svg.png" height="50px" alt="imagen de Heroku">|
|     [Mysql](https://www.mysql.com/) |  MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo, y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web.)) ([Wikipedia, 2021](https://es.wikipedia.org/wiki/MySQL)) [Descargar](https://dev.mysql.com/downloads/workbench/)|<img src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png" height="50px" alt="imagen de Mysql">|

------------------------------------------
#### Instalación 🛠️
Mysql Workbench -> [descargar](https://dev.mysql.com/downloads/workbench/).
software necesario para el correcto funcionamiento de la base de datos.

Node.js -> [descargar](https://nodejs.org/es/download/).
software necesario para el correcto funcionamiento de la pagina.

```
1) Instalar Mysql y node.js.
2) Abrir el proyecto en el IDE de su preferencia (Se recomienda Visual Studio Code).
3) En caso de errores instalar las dependencias y hacer npm init en el terminal.
4) Ejecutar en el terminal "npm run dev" para correr la pagina en el servidor local.
5) En su navegador determinado escriba "localhost:3500" pues el puerto  por defecto es el 3500.
```

------------------------------------------
#### Demo 📲
De momento la pagina no se ha desplegado.

------------------------------------------
#### Autores ✒️
Proyecto desarrollado por:
- Carlos Eduardo Contreras Mendoza (**carloseduardocmen@ufps.efu.co**)
- Edinsson Alexis Montoya Cuadros (**edinssonalexismcua@ufps.edu.co**)
- Santiago Felipe Alferez Villamizar (**santiagofelipeavil@ufps.edu.co**)
- Ramiro Andres Jaimes Contreras (**ramiroandresjaco@ufps.edu.co**)
- Said Fernando Lopez Gonzales (**saidfernandolgon@ufps.edu.co**)
------------------------------------------
#### Institución Académica 🏫
Página web desarrollada para la materia de Programación Web del [Programa de Ingeniería de Sistemas](<https://ingsistemas.cloud.ufps.edu.co/>) de la [Universidad Francisco de Paula Santander](<https://ww2.ufps.edu.co/>).


------------------------------------------
#### Referencias 📖
###### Visual Studio Code. (2021). Wikipedia, La enciclopedia libre, desde https://es.wikipedia.org/wiki/Microsoft_Visual_Studio.
###### Booostrap. (2021). Wikipedia, La enciclopedia libre, desde https://es.wikipedia.org/wiki/Bootstrap_(framework).
###### Express. (2021). Wikipedia, La enciclopedia libre, desde https://en.wikipedia.org/wiki/Express.js.
###### Node.js. (2021). Wikipedia, La enciclopedia libre, desde https://es.wikipedia.org/wiki/Node.js.
###### Heroku (2021). Wikipedia, La enciclopedia libre, desde https://es.wikipedia.org/wiki/Heroku.
###### Mysql (2021). Wikipedia, La enciclopedia libre, desde https://es.wikipedia.org/wiki/MySQL.

------------------------------------------
