async function Ajuda(user, msg) {
    console.log('entrou ajuda?')
    let menssagem = 'default';

    const obj = {
        notUser: [
            [
                "Olá vc ainda não esta cadastrado no meu sistema, considere baixar nosso app fazer seu cadastro e acumular pontos",
                "Mesmo assim vou lhe passar nossa lista de comandos e tentar te ajudar! ☺ 😃 ",
                `
"clima" para receber a meteorologia dos proximos 3 dias 
"news" para receber de tempo em tempo noticias sobre as estradas do brasil
"ponto de apoio" indica os pontos de apoio mais proximos a vc e suas avaliações
"gasolina" indica postos de gasolina mais proximos de vc
"farmacia"  indica farmacia mais proximos de vc
"hospital"  indica hospital mais proximos de vc
"policia"   indica policia mais proximos de vc
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
                "Olá! Segue ae minha lista de comandos! 😁",
                `
"clima" para receber a meteorologia dos proximos 3 dias 
"news" para receber de tempo em tempo noticias sobre as estradas do brasil
"ponto de apoio" indica os pontos de apoio mais proximos a vc e suas avaliações
"gasolina" indica postos de gasolina mais proximos de vc
"farmacia"  indica farmacia mais proximos de vc
"hospital"  indica hospital mais proximos de vc
"policia"   indica policia mais proximos de vc
 E "Ok" para deixa-lo em espera.
                `
            ]
        ]
    }

    console.log("dentro do Ajuda>>>> ", user.step, obj[user.userType].length)

    menssagem = obj[user.userType][user.step];
    if (user.step < obj[user.userType].length - 1) {
        user.step++;
    } else {
        user.step = 0;
        user.contexto = undefined;

    }
    return menssagem;

}

exports.Ajuda = Ajuda;