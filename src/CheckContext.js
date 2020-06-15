


const keywordsListen = require('./keywordslisten');


function checkContext(message) {

    let context = Object.keys(keywordsListen.context).filter(item => {
        return keywordsListen.context[item].includes(message.body.toLowerCase());

    })
    !context[0] ? context.push("Default") : null

    return context[0]
}


exports.check = checkContext;