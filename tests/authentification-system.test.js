const { copyFile } = require("./../utils/copy-file-auth");

copyFile("05-authentification-system");

const {
  login,
  signUp,
  baseDeDonnees,
} = require("./../tests/tamps/05-authentification-system");
describe("Système d'Authentification - Cas supplémentaires", () => {
  beforeEach(() => {
    baseDeDonnees.length = 0;
  });

  describe("signUp", () => {
    it("devrait retourner une erreur si l'email existe déjà", () => {
      signUp("Alice", "alice@email.com", "mdp123", "mdp123");
      const result = signUp("Bob", "alice@email.com", "autre", "autre");
      expect(result).toBe("Erreur: cet email existe déjà");
      expect(baseDeDonnees.length).toBe(1);
    });

    it("devrait retourner une erreur si les mots de passe ne correspondent pas", () => {
      const result = signUp("Alice", "alice@email.com", "mdp123", "mdp456");
      expect(result).toBe("Erreur: les mots de passe ne correspondent pas");
      expect(baseDeDonnees.length).toBe(0);
    });

    it("devrait ajouter un utilisateur avec les bonnes propriétés", () => {
      const user = signUp("Alice", "alice@email.com", "mdp123", "mdp123");
      expect(user).toMatchObject({
        id: expect.any(Number),
        nom: "Alice",
        email: "alice@email.com",
        password: "mdp123",
        estConnecte: false,
        estBloque: false,
      });
    });
  });

  describe("login", () => {
    beforeEach(() => {
      signUp("Charlie", "charlie@email.com", "secret", "secret");
    });

    it("devrait retourner une erreur si l'utilisateur n'existe pas", () => {
      const result = login("inconnu@email.com", "nopass");
      expect(result).toBe("Erreur: utilisateur non trouvé");
    });

    it("devrait retourner une erreur si le mot de passe est incorrect", () => {
      const result = login("charlie@email.com", "mauvais");
      expect(result).toBe("Erreur: mot de passe incorrect");
    });

    it("devrait retourner une erreur si l'utilisateur est bloqué", () => {
      baseDeDonnees[0].estBloque = true;
      const result = login("charlie@email.com", "secret");
      expect(result).toBe("Erreur: utilisateur bloqué");
    });

    it("devrait connecter l'utilisateur si les identifiants sont corrects", () => {
      const user = login("charlie@email.com", "secret");
      expect(user).toMatchObject({
        email: "charlie@email.com",
        estConnecte: true,
      });
    });
  });
});
