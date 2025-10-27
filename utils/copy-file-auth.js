const fs = require("fs");
const path = require("path");

function copyFile(file) {
  // Lire le fichier de l'apprenant (comportement par défaut pour le template)
  const scriptContent = fs.readFileSync(
    path.join(__dirname, `../${file}.js`),
    "utf-8"
  );

  // Préparer le contenu à injecter (avec indentation correcte)
  const indentedScript = scriptContent
    .split("\n")
    .map((line) => "  " + line) // Indenter pour que ça s’aligne dans la fonction
    .join("\n");

  // Trouver la fonction et injecter dedans (export simple — comportement template original)
  let mainContent = `\n${indentedScript}\n  \n\n module.exports = {\n    baseDeDonnees, signUp, login\n  };`;

  // S'assurer que le dossier de tamps existe (créé à la volée pour les tests)
  const tampDir = path.join(__dirname, "../tests/tamps");
  if (!fs.existsSync(tampDir)) fs.mkdirSync(tampDir, { recursive: true });

  // Exporter prudemment chaque symbole pour éviter les ReferenceError
  const exportBlock = `\nmodule.exports = {\n  baseDeDonnees: typeof baseDeDonnees !== 'undefined' ? baseDeDonnees : undefined,\n  signUp: typeof signUp !== 'undefined' ? signUp : undefined,\n  login: typeof login !== 'undefined' ? login : undefined,\n};`;

  fs.writeFileSync(path.join(tampDir, `${file}.js`), mainContent + exportBlock, {
    flag: "w+",
  });
}

module.exports = {
  copyFile,
};
