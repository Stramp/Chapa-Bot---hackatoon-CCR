


const bd = require('./bd');


function check(idUser, context) {
    console.log(idUser, "verifica user > ", Boolean(bd.users[idUser]));


    // verificando se o id de quem me mandou a menssagem ja esta cadastrado no banco de dados, apos download do app 
    if (Boolean(!bd.users[idUser])) {

        bd.users[idUser] = {
            nome: "1",
            id: idUser,
            contexto: undefined,
            userType: "notUser",
            step: 0
        }
    }


    return (
        bd.users[idUser]
    );

}

exports.check = check;