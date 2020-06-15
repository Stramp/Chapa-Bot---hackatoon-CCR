async function fnClima(msg) {

    return (`
Previsão de hoje 14/06 -> min:15° max:19°
Previsão de amanhã, dia 15/06 -> min:14° max:22°
São Paulo - SP - DADOS FICITICIOS 
pronto para requisição (IMPLEMENTANDO)
`)
}




async function Clima(user, msg) {

    let menssagem = 'default clima'

    const obj = {
        notUser: [
            [
                `
Para qual estado vc gostaria de saber o clima? 
Basta digitar a sigla do estado como por exemplo SP, BA, etc.
ou digite aqui para pesquisar na sua região!
                `
            ],
            [
                "Ok vou pesquisar ... ",
                await fnClima(msg.body),
                "Não se esqueça baixo nosso app e acumule pontos ;) [link]"
            ],

        ],
        newUser: [
            [
                `
Para qual estado vc gostaria de saber o clima? 
Basta digitar a sigla do estado como por exemplo SP, BA, etc.
ou digite aqui para pesquisar na sua região!
                `
            ],
            [
                "Ok vou pesquisar ... ", await fnClima(msg.body), "Viu como é facil ? agora vou listar a baixo nossos principais comandos",
                `
"clima" para receber a meteorologia dos proximos 3 dias 
"news" para receber de tempo em tempo noticias sobre as estradas do brasil
"ponto de apoio" indica os pontos de apoio mais proximos a vc e suas avaliações
"gasolina" indica postos de gasolina mais proximos de vc
"farmacia"  indica farmacia mais proximos de vc
"hospital"  indica hospital mais proximos de vc
"policia"   indica policia mais proximos de vc
vc tbm sempre pode digitar "ajuda" para receber novamente essa lista de comando!
E "Ok" para deixa-lo em espera.

                `
            ]
        ],
        standBy: [
            [
                `
Para qual estado vc gostaria de saber o clima? 
Basta digitar a sigla do estado como por exemplo SP, BA, etc.
ou digite "aqui" para pesquisar na sua região!
                `
            ],
            [
                "Ok vou pesquisar ... ",
                await fnClima(msg.body)
            ]
        ]
    }

    menssagem = obj[user.userType][user.step];
    console.log("opt clima :>msg>> ", user.step < obj[user.userType].length - 1)


    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;
        user.userType = "standBy"
    }
    return menssagem;
}


exports.Clima = Clima;