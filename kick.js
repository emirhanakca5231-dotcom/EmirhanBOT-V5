const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("kick")
.setDescription("Üyeyi atar")
.addUserOption(o =>
o.setName("uye").setRequired(true)
)
.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

async execute(interaction) {

const user = interaction.options.getUser("uye");
const member = await interaction.guild.members.fetch(user.id);

await member.kick();

interaction.reply(`${user.tag} atıldı`);
}
};