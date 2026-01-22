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

function once(fn) {
    let called = false; // variable privée qui mémorise si fn a été appelée
    let result; //variable privée pour mémoriser le résultat du premier appel

    return function (...args) { //retourne une nouvelle fonction
        if (!called) { //si la fonction n'a jamais été appelé
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

//-fonction memoize
function memoize(fn)
{   //mémorise la fonction
    const memo = {}

    return function(...args) {
        const key = JSON.stringify(args)
        if(memo[key]){
            return memo[key]
        }else{
            const result = fn(...args)
            memo[key] = args
            return result
        }
    }
}
