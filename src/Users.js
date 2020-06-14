


const bd = require('./bd');


function check(idUser) {
    console.log(idUser, "verifica user > ", Boolean(bd.users[idUser]));


    // verificando se o id de quem me mandou a menssagem ja esta cadastrado no banco de dados, apos download do app 

    return (
        Boolean(bd.users[idUser]) ?
            bd.users[idUser].novato ? ["newUser", bd.users[idUser].step] : ["standBy", bd.users[idUser].step]
            : ["notUser", 0]
    );

}

exports.check = check;