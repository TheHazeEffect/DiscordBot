import {ICommand} from "../interfaces/ICommand"
import { Message,Client,RichEmbed } from "discord.js";
import {botCommands} from "../commands"


export const help : ICommand = {
    name: "help",
    description: "Shows the description of all commands",
    args: "no args",
    execute: async function(bot: Client, msg: Message, args: string[]): Promise<boolean> {
        try {
           let FullMessage: string = ""
            botCommands.map( (cmd: ICommand) => (
               FullMessage += `${cmd.name} - ${cmd.description} - ${cmd.args}\n`
            ))

            const embed = new RichEmbed()
            .setDescription(FullMessage)
            .setTimestamp()
            // .setImage(bot.user.defaultAvatarURL)
            // .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
            .setTitle("List of commands")
            .setColor("#eeeeee")

            msg.reply(embed)

            return true
        }catch(error){
            console.log(error)
            throw new Error("There was an error running help")
        }
    }
}