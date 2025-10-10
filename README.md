# Calculadora en JavaScript

Una calculadora básica implementada en JavaScript con operaciones matemáticas fundamentales y un sistema completo de tests unitarios.

## Características

- ✅ Operaciones básicas: suma, resta, multiplicación, división
- ✅ Operaciones avanzadas: potencia y raíz cuadrada
- ✅ Validación de entrada y manejo de errores
- ✅ Historial de operaciones con timestamps
- ✅ Estadísticas de uso
- ✅ Tests unitarios completos con Jest
- ✅ Cobertura de código

## Instalación

1. Clona o descarga este proyecto
2. Instala las dependencias:

```bash
npm install
```

## Uso

### Ejecutar el programa principal

```bash
npm start
```

Esto ejecutará una serie de ejemplos que demuestran todas las funcionalidades de la calculadora.

### Ejecutar los tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con cobertura
npm run test:coverage
```

## Estructura del proyecto

```
├── calculadora.js          # Clase principal de la calculadora
├── programa.js             # Programa principal que usa la calculadora
├── calculadora.test.js     # Tests para la clase Calculadora
├── programa.test.js        # Tests para el programa principal
├── package.json           # Configuración del proyecto y dependencias
└── README.md              # Este archivo
```

## API de la Calculadora

### Métodos principales

- `sumar(a, b)` - Suma dos números
- `restar(a, b)` - Resta dos números
- `multiplicar(a, b)` - Multiplica dos números
- `dividir(a, b)` - Divide dos números
- `potencia(base, exponente)` - Calcula la potencia
- `raizCuadrada(numero)` - Calcula la raíz cuadrada

### Métodos de historial

- `obtenerHistorial()` - Obtiene el historial completo
- `obtenerUltimoResultado()` - Obtiene la última operación
- `limpiarHistorial()` - Limpia el historial

### Validaciones

La calculadora incluye validaciones para:
- Parámetros no numéricos
- División por cero
- Raíz cuadrada de números negativos
- Valores infinitos o NaN

## Ejemplos de uso

```javascript
const Calculadora = require('./calculadora');

const calc = new Calculadora();

// Operaciones básicas
console.log(calc.sumar(5, 3));        // 8
console.log(calc.restar(10, 4));       // 6
console.log(calc.multiplicar(6, 7));  // 42
console.log(calc.dividir(15, 3));     // 5

// Operaciones avanzadas
console.log(calc.potencia(2, 8));     // 256
console.log(calc.raizCuadrada(64));   // 8

// Manejo de errores
try {
    calc.dividir(10, 0);
} catch (error) {
    console.log(error.message); // "No se puede dividir por cero"
}

// Historial
console.log(calc.obtenerHistorial());
```

## Tests

El proyecto incluye tests completos que cubren:

- ✅ Todas las operaciones matemáticas
- ✅ Casos edge y valores límite
- ✅ Manejo de errores
- ✅ Funcionalidad del historial
- ✅ Validaciones de entrada
- ✅ Precisión decimal

### Ejecutar tests específicos

```bash
# Solo tests de la calculadora
npm test calculadora.test.js

# Solo tests del programa
npm test programa.test.js
```

## Tecnologías utilizadas

- **JavaScript (ES6+)**
- **Jest** - Framework de testing
- **Node.js** - Entorno de ejecución

## Licencia

MIT
