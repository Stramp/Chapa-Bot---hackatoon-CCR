async function PontoDeApoio(user, msg) {
    console.log('entrou PontoDeApoio?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "Essa função ainda esta sendo implementada"
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te PontoDeApoior em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. Mas essa função ainda esta sendo implementada"`
            ]

        ],
        standBy: [
            [

                "Essa função ainda esta sendo implementada"

            ]
        ]
    }

    console.log("dentro do PontoDeApoio>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.PontoDeApoio = PontoDeApoio;