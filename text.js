const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
]

//for further channels requirements
action.guild.channels.create(`hello`, {
    type: "GUILD_TEXT",
    parent: cat[0].ID,
    permissionOverwrites: [
    {
    id: bot.user.id,
    allow: ['VIEW_CHANNEL', "MANAGE_CHANNELS"]
    },
    {
    id: action.user.id,
    allow: ["VIEW_CHANNEL"]
    },
    {
    id: req[0].ID,
    deny: ["VIEW_CHANNEL"]
    },
    {
    id: staff[0].ID,
    allow: ["VIEW_CHANNEL"]
    }
                
    ]
    })