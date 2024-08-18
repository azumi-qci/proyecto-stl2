# Seminario de Traductores de Lenguajes II

**Alumno:** Hernández Suárez Cesar Alejandro

**Profesor:** López Franco Michel Emanuel

## Tarea: Mini generador léxico

### Objetivo

Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera:

```js
identificadores = letra(letra|digito)*
real = entero.entero+
```

### Trabajo realizado

La base del programa fue hecha con TypeScript corriendo con el motor Node.js

La clase `LexicAnalyzer`, exportada del archivo `lexic-analyzer.ts` toma una cadena de texto y separa lo introduccido por *tokens* hasta que finaliza la línea.

