Manejos desde consola

## Para ejecutar aplicativo

- npx cypress open

## para ejecutar todos los test desde consola

- node_modules\.bin\cypress run

## para ejecucion del navegador

- npx cypress run --headed

## Ejeucucion de pruebas desde navegador

- npx cypress run --browser chrome

## para definir una ruta especifica

- npx cypress run --spec "cypress\integration\section_2\Assert.js"

## ejecucion de la seccion 1 por ejemplo

- npx cypress run --spec "cypress\integration\section_1\*"

{
"viewportWidth": 1500,
"viewportHeight": 900,
"chromeWebSecurity": false
}

## sninppets

- c\_ y seleccionar las opciones: se debe copiar el elemento para que tome las opciones

## cucumber implementation

- install: npm install @badeball/cypress-cucumber-preprocessor

## commands for delete the cypress caché

- npx cypress cache clear
- rm -rf node_modules package-lock.json
- npm install

## author

- gcuadrado
