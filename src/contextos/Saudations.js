async function Saudations(user, msg) {
    console.log('eae?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "Olá vc ainda não esta cadastrado no meu sistema, considere baixar nosso app fazer seu cadastro e acumular pontos",
                "Depois q baixar nosso app o TruckCare e fazer seu cadastro me chama aqui denovo. =D ",
                "Mas posso te ajudar digite algum comando da lista:",
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