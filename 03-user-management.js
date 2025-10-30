// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.





const utilisateurs = [
    { nom: "Simeonm", age: 20, estAdmin: true },
    { nom: "Juddah", age: 15, estAdmin: true },
    { nom: "Fayila", age: 10, estAdmin: false },
    { nom: "cherubin", age: 25, estAdmin: false },
    { nom: "Randy", age: 30, estAdmin: true },
];

function whoIsAdmin(utilisateurs) {
    let admins = []; 

    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].estAdmin) { 
            admins.push(utilisateurs[i].nom); 
        }
    }

    return admins;
}

console.log(whoIsAdmin(utilisateurs));

module.exports = {
    whoIsAdmin,
};

module.exports = {
    whoIsAdmin,
};

