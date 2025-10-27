const { copyFile } = require("../utils/copy-file");

copyFile("01-create-user", "createUser");

const { createUser } = require("./../tests/tamps/01-create-user");

describe("createUser", () => {
  it("devrait créer un objet utilisateur avec les bonnes propriétés", () => {
    const user = createUser("John", 30, true);
    expect(user).toEqual({
      nom: "John",
      age: 30,
      estConnecté: true,
    });
  });

  it("devrait gérer les chaînes vides et les valeurs zéro", () => {
    const user = createUser("", 0, false);
    expect(user).toEqual({
      nom: "",
      age: 0,
      estConnecté: false,
    });
  });

  it("devrait gérer différents types de données pour les propriétés", () => {
    const user = createUser("Alice", "25", "true");
    expect(user).toEqual({
      nom: "Alice",
      age: "25",
      estConnecté: "true",
    });
  });
});
