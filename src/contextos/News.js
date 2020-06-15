async function News(user, msg) {
    console.log('entrou News?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "ativando news -> Essa função ainda esta sendo implementada",
                "Não se esqueça de baixar nosso app e criar sua conta, vc ta perdendo de ganhar pontos."
            ]
        ],
        newUser: [
            [
                "Ola! eu sou o Chapa seu amigo virtual das estradas!😁",

                `Eu estou aqui pra facilitar sua vida e te Newsr em varias coisas, 
basta vc abrir nossa conversa e perguntar algo. Mas essa função ainda esta sendo implementada"`
            ]

        ],
        standBy: [
            [

                "ativando news -> Essa função ainda esta sendo implementada"

            ]
        ]
    }

    console.log("dentro do News>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.News = News;