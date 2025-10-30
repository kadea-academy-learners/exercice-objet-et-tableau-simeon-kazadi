// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

const notes= [12,24,8,10,25]


function averageNote(notes) {

	let sommes= 0;
	
	for (let i=0; i<notes.length; i++) {
		sommes += notes[i];
	}
	const moyenne = sommes/notes.length;
	if (moyenne>= 10) {
		return "Reussi";
	} else{
		return "Échoué"
	}
	
}
const resultat = averageNote(notes);
console.log (resultat)

module.exports = {
	averageNote,
};



