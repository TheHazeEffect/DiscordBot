require('dotenv').config();
const botCommands = require('./commands');

import { Message, Client,Collection } from "discord.js";

const bot = new Client();
const commands = new Collection();

Object.keys(botCommands).map(key => {
    commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    // console.log(bot.users)
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg: Message) => {
        const args = msg.content.split(/ +/);
        
        const command = args.shift().toLowerCase();
        console.info(`Called command: ${command}`);
        
        // console.log(msg.author)
        const id = msg.author.id
        console.log(bot.fetchUser(id))
    
        if (!commands.has(command)) return;
        

        // msg.author.send("test")
        try {
            commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
});
