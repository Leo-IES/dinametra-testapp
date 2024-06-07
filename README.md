# Dinametra Test App

Esta es una prueba tecnica para Dinametra, utilizando React + Typescript. En ella se desarrolla una aplicación web para la visualización datos sobre Asteroides obtenidos de la API de la NASA, los cuales son graficados gracias a la libreria ChartJS.


## Tecnologias Utilizadas

* ReactJS v18.2.0
* Jest v29.7.0
* React Testing Library v16.0.0
* Vite v5.2.0
* chart.js v4.4.3
* react-chartjs-2 v5.2.0
## Instalación y Configuración

Instalar con los siguientes comandos:

```bash
  git clone https://github.com/Leo-IES/dinametra-testapp.git
  cd dinametra-testapp
  npm install
  npm run dev
```
* No se requieren pasos extra.

    
## Ejecución de Pruebas Unitarias
Ejecutar con el comando:
```bash
  npm test
```
## Enfoque Adoptado

Me decante por trabajar con ReactJS + Typescript debido al alcance del proyecto, siendo una unica pagina apreciable, las capacidades de modularizacion y reutilizacion de componentes que ofrece React son adeacuadas. Siendo una libreria de facil escalabilidad da posibilidades de expansiones futuras sin mucha complicacion. Por el lado de Typescript me parece una gran opción al momento de un desarrollo más estructurado puesto que nos habilita el tipado de datos en Javascript, lo que nos ayuda a tener un control sobre los datos que son enviados y manejados desde nuestra aplicación.

Para los estilos de los componentes preferi utilizar CSS puro sin librerias externas para apreciar el control sobre esta tecnologia. Se penso en un estilo limpio y simple de Cards que se acomodaban segun la resolucion del dispositivo. Esto con el fin de ser intutivo y de facil entendimiento para cualquier usuario. Asi mismo cuenta con Tooltips y leyendas que sirven de Guia para poder apreciar correctamente los datos desplegados por la libreria de ChartJS, esta ultima siendo una libreria que nos brinda la posibilidad de mostrar graficas de forma ordenada y facil. La informacion desplegada fue la obtenida de la API libre de NASA API's.

## Suposiciones Realizadas

Me enfoque en hacer una aplicacion sencilla y muy intuitiva para el despligue rapido de informacion. Esta misma informacion puede ser filtrada por dos rasgos: "Por Nombre" y "Por Fecha". En el caso del "Filtro por Fecha" se hizo de la mano de las posibilidades que nos brinda la API al mandar una fecha espesifica y te retorna la informacion correspondiente. Por otro lado el "Filtro por Nombre" se hizo localmente de la mano de un proceso de Filter al Array de informacion obtenido. De tal forma que se demuestre el manejo de filtros en condiciones diferentes.

Las pruebas unitarias fueron realizadas principalmente en la MainPage debido a que era el flujo central del comportamiento de la aplicacion, a la vez que se enfocaron en probar el correcto despliegue de la informacion en la vista asi como el de los filtros.

## Capturas de Pantalla


