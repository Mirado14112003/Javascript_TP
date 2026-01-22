//closures & fonctions avancées 
//function incrementation 
function creercompteur(){
    let valeur = 0;
    return {
        incrementer: function(){
            valeur++;
            console.log(valeur);
        },
        decrementation: function(){
            valeur--;
            console.log(valeur);
        },
        valeur: function(){
            console.log(valeur);
        }
    }
}
const compteur = creercompteur();
compteur.incrementer();
compteur.incrementer();
compteur.incrementer();
compteur.incrementer();
compteur.decrementation();
compteur.decrementation();
compteur.decrementation();
compteur.valeur();