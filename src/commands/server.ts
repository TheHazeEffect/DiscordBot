import { ICommand } from "../interfaces/ICommand";
import { Message,Client } from "discord.js";




export const server : ICommand = {
    name : "server",
    description: "display Server Info",
    args: "No Args",
    execute: async function(bot: Client, msg: Message, args: string[]) : Promise<boolean> {

        try {
            msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}\nCreated At:${msg.guild.createdAt}\nRegion:${msg.guild.region}`)
            return true
        }catch(error){
            console.log(error)
            throw new Error("There was an error running server command")

        }
    }
}