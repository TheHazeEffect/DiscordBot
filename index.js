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
    // console.log(bot.users)
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
        const args = msg.content.split(/ +/);
        const command = args.shift().toLowerCase();
        console.info(`Called command: ${command}`);
        
        // console.log(msg.author)
        const id = msg.author.id
        console.log(bot.fetchUser(id))
    
        if (!bot.commands.has(command)) return;
        

        msg.author.send("test")
        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
});
