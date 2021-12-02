const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply positve and negative integer", () => {
    const result = multiply(2, -2);
    expect(result).toBe(-4);
  });

  test("multiply any number and 0", () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
  });
});
