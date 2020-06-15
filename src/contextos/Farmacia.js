async function Farmacia(user, msg) {
    console.log('entrou Farmacia?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "A busca por farmacias ainda nao foi implementada, me desculpe"
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te Farmaciar em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. A busca por farmacias ainda nao foi implementada, me desculpe`
            ]

        ],
        standBy: [
            [

                "A busca por farmacias ainda nao foi implementada, me desculpe"

            ]
        ]
    }

    console.log("dentro do Farmacia>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Farmacia = Farmacia;