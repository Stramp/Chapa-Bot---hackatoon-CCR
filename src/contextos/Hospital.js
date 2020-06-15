async function Hospital(user, msg) {
    console.log('entrou Hospital?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "A busca por Hospitais ainda nao foi implementada, me desculpe!"
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te Hospitalr em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. A busca por Hospitais ainda nao foi implementada, me desculpe!`
            ]

        ],
        standBy: [
            [

                "A busca por Hospitais ainda nao foi implementada, me desculpe!"

            ]
        ]
    }

    console.log("dentro do Hospital>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Hospital = Hospital;