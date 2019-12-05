require('dotenv').config();
const Discord = require('discord.js');
const botCommands = require('./commands');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
        const args = msg.content.split(/ +/);
        const command = args.shift().toLowerCase();
        console.info(`Called command: ${command}`);

        if (!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
});

// if (message.substring(0, 1) == '!') {
//     var args = message.substring(1).split(' ');
//     var cmd = args[0];
   
//     args = args.splice(1);
//     switch(cmd) {
//         // !ping
//         case 'ping':
//             bot.sendMessage({
//                 to: channelID,
//                 message: 'Pong!'
//             });
//         break;
//         // Just add any case commands if you want to..
//      }
//  }
// });