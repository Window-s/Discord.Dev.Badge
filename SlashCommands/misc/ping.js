const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");



module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const pingembed = new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`client.ws.ping(${client.ws.ping})`)
        .setFooter(`Window#7537`)
        
        interaction.reply({ embeds: [pingembed] });
    },
};
