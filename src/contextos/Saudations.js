async function Saudations(user, msg) {
    console.log('eae?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "Olá vc ainda não esta cadastrado no meu sistema, considere baixar nosso app fazer seu cadastro e acumular pontos",
                "Depois q baixar nosso app o TruckCare e fazer seu cadastro me chama aqui denovo. =D "
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te ajudar em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. Vamos ver um exemplo?`,

                `pergunte me por exemplo: como ta o clima ?`
            ]

        ],
        standBy: [
            [
                "Olá! Como posso te ajudar ? ",
                "Digite um comando ou digite ajuda para ver lista de comandos"
            ]
        ]
    }

    console.log("dentro do Saudation>>>> ", user.step, obj[user.userType].length, user.step < obj[user.userType].length - 1)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Saudations = Saudations;