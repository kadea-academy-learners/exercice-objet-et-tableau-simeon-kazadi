const { copyFile } = require("../utils/copy-file");
copyFile("03-user-management", "whoIsAdmin");
const { whoIsAdmin } = require("./../tests/tamps/03-user-management");
describe("whoIsAdmin", () => {
  it("devrait retourner les noms des utilisateurs qui sont admin", () => {
    const users = [
      { nom: "Alice", age: 30, estAdmin: true },
      { nom: "Bob", age: 25, estAdmin: false },
      { nom: "Charlie", age: 35, estAdmin: true },
    ];
    expect(whoIsAdmin(users)).toEqual(["Alice", "Charlie"]);
  });

  it("devrait retourner un tableau vide si aucun utilisateur n'est admin", () => {
    const users = [
      { nom: "Alice", age: 30, estAdmin: false },
      { nom: "Bob", age: 25, estAdmin: false },
    ];
    expect(whoIsAdmin(users)).toEqual([]);
  });

  it("devrait gérer un tableau vide d'utilisateurs", () => {
    const users = [];
    expect(whoIsAdmin(users)).toEqual([]);
  });

  it("devrait gérer un seul utilisateur qui est admin", () => {
    const users = [{ nom: "Alice", age: 30, estAdmin: true }];
    expect(whoIsAdmin(users)).toEqual(["Alice"]);
  });
});
