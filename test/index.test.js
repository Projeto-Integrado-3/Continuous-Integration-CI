const { soma, ehPar } = require('../src/index');

// Testes para função de soma
test('soma de números positivos', () => {
  expect(soma(2, 3)).toBe(5);
  expect(soma(10, 5)).toBe(15);
});

test('soma de números negativos', () => {
  expect(soma(-1, -2)).toBe(-3);
  expect(soma(-10, 5)).toBe(-5);
});

test('soma de zeros', () => {
  expect(soma(0, 0)).toBe(0);
  expect(soma(0, 100)).toBe(100);
});

// Testes para função ehPar
test('verificação de números pares', () => {
  expect(ehPar(2)).toBe(true);
  expect(ehPar(3)).toBe(false);
  expect(ehPar(0)).toBe(true);
  expect(ehPar(-4)).toBe(true);
});

test('verificação de números ímpares', () => {
  expect(ehPar(7)).toBe(false);
  expect(ehPar(15)).toBe(false);
  expect(ehPar(-3)).toBe(false);
});