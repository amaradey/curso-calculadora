/**
 * Clase Calculadora que implementa operaciones matemáticas básicas
 */
class Calculadora {
    constructor() {
        this.historial = [];
    }

    /**
     * Suma dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} Resultado de la suma
     */
    sumar(a, b) {
        this.validarEntrada(a, b);
        const resultado = a + b;
        this.agregarAlHistorial(`${a} + ${b} = ${resultado}`);
        return resultado;
    }

    /**
     * Resta dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} Resultado de la resta
     */
    restar(a, b) {
        this.validarEntrada(a, b);
        const resultado = a - b;
        this.agregarAlHistorial(`${a} - ${b} = ${resultado}`);
        return resultado;
    }

    /**
     * Multiplica dos números
     * @param {number} a - Primer número
     * @param {number} b - Segundo número
     * @returns {number} Resultado de la multiplicación
     */
    multiplicar(a, b) {
        this.validarEntrada(a, b);
        const resultado = a * b;
        this.agregarAlHistorial(`${a} * ${b} = ${resultado}`);
        return resultado;
    }

    /**
     * Divide dos números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number} Resultado de la división
     * @throws {Error} Si el divisor es cero
     */
    dividir(a, b) {
        this.validarEntrada(a, b);
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        const resultado = a / b;
        this.agregarAlHistorial(`${a} / ${b} = ${resultado}`);
        return resultado;
    }

    /**
     * Calcula la potencia de un número
     * @param {number} base - Base
     * @param {number} exponente - Exponente
     * @returns {number} Resultado de la potencia
     */
    potencia(base, exponente) {
        this.validarEntrada(base, exponente);
        const resultado = Math.pow(base, exponente);
        this.agregarAlHistorial(`${base}^${exponente} = ${resultado}`);
        return resultado;
    }

    /**
     * Calcula la raíz cuadrada de un número
     * @param {number} numero - Número
     * @returns {number} Raíz cuadrada
     * @throws {Error} Si el número es negativo
     */
    raizCuadrada(numero) {
        this.validarEntrada(numero);
        if (numero < 0) {
            throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
        }
        const resultado = Math.sqrt(numero);
        this.agregarAlHistorial(`√${numero} = ${resultado}`);
        return resultado;
    }

    /**
     * Valida que los parámetros sean números válidos
     * @param {...number} numeros - Números a validar
     * @throws {Error} Si algún parámetro no es un número válido
     */
    validarEntrada(...numeros) {
        for (const numero of numeros) {
            if (typeof numero !== 'number' || isNaN(numero)) {
                throw new Error('Los parámetros deben ser números válidos');
            }
        }
    }

    /**
     * Agrega una operación al historial
     * @param {string} operacion - Descripción de la operación
     */
    agregarAlHistorial(operacion) {
        this.historial.push({
            operacion,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Obtiene el historial de operaciones
     * @returns {Array} Historial de operaciones
     */
    obtenerHistorial() {
        return this.historial;
    }

    /**
     * Limpia el historial de operaciones
     */
    limpiarHistorial() {
        this.historial = [];
    }

    /**
     * Obtiene el último resultado del historial
     * @returns {string|null} Última operación realizada
     */
    obtenerUltimoResultado() {
        if (this.historial.length === 0) {
            return null;
        }
        return this.historial[this.historial.length - 1].operacion;
    }
}

module.exports = Calculadora;
