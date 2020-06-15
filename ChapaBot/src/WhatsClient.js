const Context = require("./CheckContext");
const Users = require("./Users");
const Optmus = require("./Optmus");
const wa = require('@open-wa/wa-automate');



const message = {
    body: "oi",
    from: "5513"
}

function start() {
    console.log("entrei no whatsclient");
    wa.create().then(whats => client(whats));
    //teste(message);
    //iniciar a conexao da instancia e criar um cliente q vai ouvir os eventos do whatsapp bot
}

async function client(whats) {
    //inicia gatilho das escuta dos eventos de mensagens feitas para o bot
    await whats.onMessage(async message => {
        console.log("msg user >>> ", message.body)
        // gatilho acionado recebe um obj contendo todos dados e meta dados da mensagem 
        // verificando se quem ta me chamando ja é nosso usuario e como qual seu status
        const user = Users.check(message.from);
        console.log("userStats >> ", user)

        // chamo o verificador de contextos para analisar o corpo da menssagem e me indicar um contexto de assunto
        if (!user.contexto) user.contexto = Context.check(message);
        console.log("context >> ", user.contexto)


        // buscando a lista de grases para esse contexto de assunto e tipo estado de usuario
        const msgList = await Optmus[user.contexto](user, message);
        console.log("context2 >> ", user.contexto)
        //enviando sequencia de frases 

        console.log("msg enviada >> ", msgList)
        msgList ? msgList.map(item => whats.sendText(message.from, item)) : console.log("menssagem indefinida conferir a espera")
    })
    //

}












async function teste(message) {
    // gatilho acionado recebe um obj contendo todos dados e meta dados da mensagem 
    // verificando se quem ta me chamando ja é nosso usuario e como qual seu status
    const user = Users.check(message.from);
    console.log("userStats >> ", user)

    // chamo o verificador de contextos para analisar o corpo da menssagem e me indicar um contexto de assunto
    if (!user.contexto) user.contexto = Context.check(message);
    console.log("context >> ", user.contexto)


    // buscando a lista de grases para esse contexto de assunto e tipo estado de usuario
    console.log("Optmus", await Optmus.Saudations(user, message))
    // const msgList = Optmus[user.contexto](user, message);
    console.log("context2 >> ", user.contexto)
    //enviando sequencia de frases 

    console.log("msg enviada >> ", 'msgList')
    //msgList.map(item => whats.sendText(message.from, item))
}
// app instalado e cadastro realizado chamando usuario

exports.start = start;