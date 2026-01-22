//Promises + async/await, gestion d'erreurs

// 1 - wait(ms)
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// 2 - simulatedLogin(user, pass) + getUserData(token)
function simulatedLogin(user, pass) {
    return new Promise((res, rej) => {
        console.log("connexion en cours ...");

        wait(2000)

        if (user == 'Leo' && pass == 134) {
            res = "connexion réussie"
        } else {
            rej = "user incorrect && password incorrect"
        }
    })
}
try {
    async function getUserData(token) {
        const res = await fetch(token)
        const data = await res.json()

        return data
    }
}catch(e){
    console.log(e);
    
}