require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel]
});

client.once('clientReady', (c) => {
 console.log(`🤖 Bot conectado como ${c.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping') {
      return interaction.reply({ content: 'pong 🏓', ephemeral: true });
    }
  } catch (err) {
    console.error(err);
    if (interaction.isRepliable()) {
      interaction.reply({ content: 'Ocurrió un error.', ephemeral: true }).catch(()=>{});
    }
  }
});

client.login(process.env.DISCORD_TOKEN);