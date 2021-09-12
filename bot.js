console.log('Starting Bot...');

require('dotenv').config();
const Discord=require('discord.js');
const client=new Discord.Client();
const COMMANDS = require("./commands").COMMANDS;

client.login(process.env.TOKEN);
client.on('ready', () => console.log('Bot Ready'));
client.on('message', async message => {
    var text=message.content.trim().toLocaleLowerCase();
    for (let i = 0; i < COMMANDS.length; i++) {if (COMMANDS[i].keyword === text) COMMANDS[i].function(message);};
    if (message.content.slice(1,7).trim().toLocaleLowerCase()==='repeat') message.channel.send(message.content.slice(7,2000));
});