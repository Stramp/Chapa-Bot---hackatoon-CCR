


const keywordsListen = require('./keywordslisten');


function checkContext(message) {
    console.log(message.body.toLowerCase(), "----")
    let context = Object.keys(keywordsListen.context).filter(item => {
        console.log(keywordsListen.context[item].includes(message.body.toLowerCase()) ? item : 'Default')
        if (keywordsListen.context[item].includes(message.body.toLowerCase())) {
            return item;
        }
    })

    return context[0]
    console.log("oq é context >>>", context)






    //Object.values(item)



    /*if (keywordsListen.context.saudations.includes(message.body.toLowerCase())) {
        console.log("palavra de saudação acionada ", message.body);
        return "Saudation"
 
    }*/


}


exports.check = checkContext;