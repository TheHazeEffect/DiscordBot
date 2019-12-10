import {ICommand} from "../interfaces/ICommand"
import { Message,Client,RichEmbed } from "discord.js";
import {botCommands} from "../commands"


export const help : ICommand = {
    name: "help",
    description: "Shows the description of all commands",
    args: "No Args",
    execute: async function(bot: Client, msg: Message, args: string[]): Promise<boolean> {
        try {
            
            const fiveSpaces = "\u0020\u0020\u0020\u0020\u0020"
            let helpBody: string = ""

            const sortedCommands = botCommands.sort((cmd1:ICommand,cmd2: ICommand) => {
                if(cmd1.name < cmd2.name) {
                    return  -1
                }else{
                    return 1
                }
            })
            
            sortedCommands.map( (cmd: ICommand) => (
                helpBody += `${cmd.name.toUpperCase()}\n${fiveSpaces}desc: ${cmd.description}\n${fiveSpaces}Args: ${cmd.args}\n\n`
            ))

            const embed = new RichEmbed()
            .setDescription(helpBody)
            .setTimestamp()
            // .setImage(bot.user.defaultAvatarURL)
            // .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
            .setTitle("List of commands")
            .setColor("#aaaaaa")

            msg.reply(embed)

            return true
        }catch(error){
            console.log(error)
            throw new Error("There was an error running help")
        }
    }
}