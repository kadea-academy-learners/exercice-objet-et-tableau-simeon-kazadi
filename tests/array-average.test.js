const { copyFile } = require("./../utils/copy-file");
copyFile("02-array-average", "averageNote");
const { averageNote } = require("./../tests/tamps/02-array-average");

describe("averageNote", () => {
  it("devrait retourner 'Réussi' pour une moyenne >= 10", () => {
    const notes = [12, 14, 10, 8, 16];
    expect(averageNote(notes)).toBe("Réussi");
  });

  it("devrait retourner 'Échoué' pour une moyenne < 10", () => {
    const notes = [4, 6, 5, 7, 3];
    expect(averageNote(notes)).toBe("Échoué");
  });

  it("devrait gérer un tableau vide", () => {
    const notes = [];
    expect(averageNote(notes)).toBe("Échoué");
  });

  it("devrait gérer une seule note", () => {
    const notes = [15];
    expect(averageNote(notes)).toBe("Réussi");
  });
});
