const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    describe('Operaciones básicas', () => {
        test('debe sumar dos números correctamente', () => {
            expect(calculadora.sumar(2, 3)).toBe(5);
            expect(calculadora.sumar(-1, 1)).toBe(0);
            expect(calculadora.sumar(0, 0)).toBe(0);
            expect(calculadora.sumar(3.5, 2.5)).toBe(6);
        });

        test('debe restar dos números correctamente', () => {
            expect(calculadora.restar(5, 3)).toBe(2);
            expect(calculadora.restar(1, 1)).toBe(0);
            expect(calculadora.restar(0, 5)).toBe(-5);
            expect(calculadora.restar(10.5, 2.5)).toBe(8);
        });

        test('debe multiplicar dos números correctamente', () => {
            expect(calculadora.multiplicar(2, 3)).toBe(6);
            expect(calculadora.multiplicar(-2, 3)).toBe(-6);
            expect(calculadora.multiplicar(0, 5)).toBe(0);
            expect(calculadora.multiplicar(2.5, 4)).toBe(10);
        });

        test('debe dividir dos números correctamente', () => {
            expect(calculadora.dividir(6, 2)).toBe(3);
            expect(calculadora.dividir(10, 3)).toBeCloseTo(3.3333333333333335);
            expect(calculadora.dividir(-6, 2)).toBe(-3);
            expect(calculadora.dividir(7.5, 2.5)).toBe(3);
        });
    });

    describe('Operaciones avanzadas', () => {
        test('debe calcular potencias correctamente', () => {
            expect(calculadora.potencia(2, 3)).toBe(8);
            expect(calculadora.potencia(5, 0)).toBe(1);
            expect(calculadora.potencia(3, 2)).toBe(9);
            expect(calculadora.potencia(2, -1)).toBe(0.5);
        });

        test('debe calcular raíz cuadrada correctamente', () => {
            expect(calculadora.raizCuadrada(4)).toBe(2);
            expect(calculadora.raizCuadrada(9)).toBe(3);
            expect(calculadora.raizCuadrada(0)).toBe(0);
            expect(calculadora.raizCuadrada(16)).toBe(4);
        });
    });

    describe('Manejo de errores', () => {
        test('debe lanzar error al dividir por cero', () => {
            expect(() => {
                calculadora.dividir(5, 0);
            }).toThrow('No se puede dividir por cero');
        });

        test('debe lanzar error al calcular raíz cuadrada de número negativo', () => {
            expect(() => {
                calculadora.raizCuadrada(-4);
            }).toThrow('No se puede calcular la raíz cuadrada de un número negativo');
        });

        test('debe lanzar error con parámetros no numéricos', () => {
            expect(() => {
                calculadora.sumar('a', 5);
            }).toThrow('Los parámetros deben ser números válidos');

            expect(() => {
                calculadora.restar(5, 'b');
            }).toThrow('Los parámetros deben ser números válidos');

            expect(() => {
                calculadora.multiplicar(NaN, 5);
            }).toThrow('Los parámetros deben ser números válidos');

            expect(() => {
                calculadora.dividir(5, undefined);
            }).toThrow('Los parámetros deben ser números válidos');
        });

        test('debe lanzar error con parámetros null', () => {
            expect(() => {
                calculadora.sumar(null, 5);
            }).toThrow('Los parámetros deben ser números válidos');
        });
    });

    describe('Historial de operaciones', () => {
        test('debe agregar operaciones al historial', () => {
            calculadora.sumar(2, 3);
            calculadora.restar(5, 1);
            
            const historial = calculadora.obtenerHistorial();
            expect(historial).toHaveLength(2);
            expect(historial[0].operacion).toBe('2 + 3 = 5');
            expect(historial[1].operacion).toBe('5 - 1 = 4');
        });

        test('debe obtener el último resultado', () => {
            calculadora.sumar(1, 2);
            calculadora.multiplicar(3, 4);
            
            expect(calculadora.obtenerUltimoResultado()).toBe('3 * 4 = 12');
        });

        test('debe retornar null si no hay historial', () => {
            expect(calculadora.obtenerUltimoResultado()).toBeNull();
        });

        test('debe limpiar el historial', () => {
            calculadora.sumar(1, 2);
            calculadora.restar(3, 1);
            
            expect(calculadora.obtenerHistorial()).toHaveLength(2);
            
            calculadora.limpiarHistorial();
            
            expect(calculadora.obtenerHistorial()).toHaveLength(0);
            expect(calculadora.obtenerUltimoResultado()).toBeNull();
        });

        test('debe incluir timestamp en el historial', () => {
            calculadora.sumar(1, 1);
            
            const historial = calculadora.obtenerHistorial();
            expect(historial[0]).toHaveProperty('timestamp');
            expect(historial[0].timestamp).toBeDefined();
        });
    });

    describe('Casos edge', () => {
        test('debe manejar números muy grandes', () => {
            const resultado = calculadora.sumar(Number.MAX_SAFE_INTEGER, 1);
            expect(typeof resultado).toBe('number');
        });

        test('debe manejar números muy pequeños', () => {
            const resultado = calculadora.multiplicar(0.1, 0.1);
            expect(resultado).toBeCloseTo(0.01);
        });

        test('debe manejar infinito', () => {
            expect(() => {
                calculadora.sumar(Infinity, 5);
            }).toThrow('Los parámetros deben ser números válidos');
        });

        test('debe manejar -Infinity', () => {
            expect(() => {
                calculadora.sumar(-Infinity, 5);
            }).toThrow('Los parámetros deben ser números válidos');
        });
    });

    describe('Precisión decimal', () => {
        test('debe manejar operaciones con decimales correctamente', () => {
            expect(calculadora.sumar(0.1, 0.2)).toBeCloseTo(0.3);
            expect(calculadora.restar(0.3, 0.1)).toBeCloseTo(0.2);
            expect(calculadora.multiplicar(0.1, 0.1)).toBeCloseTo(0.01);
        });
    });
});
