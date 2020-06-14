


const keywordsListen = require('./keywordslisten');


function checkContext(message) {
    console.log(message.body.toLowerCase())
    if (keywordsListen.context.saudations.includes(message.body.toLowerCase())) {
        console.log("palavra de saudação acionada ", message.body);
        return "Saudation"

    } else {
        return 'Default'
    }


}

exports.check = checkContext;