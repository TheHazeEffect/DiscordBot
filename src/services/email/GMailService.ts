import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

type ENV_VARIABLE = string | undefined;

export class GMailService {
    private transporter: nodemailer.Transporter;

    private CLIENT_ID: ENV_VARIABLE;

    private CLIENT_SECRET: ENV_VARIABLE;

    private REFRESH_TOKEN: ENV_VARIABLE;

    private SENDER: ENV_VARIABLE;

    constructor() {
        this.transporter = nodemailer.createTransport(`smtps://TroyAnderson.d@gmail.com:Bookman123@smtp.gmail.com`);

        this.CLIENT_ID = process.env.GMAIL_CLIENT_ID;
        this.CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
        this.REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
        this.SENDER = process.env.GMAIL_SENDER;
    }

    async config(): Promise<void> {
        const oauth2Client = new OAuth2(
            this.CLIENT_ID,
            this.CLIENT_SECRET,
            'https://developers.google.com/oauthplayground',
        );

        // Using refresh token to get new access Token
        oauth2Client.setCredentials({
            refresh_token: this.REFRESH_TOKEN,
        });
        const tokens = await oauth2Client.getAccessToken();
        const accessToken = tokens.token;

        const nodemailerSettings = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                user: this.SENDER,
                clientId: this.CLIENT_ID,
                clientSecret: this.CLIENT_SECRET,
                refreshToken: this.REFRESH_TOKEN,
                accessToken,
            },
            tls: {
                rejectUnauthorized: false, // If you know that the host does not have a valid certificate set false
            },
        } as nodemailer.TransportOptions;

        this.transporter = nodemailer.createTransport(nodemailerSettings);
    }

    async sendMail(to: string, subject: string, content: string): Promise<void> {
        const options = {
            from: 'Troyanderson.d@gmail.com',
            to,
            subject,
            text: content,
        };
        await this.config();

        return new Promise<void>((resolve: (msg: any) => void, reject: (err: Error) => void) => {
            this.transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log(`error: ${error}`);
                    reject(error);
                } else {
                    console.log(`Message Sent 
                    ${info.response}`);
                    resolve(`Message Sent  
                    ${info.response}`);
                }
            });
        });
    }
}
