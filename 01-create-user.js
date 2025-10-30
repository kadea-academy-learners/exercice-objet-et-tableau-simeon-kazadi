/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser( nom, age, estConnecte) {
    return {
        nom: nom,
        age: age,
        estConnecte: estConnecte,
    };
}
const utilisateurs = [
    createUser("Juddah", 20, true),
    createUser("Fayila", 15, false),
    createUser("Simeon", 25, true),
];
console.log(utilisateurs);
module.exports = {
    createUser,
};

