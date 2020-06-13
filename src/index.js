const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

async function start(client) {
    await client.onAnyMessage(message => {
        console.log("body >>>>", message.body);
        console.log("mediaData >>>>", message.mediaData);
        console.log("fromMe >>>> ", message.fromMe);
        return message.body === "falarafael" ?
            client.sendText(message.from, '👋 Olá! eu sou um BOT otario') : null
    })
}

