/*
*/
// verifica estado do usuario se a primeira vez q ele ta falando para passar pelo contexto de "apresentação/tutorial"
// palavras contexto apresentação 

const whats = require('./WhatsClient.js')






function start() {
    // inicia instancia do whats
    whats.start();
    //whats.stop();



}






exports.start = start;


/**
 * contexto 1 - apresentação tutorial rapido
 *
 *  step1 - comprimentou o bot ele responde
 *      "Ola (nome do cara) eu sou OptmusTruk sou robo pessoal! [emoticon]"

        "Eu estou aqui pra facilitar sua vida e te ajudar em varias coisas,
        basta vc abrir nossa conversa e perguntar algo.
        Vamos ver um exemplo?"

        "pergunte me por exemplo: como ta o clima ? "







 * Contexto Default --- nenhum comando reconhecido
    step1 -
 */