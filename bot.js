const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzU1ODg1MjkyMDEwOTk1NzI0.X2JzCQ.YPtUKuvRUPhx2NhBjDKlbZ0JrGM);//BOT_TOKEN is the Client Secret
