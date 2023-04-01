const command = require('./command.js')
//id name and count
let userdata = []
//command to register yourself

command(client, 'register', message => {
    if (message.member.permissions.has('ADMINISTRATOR')) {
        let name = message.author.username
        let id = message.author.id
        let count = 0;
        let flag = true;
        userdata.forEach(data => {
            if (data.id == id) {
                flag = false;
                message.channel.send("already registered")
            }
        })
        if (flag) {
            userdata.push({
                name, id, count
            })
            message.channel.send(`registered successfully @${name}`)
        }

    }
})

//to show registered members
command(client, 'list', message => {
    if (message.member.permissions.has('ADMINISTRATOR')) {
        userdata.forEach(data => {
            message.channel.send(`${data.name} is registered as a members and has ${data.count} upvotes`)
        })

    }
})