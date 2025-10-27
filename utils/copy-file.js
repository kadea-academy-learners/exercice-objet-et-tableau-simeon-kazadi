const fs = require("fs");
const path = require("path");

function copyFile(file, name) {
  // Lire le contenu du fichier de l'apprenant (comportement par défaut)
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
  let mainContent = `\n${indentedScript}\n  \n\n module.exports = {\n    ${name},\n  };`;

  // S'assurer que le dossier de tamps existe (créé à la volée pour les tests)
  const tampDir = path.join(__dirname, "../tests/tamps");
  if (!fs.existsSync(tampDir)) fs.mkdirSync(tampDir, { recursive: true });

  // Exporter prudemment: typeof évite les ReferenceError si l'apprenant
  // n'a pas défini la fonction. Le test verra une valeur undefined
  // et échouera proprement au lieu de crasher la suite.
  const exportLine = `\nmodule.exports = { ${name}: typeof ${name} !== 'undefined' ? ${name} : undefined };`;

  fs.writeFileSync(path.join(tampDir, `${file}.js`), mainContent + exportLine, {
    flag: "w+",
  });
}

module.exports = {
  copyFile,
};
