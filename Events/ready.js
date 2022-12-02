const client = require("../index");


client.on('ready', () => {
    console.log(`${client.user.tag} is now online`)
    const channel = client.channels.cache.get('1035305773712019527');
    channel.send(`${client.user} is online. LOOK OUT FOR BUGS AND USE \`/report\` TO SEND US A MESSAGE`);
    
    setInterval(() => {
      const arrayOfStatus = [
                'you 😳, WATCHING',
                `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} users, WATCHING`
        ]
        const random = arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)].split(', ')
        const status = random[0]
        const mode = random[1]
        client.user.setActivity(status, {type: mode})
    }, 10000)
    
})