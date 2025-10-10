const ProgramaCalculadora = require('./programa');

describe('ProgramaCalculadora', () => {
    let programa;

    beforeEach(() => {
        programa = new ProgramaCalculadora();
    });

    describe('Constructor', () => {
        test('debe inicializar con una nueva calculadora', () => {
            expect(programa.calculadora).toBeDefined();
            expect(programa.calculadora.obtenerHistorial()).toHaveLength(0);
        });
    });

    describe('calcularInteractivo', () => {
        test('debe ejecutar suma correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('sumar', 5, 3);
            
            expect(resultado).toBe(8);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 8');
            
            consoleSpy.mockRestore();
        });

        test('debe ejecutar resta correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('restar', 10, 4);
            
            expect(resultado).toBe(6);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 6');
            
            consoleSpy.mockRestore();
        });

        test('debe ejecutar multiplicación correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('multiplicar', 6, 7);
            
            expect(resultado).toBe(42);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 42');
            
            consoleSpy.mockRestore();
        });

        test('debe ejecutar división correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('dividir', 15, 3);
            
            expect(resultado).toBe(5);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 5');
            
            consoleSpy.mockRestore();
        });

        test('debe ejecutar potencia correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('potencia', 2, 8);
            
            expect(resultado).toBe(256);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 256');
            
            consoleSpy.mockRestore();
        });

        test('debe ejecutar raíz cuadrada correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            const resultado = programa.calcularInteractivo('raiz', 64);
            
            expect(resultado).toBe(8);
            expect(consoleSpy).toHaveBeenCalledWith('Resultado: 8');
            
            consoleSpy.mockRestore();
        });

        test('debe manejar operaciones con símbolos', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            expect(programa.calcularInteractivo('+', 2, 3)).toBe(5);
            expect(programa.calcularInteractivo('-', 5, 2)).toBe(3);
            expect(programa.calcularInteractivo('*', 4, 3)).toBe(12);
            expect(programa.calcularInteractivo('/', 12, 3)).toBe(4);
            expect(programa.calcularInteractivo('^', 3, 2)).toBe(9);
            expect(programa.calcularInteractivo('sqrt', 25)).toBe(5);
            
            consoleSpy.mockRestore();
        });

        test('debe manejar errores correctamente', () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
            
            const resultado = programa.calcularInteractivo('dividir', 5, 0);
            
            expect(resultado).toBeNull();
            expect(consoleSpy).toHaveBeenCalledWith('Error: No se puede dividir por cero');
            
            consoleSpy.mockRestore();
        });

        test('debe manejar operaciones no válidas', () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
            
            const resultado = programa.calcularInteractivo('operacion_invalida', 5, 3);
            
            expect(resultado).toBeNull();
            expect(consoleSpy).toHaveBeenCalledWith('Error: Operación no válida');
            
            consoleSpy.mockRestore();
        });
    });

    describe('limpiarHistorial', () => {
        test('debe limpiar el historial y mostrar mensaje', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            // Agregar algunas operaciones
            programa.calculadora.sumar(1, 2);
            programa.calculadora.restar(3, 1);
            
            expect(programa.calculadora.obtenerHistorial()).toHaveLength(2);
            
            programa.limpiarHistorial();
            
            expect(programa.calculadora.obtenerHistorial()).toHaveLength(0);
            expect(consoleSpy).toHaveBeenCalledWith('Historial limpiado.');
            
            consoleSpy.mockRestore();
        });
    });

    describe('obtenerEstadisticas', () => {
        test('debe mostrar estadísticas correctas', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            // Realizar diferentes tipos de operaciones
            programa.calculadora.sumar(1, 2);
            programa.calculadora.sumar(3, 4);
            programa.calculadora.restar(5, 1);
            programa.calculadora.multiplicar(2, 3);
            programa.calculadora.dividir(6, 2);
            programa.calculadora.potencia(2, 3);
            programa.calculadora.raizCuadrada(9);
            
            programa.obtenerEstadisticas();
            
            expect(consoleSpy).toHaveBeenCalledWith('\n=== ESTADÍSTICAS ===');
            expect(consoleSpy).toHaveBeenCalledWith('Total de operaciones: 7');
            expect(consoleSpy).toHaveBeenCalledWith('Sumas: 2');
            expect(consoleSpy).toHaveBeenCalledWith('Restas: 1');
            expect(consoleSpy).toHaveBeenCalledWith('Multiplicaciones: 1');
            expect(consoleSpy).toHaveBeenCalledWith('Divisiones: 1');
            expect(consoleSpy).toHaveBeenCalledWith('Potencias: 1');
            expect(consoleSpy).toHaveBeenCalledWith('Raíces cuadradas: 1');
            
            consoleSpy.mockRestore();
        });

        test('debe mostrar mensaje cuando no hay historial', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            programa.obtenerEstadisticas();
            
            expect(consoleSpy).toHaveBeenCalledWith('No hay datos para mostrar estadísticas.');
            
            consoleSpy.mockRestore();
        });
    });

    describe('mostrarHistorial', () => {
        test('debe mostrar historial vacío', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            programa.mostrarHistorial();
            
            expect(consoleSpy).toHaveBeenCalledWith('\n=== HISTORIAL DE OPERACIONES ===');
            expect(consoleSpy).toHaveBeenCalledWith('No hay operaciones en el historial.');
            
            consoleSpy.mockRestore();
        });

        test('debe mostrar historial con operaciones', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            
            programa.calculadora.sumar(1, 2);
            programa.calculadora.restar(5, 3);
            
            programa.mostrarHistorial();
            
            expect(consoleSpy).toHaveBeenCalledWith('\n=== HISTORIAL DE OPERACIONES ===');
            expect(consoleSpy).toHaveBeenCalledWith('1. 1 + 2 = 3');
            expect(consoleSpy).toHaveBeenCalledWith('2. 5 - 3 = 2');
            expect(consoleSpy).toHaveBeenCalledWith('\nTotal de operaciones: 2');
            expect(consoleSpy).toHaveBeenCalledWith('Última operación: 5 - 3 = 2');
            
            consoleSpy.mockRestore();
        });
    });
});
