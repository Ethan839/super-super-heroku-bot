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

client.on('message', message => {
    if (message.content === '!apply') {
    	message.reply('https://goo.gl/forms/izmXeIAm6c9TV4Xv1');
  	}
});

client.on('message', message => {
    if (message.content === '!server') {
    	message.reply('71.178.14.232');
  	}
});
client.on('message', message => {
    if (message.content === 'do you know dae wae') {
    	message.reply('Yes I know dae wae brother');
  	}
});
client.on('message', message => {
    if (message.content === 'do you have a bot') {
    	message.reply('no');
    }
 });
client.on('message', message => {
    if (message.content === 'what is the server ip') {
    	message.reply('71.178.14.232');
    }
});
client.on('message', message => {
    if (message.content === 'what is the server ip?') {
    	message.reply('71.178.14.232');
    }
});
client.on('message', message => {
    if (message.content === 'can I be staff') {
    	message.reply('Application - https://goo.gl/forms/ZCULxyYBGkisTtZs2
');
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
