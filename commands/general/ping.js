const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test current connection speed of the bot.'),
    syntax: '/ping',
    conditions: [],
    async execute(interaction){
        
        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('🏓 Pong')
        .setDescription(`API Latency is ${Math.abs(Date.now() - interaction.createdTimestamp)}ms.`);

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
}