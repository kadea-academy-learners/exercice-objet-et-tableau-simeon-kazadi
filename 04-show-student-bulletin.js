// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".


const eleves = [
  { nom: "Fayila", notes: [16, 18, 17] },
  { nom: "Candid", notes: [14, 13.5, 15] },
  { nom: "Maria", notes: [11, 10, 12] },
  { nom: "Freddy", notes: [8, 9, 7.5] },
  { nom: "Athan", notes: [] }
];

function showStudentBulletin(eleves) {

  if (!Array.isArray(eleves)) {
    throw new Error("Le paramètre 'eleves' doit être un tableau !");
  }
  const bulletins = [];

  for (let i = 0; i < eleves.length; i++) {
    const eleve = eleves[i];
    const nom = eleve.nom || "Nom inconnu";
    const notes = Array.isArray(eleve.notes) ? eleve.notes : [];
    let moyenne = 0;

    if (notes.length > 0) {
      let somme = 0;
      for (let j = 0; j < notes.length; j++) {
        somme += notes[j];
      }
      moyenne = somme / notes.length;
    }
    moyenne = Number(moyenne.toFixed(1));
    let commentaire = "";

    if (moyenne >= 16) {
      commentaire = "Excellent";
    } else if (moyenne >= 14) {
      commentaire = "Très Bien";
    } else if (moyenne >= 12) {
      commentaire = "Bien";
    } else if (moyenne >= 10) {
      commentaire = "Passable";
    } else {
      commentaire = "À revoir";
    }
    const bulletin = {
      nom: nom,
      moyenne: moyenne,
      commentaire: commentaire
    };
    bulletins.push(bulletin);
  }
  return bulletins;
}

console.log(showStudentBulletin(eleves));


module.exports = {
	showStudentBulletin,
};