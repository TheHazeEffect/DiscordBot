import { Message,Client,RichEmbed } from "discord.js";
import { ICommand } from "../interfaces/ICommand";


export const say : ICommand = {
	name: 'say',
    description: 'Say something',
    args: "{Optional}<embed> <Message>",
	execute: async function (bot: Client,msg: Message, args: string[]) {

        if(msg.deletable)
            msg.delete()

        if(args.length < 1){
            let reply = await msg.reply("Nothing to say!")

            if(reply instanceof Message){
                reply.delete(5000)
                return true
            }
            else
                throw new Error("Message is not an instance of Message")
        }

        console.log(`Hex color is ${msg.guild.me.displayHexColor}`)
        const roleColor = msg.guild.me.displayHexColor === "#000000" ? "#eeeeee" : msg.guild.me.displayHexColor
        
        if(args[0].toLowerCase() === "embed"){
            const embed = new RichEmbed()
                .setColor(roleColor)
                .setDescription(args.slice().join(" "))
                .setTimestamp()
                // .setImage(bot.user.defaultAvatarURL)
                .setAuthor(msg.author.username, msg.author.displayAvatarURL)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                
            msg.channel.send(embed)
        }else{
            msg.channel.send(args.join(" "))
        }

        return true;
    }
}
