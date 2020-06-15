async function Gasolina(user, msg) {
    console.log('entrou Gasolina?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "A busca por postos de abastecimento ainda nao foi implementada, me desculpe!",
                "Não se esqueça de baixar nosso app e criar sua conta, vc ta perdendo de ganhar pontos."
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te Gasolinar em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. A busca por postos de abastecimento ainda nao foi implementada, me desculpe!`
            ]

        ],
        standBy: [
            [

                "A busca por postos de abastecimento ainda nao foi implementada, me desculpe!"

            ]
        ]
    }

    console.log("dentro do Gasolina>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Gasolina = Gasolina;