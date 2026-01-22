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
