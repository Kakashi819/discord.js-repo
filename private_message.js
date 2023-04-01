module.exports = (client, triggerText, replyText) => {
    client.on('messageCreate', message => {
        const { content } = message;
        if (content.toLowerCase() === triggerText) {
            if (message.channel.type === 1) {
                // console.log('dm')
                message.author.send("dm text");
            } else {
                message.author.send(replyText);
            }
        }
    })
}

//what is message.author