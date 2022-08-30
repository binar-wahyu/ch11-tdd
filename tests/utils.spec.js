// utils/matematika.js
function pangkatDua(angka) {
  if (typeof angka === "string") {
    throw new Error("Apalah");
  }
  return angka ** 2;
}

describe("pangkatDua", () => {
  it("angka berhasil dipangkat 2", (done) => {
    const result = pangkatDua(2);
    expect(result).toBe(4);

    done();
  });

  it("angka berhasil dipangkat 2 dengan 3", (done) => {
    const result = pangkatDua(3);
    expect(result).toBe(9);

    done();
  });

  it("throw error when use string as parameter", (done) => {
    expect(() => {
      pangkatDua("abc");
    }).toThrowError();

    done();
  });
});
