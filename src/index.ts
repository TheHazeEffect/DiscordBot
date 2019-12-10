import { botCommands } from "./commands";
import { ICommand } from "./interfaces/ICommand";
import { Message, Client,Collection } from "discord.js";

const bot = new Client({
    disableEveryone: true
});
const commands = new Collection<String,ICommand>() 
bot.login(process.env.TOKEN);

botCommands.forEach((command: ICommand ,index : number) => {
    commands.set(botCommands[index].name, command);
});


bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);

    bot.user.setPresence({ 
        game : {
            name : "Getting developed",
            type: "WATCHING"
        }
    })
});

bot.on('message', async (msg: Message) => {
    const prefix = "!"
    
    if(msg.author.bot) return
    if(!msg.guild) return
    if(!msg.content.startsWith(prefix)) return

    console.log(`${msg.author.username} said ${msg.content}`)

    // const args = msg.content.split(/ +/);
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift()

    if(command===undefined)
        throw new Error("command is undefined") 

    command = command.toLowerCase()
        
    if (!commands.has(command)) 
        return;
    
    try {

        const findCommand = commands.get(command)
        if(findCommand===undefined)
            throw new Error("command is undefined") 

        await findCommand.execute(bot,msg,args)
        
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});
