//closure & fonctions avancées (incrementation , decrementation , et valeur)
function creerCompteur(){
    let valeur = 0;
    return {
        incrementer: function(){
            valeur++;
        },
        decrementer: function(){
            valeur--;
        },
        Valeur: function(){
            return valeur;
        }
    };
}
