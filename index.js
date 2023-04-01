const config = require("./config.json")
const { Client, GatewayIntentBits, VoiceChannel, TextChannel } = require('discord.js');
const command = require("./command.js")
const firstMessage=require("./first_message.js")
const privateMessage=require("./private_message.js")
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages,
	],
});


client.on('ready', () => {
	console.log("bot is ready")

	//this command is starter command that sends a message in the channel
	// command(client, 'ping', message => {
	// 	message.channel.send("Pong!");
	// })

	//this command returns list of servers and membercount and other functions of a server
	command(client, 'servers', message => {
		client.guilds.cache.forEach((guild) => {
			console.log(guild)
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
		})
	})

	//here bulkdeletes text messages for not more then 2 weeks
	command(client, ['cc', 'clearchannel'], message => {
		if (message.member.permissions.has('ADMINISTRATOR')) {
			message.channel.messages.fetch().then((results) => {
				message.channel.bulkDelete(results)
			})
			//deletes 100 messages but dont'know what msg=>msg.delete(1) does
			// message.channel.bulkDelete(10).then(()=>{
			// 	message.channel.send("Deleted 100 messages.").then(msg=>msg.delete(1));
			// })
		}
	})

	//what is client,user,message,
	//this command updates the status of the bot
	command(client, 'status', message => {
		const content = message.content.replace('!status', '')
		client.user.setPresence({
			activities: [{
				name: content,
				type: 0,
			}],
		})
	})

	//for sending private messages to the author
	privateMessage(client,'ping','pong bsdk')

	// firstMessage(client,'1081914831751360572',"hello world",['🔥'])

	//command to create new text and voice channels
	command(client,'createtextchannel',(message)=>{
		const content=message.content.replace("!createtextchannel ",'')
		console.log(content)

		message.guild.channels.create({
			name:content,
			type:TextChannel,
		}).then((channel)=>{
			const categoryId='1081918068000829450';
			channel.setParent(categoryId)
		})
	})


	command(client,'createvoicechannel',(message)=>{
		const name=message.content.replace("!createvoicechannel ","")
		message.guild.channels.create({
			name:name,
			type: 2,
		}).then((channel)=>{
			const categoryId='1081918068000829450';
			channel.setParent(categoryId)
		})
	})
	
})

client.login(config.token);