async function Default(user, msg) {
    console.log('entrou Default?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "Olá vc ainda não esta cadastrado no meu sistema, considere baixar nosso app fazer seu cadastro e acumular pontos",
                "Não entendi releia a pergunta denovo e me responda"
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te Defaultr em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. Mas não entendi oq vc quis dizer! 🤔`
            ]

        ],
        standBy: [
            [

                "Não entendi seu comando digite novamente, qualquer coisa digite 'ajuda' para ver lista de comandos! 👍"

            ]
        ]
    }

    console.log("dentro do Default>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Default = Default;