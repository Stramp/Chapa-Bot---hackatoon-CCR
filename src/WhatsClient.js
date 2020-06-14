const Context = require("./CheckContext");
const Users = require("./Users");
const Optmus = require("./Optmus");
const wa = require('@open-wa/wa-automate');


const message = {
    body: "clima",
    from: "5513"
}

function start() {
    console.log("entrei no whatsclient");
    //wa.create().then(whats => client(whats));
    teste(message);
    //iniciar a conexao da instancia e criar um cliente q vai ouvir os eventos do whatsapp bot
}

async function client(whats) {
    //inicia gatilho das escuta dos eventos de mensagens feitas para o bot
    await whats.onAnyMessage(message => {

        // gatilho acionado recebe um obj contendo todos dados e meta dados da mensagem 
        // verificando se quem ta me chamando ja é nosso usuario e como qual seu status
        const userStats = Users.check(message.from);
        console.log("userStats >> ", userStats)

        // chamo o verificador de contextos para analisar o corpo da menssagem e me indicar um contexto de assunto
        const context = Context.check(message);
        console.log("context >> ", context)

        // buscando a lista de grases para esse contexto de assunto e tipo estado de usuario
        const msgList = Optmus[context][userStats[0]][userStats[1]];

        //enviando sequencia de frases 

        console.log("msg enviada >> ", msgList)
    })
    whats.sendText("5511959248154@c.us", "teste")

}












function teste(message) {
    const userStats = Users.check(message.from);
    console.log("userStats >> ", userStats)

    // chamo o verificador de contextos para analisar o corpo da menssagem e me indicar um contexto de assunto
    const context = Context.check(message);
    console.log("context >> ", context)

    // buscando a lista de grases para esse contexto de assunto e tipo estado de usuario
    const msgList = Optmus[context][userStats[0]][userStats[1]];

    //enviando sequencia de frases 

    console.log("msg enviada >> ", msgList)
}
// app instalado e cadastro realizado chamando usuario

exports.start = start;