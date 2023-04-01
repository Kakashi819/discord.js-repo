const config = require("./config.json")
// const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const fs=require("fs")
fs.readFileSync("data.json",'utf8',function(err,data){
	console.log(err);
	console.log(data);
})


// const client = new Client({
// 	intents: [
// 		GatewayIntentBits.Guilds,
// 		GatewayIntentBits.GuildMessages,
// 		GatewayIntentBits.MessageContent,
// 		GatewayIntentBits.GuildMembers,
// 	],
// });

// client.on('ready',()=>{
//     console.log("bot is ready")

//     client.on('messageCreate',message=>{
//         const {content}=message;
//         console.log(content);
//     })
// })

// client.login(config.token);