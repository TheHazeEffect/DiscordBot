import { ping } from "./ping";
import {sendEmail} from "./sendEmail";
import {say} from "./say";
import {help} from "./help";
import {server} from "./server"

export const botCommands  = [
	ping,
	sendEmail,
	say,
	help,
	server
]


