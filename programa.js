const Calculadora = require('./calculadora');

/**
 * Programa principal que demuestra el uso de la calculadora
 */
class ProgramaCalculadora {
    constructor() {
        this.calculadora = new Calculadora();
    }

    /**
     * Ejecuta una serie de operaciones de ejemplo
     */
    ejecutarEjemplos() {
        console.log('=== CALCULADORA - OPERACIONES DE EJEMPLO ===\n');

        try {
            // Operaciones básicas
            console.log('1. Operaciones básicas:');
            console.log(`   5 + 3 = ${this.calculadora.sumar(5, 3)}`);
            console.log(`   10 - 4 = ${this.calculadora.restar(10, 4)}`);
            console.log(`   6 * 7 = ${this.calculadora.multiplicar(6, 7)}`);
            console.log(`   15 / 3 = ${this.calculadora.dividir(15, 3)}`);

            console.log('\n2. Operaciones avanzadas:');
            console.log(`   2^8 = ${this.calculadora.potencia(2, 8)}`);
            console.log(`   √64 = ${this.calculadora.raizCuadrada(64)}`);

            console.log('\n3. Operaciones con decimales:');
            console.log(`   3.14 + 2.86 = ${this.calculadora.sumar(3.14, 2.86)}`);
            console.log(`   10.5 * 2 = ${this.calculadora.multiplicar(10.5, 2)}`);

            console.log('\n4. Manejo de errores:');
            try {
                this.calculadora.dividir(10, 0);
            } catch (error) {
                console.log(`   Error al dividir por cero: ${error.message}`);
            }

            try {
                this.calculadora.raizCuadrada(-4);
            } catch (error) {
                console.log(`   Error con raíz cuadrada negativa: ${error.message}`);
            }

            try {
                this.calculadora.sumar('a', 5);
            } catch (error) {
                console.log(`   Error con parámetros inválidos: ${error.message}`);
            }

        } catch (error) {
            console.error('Error inesperado:', error.message);
        }

        this.mostrarHistorial();
    }

    /**
     * Muestra el historial de operaciones
     */
    mostrarHistorial() {
        console.log('\n=== HISTORIAL DE OPERACIONES ===');
        const historial = this.calculadora.obtenerHistorial();
        
        if (historial.length === 0) {
            console.log('No hay operaciones en el historial.');
            return;
        }

        historial.forEach((item, index) => {
            const fecha = new Date(item.timestamp).toLocaleString();
            console.log(`${index + 1}. ${item.operacion} (${fecha})`);
        });

        console.log(`\nTotal de operaciones: ${historial.length}`);
        console.log(`Última operación: ${this.calculadora.obtenerUltimoResultado()}`);
    }

    /**
     * Calculadora interactiva simple
     */
    calcularInteractivo(operacion, a, b) {
        try {
            let resultado;
            
            switch (operacion.toLowerCase()) {
                case 'sumar':
                case '+':
                    resultado = this.calculadora.sumar(a, b);
                    break;
                case 'restar':
                case '-':
                    resultado = this.calculadora.restar(a, b);
                    break;
                case 'multiplicar':
                case '*':
                    resultado = this.calculadora.multiplicar(a, b);
                    break;
                case 'dividir':
                case '/':
                    resultado = this.calculadora.dividir(a, b);
                    break;
                case 'potencia':
                case '^':
                    resultado = this.calculadora.potencia(a, b);
                    break;
                case 'raiz':
                case 'sqrt':
                    resultado = this.calculadora.raizCuadrada(a);
                    break;
                default:
                    throw new Error('Operación no válida');
            }

            console.log(`Resultado: ${resultado}`);
            return resultado;
        } catch (error) {
            console.error(`Error: ${error.message}`);
            return null;
        }
    }

    /**
     * Limpia el historial
     */
    limpiarHistorial() {
        this.calculadora.limpiarHistorial();
        console.log('Historial limpiado.');
    }

    /**
     * Obtiene estadísticas del historial
     */
    obtenerEstadisticas() {
        const historial = this.calculadora.obtenerHistorial();
        
        if (historial.length === 0) {
            console.log('No hay datos para mostrar estadísticas.');
            return;
        }

        const operaciones = historial.map(item => item.operacion);
        const sumaCount = operaciones.filter(op => op.includes('+')).length;
        const restaCount = operaciones.filter(op => op.includes('-')).length;
        const multiplicacionCount = operaciones.filter(op => op.includes('*')).length;
        const divisionCount = operaciones.filter(op => op.includes('/')).length;
        const potenciaCount = operaciones.filter(op => op.includes('^')).length;
        const raizCount = operaciones.filter(op => op.includes('√')).length;

        console.log('\n=== ESTADÍSTICAS ===');
        console.log(`Total de operaciones: ${historial.length}`);
        console.log(`Sumas: ${sumaCount}`);
        console.log(`Restas: ${restaCount}`);
        console.log(`Multiplicaciones: ${multiplicacionCount}`);
        console.log(`Divisiones: ${divisionCount}`);
        console.log(`Potencias: ${potenciaCount}`);
        console.log(`Raíces cuadradas: ${raizCount}`);
    }
}

// Ejecutar el programa si se llama directamente
if (require.main === module) {
    const programa = new ProgramaCalculadora();
    programa.ejecutarEjemplos();
    programa.obtenerEstadisticas();
}

module.exports = ProgramaCalculadora;
