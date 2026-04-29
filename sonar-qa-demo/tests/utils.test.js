// tests/utils.test.js — pruebas unitarias con Jest
// Incluye pruebas correctas y algunas con problemas detectables

// Para ejecutar: npm test
// Requiere: npm install --save-dev jest

// ─── Pruebas para checkAge() ──────────────────────────────────────────────────

describe("checkAge()", () => {

  // Prueba correcta
  test("retorna true si la edad es exactamente 18", () => {
    expect(checkAge(18)).toBe(true);
  });

  // BUG-TEST-01: Test con comparación débil — verifica el bug del código fuente
  test("demuestra el bug: '18' == 18 pasa por comparación débil", () => {
    // En el código, checkAge usa == entonces "18" (string) devuelve true
    expect(checkAge("18")).toBe(true);  // debería fallar en código corregido con ===
  });

  test("retorna false si la edad es null", () => {
    expect(checkAge(null)).toBe(false);
  });

  test("retorna true si la edad es mayor a 18", () => {
    expect(checkAge(25)).toBe(true);
  });

});

// ─── Pruebas para formatCurrency() ───────────────────────────────────────────

describe("formatCurrency()", () => {

  test("formatea un número entero correctamente", () => {
    expect(formatCurrency(100)).toBe("$100.00");
  });

  test("formatea un número decimal correctamente", () => {
    expect(formatCurrency(9.5)).toBe("$9.50");
  });

  // BUG-TEST-02: Test sin assertion (no verifica nada) → S2699
  test("prueba vacía — siempre pasa sin verificar nada", () => {
    formatCurrency(50);   // se llama pero no se hace expect()
  });

});

// ─── Pruebas para calculateTax() ─────────────────────────────────────────────

describe("calculateTax()", () => {

  test("calcula el 15% de impuesto correctamente para precio 100", () => {
    expect(calculateTax(100)).toBe(15);
  });

  test("calcula el impuesto para precio 200", () => {
    expect(calculateTax(200)).toBe(30);
  });

  // BUG-TEST-03: Valor hardcodeado en lugar de calcular → frágil si cambia la tasa
  test("calcula impuesto para precio 50 — valor esperado hardcodeado", () => {
    expect(calculateTax(50)).toBe(7.5);  // si el 15% cambia, este test no escala
  });

  // BUG-TEST-04: No se prueba el caso borde de precio 0
  // test faltante: calculateTax(0) debería ser 0

});

// ─── Pruebas para getUserStatus() ────────────────────────────────────────────

describe("getUserStatus()", () => {

  // Este test demuestra el BUG-27: ambas ramas retornan "active"
  test("retorna 'active' cuando el usuario está activo", () => {
    expect(getUserStatus(true)).toBe("active");
  });

  // BUG-TEST-05: Este test "pasa" pero encubre el bug lógico del código
  test("retorna 'active' cuando el usuario NO está activo (bug encubierto)", () => {
    expect(getUserStatus(false)).toBe("active");  // debería ser "inactive"
    // El test pasa pero el comportamiento es incorrecto
  });

});

// ─── Pruebas para validateInput() ────────────────────────────────────────────

describe("validateInput()", () => {

  test("retorna false para string vacío", () => {
    expect(validateInput("")).toBe(false);
  });

  test("retorna true para string no vacío", () => {
    expect(validateInput("hello")).toBe(true);
  });

});

// ─── Pruebas para sumRecursive() ─────────────────────────────────────────────

describe("sumRecursive()", () => {

  test("suma correctamente para n = 5", () => {
    expect(sumRecursive(5)).toBe(15);   // 5+4+3+2+1+0 = 15
  });

  test("retorna 0 para n = 0", () => {
    expect(sumRecursive(0)).toBe(0);
  });

  // BUG-TEST-06: No se prueba con número negativo → loop infinito potencial
  // test("con número negativo", () => { expect(sumRecursive(-1)).toBe(?); });

});

// ─── Prueba para parseJSON() (BUG-28: catch vacío) ───────────────────────────

describe("parseJSON()", () => {

  test("parsea JSON válido correctamente", () => {
    expect(parseJSON('{"name":"Ana"}')).toEqual({ name: "Ana" });
  });

  // BUG-TEST-07: El catch vacío hace que JSON inválido retorne undefined silenciosamente
  test("retorna undefined para JSON inválido (catch vacío encubre el error)", () => {
    expect(parseJSON("esto no es json")).toBeUndefined();
    // En código correcto debería lanzar o retornar null con un log de error
  });

});
