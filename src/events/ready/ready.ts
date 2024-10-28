import { type Client, ActivityType } from 'discord.js';

export default (client: Client<true>) => {
  console.log(`${client.user.tag} running`);
  client.user.setPresence({
    activities: [{ name: `😎👉👉`, type: ActivityType.Watching }],
  });
};
