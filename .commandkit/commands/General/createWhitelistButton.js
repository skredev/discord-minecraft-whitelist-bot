import {
  __name
} from "../../chunk-H736K5TN.js";

// src/commands/General/createWhitelistButton.ts
import { ButtonKit } from "commandkit";
import {
  ButtonStyle,
  ActionRowBuilder,
  EmbedBuilder,
  SlashCommandBuilder
} from "discord.js";
var data = new SlashCommandBuilder().setName("create-whitelist-button").setDescription("Create the whitelist Button").addStringOption(
  (option) => option.setName("title").setDescription("Title displayed in the embed").setRequired(true)
).addStringOption(
  (option) => option.setName("description").setDescription("Description displayed in the embed")
);
async function run({ interaction, client, handler }) {
  const Embed = new EmbedBuilder().setColor("#2b2d31").setTitle(
    interaction.options.getString("title")
  ).setDescription(interaction.options.getString("description") ?? "").setThumbnail(client.user.displayAvatarURL()).setFooter({ text: "Discord Minecraft Whitelist Bot", iconURL: client.user.displayAvatarURL() });
  const button = new ButtonKit().setEmoji("\u{1F4DD}").setStyle(ButtonStyle.Success).setCustomId("button");
  const buttonRow = new ActionRowBuilder().addComponents(button);
  if (!interaction.channel?.isSendable || interaction.channel.isDMBased())
    return;
  const message = await interaction.channel.send({
    embeds: [Embed],
    components: [buttonRow]
  });
  await interaction.reply({
    content: "``Whitelist button created successfully`` \u2705",
    ephemeral: true
  });
}
__name(run, "run");
var options = {
  userPermissions: ["Administrator"]
};
export {
  data,
  options,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0dlbmVyYWwvY3JlYXRlV2hpdGVsaXN0QnV0dG9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBCdXR0b25LaXQgfSBmcm9tIFwiY29tbWFuZGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvblN0eWxlLFxyXG4gIEFjdGlvblJvd0J1aWxkZXIsXHJcbiAgRW1iZWRCdWlsZGVyLFxyXG4gIFNsYXNoQ29tbWFuZEJ1aWxkZXIsXHJcbn0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHtcclxuICBTbGFzaENvbW1hbmRQcm9wcyxcclxuICBDb21tYW5kT3B0aW9ucyxcclxufSBmcm9tIFwiY29tbWFuZGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGEgPSBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXHJcbiAgLnNldE5hbWUoXCJjcmVhdGUtd2hpdGVsaXN0LWJ1dHRvblwiKVxyXG4gIC5zZXREZXNjcmlwdGlvbihcIkNyZWF0ZSB0aGUgd2hpdGVsaXN0IEJ1dHRvblwiKVxyXG4gIC5hZGRTdHJpbmdPcHRpb24oKG9wdGlvbikgPT5cclxuICAgIG9wdGlvblxyXG4gICAgICAuc2V0TmFtZShcInRpdGxlXCIpXHJcbiAgICAgIC5zZXREZXNjcmlwdGlvbihcIlRpdGxlIGRpc3BsYXllZCBpbiB0aGUgZW1iZWRcIilcclxuICAgICAgLnNldFJlcXVpcmVkKHRydWUpXHJcbiAgKVxyXG4gIC5hZGRTdHJpbmdPcHRpb24oKG9wdGlvbikgPT5cclxuICAgIG9wdGlvblxyXG4gICAgICAuc2V0TmFtZShcImRlc2NyaXB0aW9uXCIpXHJcbiAgICAgIC5zZXREZXNjcmlwdGlvbihcIkRlc2NyaXB0aW9uIGRpc3BsYXllZCBpbiB0aGUgZW1iZWRcIilcclxuICApO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bih7IGludGVyYWN0aW9uLCBjbGllbnQsIGhhbmRsZXIgfTogU2xhc2hDb21tYW5kUHJvcHMpIHtcclxuICBjb25zdCBFbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxyXG4gICAgLnNldENvbG9yKFwiIzJiMmQzMVwiKVxyXG4gICAgLnNldFRpdGxlKFxyXG4gICAgICBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFN0cmluZyhcInRpdGxlXCIpXHJcbiAgICApXHJcbiAgICAuc2V0RGVzY3JpcHRpb24oaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRTdHJpbmcoXCJkZXNjcmlwdGlvblwiKSA/PyBcIlwiKVxyXG4gICAgLnNldFRodW1ibmFpbChjbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICAuc2V0Rm9vdGVyKHsgdGV4dDogXCJEaXNjb3JkIE1pbmVjcmFmdCBXaGl0ZWxpc3QgQm90XCIsIGljb25VUkw6IGNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSB9KTtcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbktpdCgpXHJcbiAgICAuc2V0RW1vamkoXCJcdUQ4M0RcdURDRERcIilcclxuICAgIC5zZXRTdHlsZShCdXR0b25TdHlsZS5TdWNjZXNzKVxyXG4gICAgLnNldEN1c3RvbUlkKFwiYnV0dG9uXCIpO1xyXG5cclxuICBjb25zdCBidXR0b25Sb3cgPSBuZXcgQWN0aW9uUm93QnVpbGRlcjxCdXR0b25LaXQ+KCkuYWRkQ29tcG9uZW50cyhidXR0b24pO1xyXG5cclxuICBpZiAoIWludGVyYWN0aW9uLmNoYW5uZWw/LmlzU2VuZGFibGUgfHwgaW50ZXJhY3Rpb24uY2hhbm5lbC5pc0RNQmFzZWQoKSlcclxuICAgIHJldHVybjtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGludGVyYWN0aW9uLmNoYW5uZWwuc2VuZCh7XHJcbiAgICBlbWJlZHM6IFtFbWJlZF0sXHJcbiAgICBjb21wb25lbnRzOiBbYnV0dG9uUm93XSxcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgY29udGVudDogXCJgYFdoaXRlbGlzdCBidXR0b24gY3JlYXRlZCBzdWNjZXNzZnVsbHlgYCBcXHUyNzA1XCIsXHJcbiAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zOiBDb21tYW5kT3B0aW9ucyA9IHtcclxuICB1c2VyUGVybWlzc2lvbnM6IFtcIkFkbWluaXN0cmF0b3JcIl0sXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUEsU0FBUyxpQkFBaUI7QUFDMUI7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQU9BLElBQU0sT0FBTyxJQUFJLG9CQUFvQixFQUN6QyxRQUFRLHlCQUF5QixFQUNqQyxlQUFlLDZCQUE2QixFQUM1QztBQUFBLEVBQWdCLENBQUMsV0FDaEIsT0FDRyxRQUFRLE9BQU8sRUFDZixlQUFlLDhCQUE4QixFQUM3QyxZQUFZLElBQUk7QUFDckIsRUFDQztBQUFBLEVBQWdCLENBQUMsV0FDaEIsT0FDRyxRQUFRLGFBQWEsRUFDckIsZUFBZSxvQ0FBb0M7QUFDeEQ7QUFFRixlQUFzQixJQUFJLEVBQUUsYUFBYSxRQUFRLFFBQVEsR0FBc0I7QUFDN0UsUUFBTSxRQUFRLElBQUksYUFBYSxFQUM1QixTQUFTLFNBQVMsRUFDbEI7QUFBQSxJQUNDLFlBQVksUUFBUSxVQUFVLE9BQU87QUFBQSxFQUN2QyxFQUNDLGVBQWUsWUFBWSxRQUFRLFVBQVUsYUFBYSxLQUFLLEVBQUUsRUFDakUsYUFBYSxPQUFPLEtBQUssaUJBQWlCLENBQUMsRUFDM0MsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLFNBQVMsT0FBTyxLQUFLLGlCQUFpQixFQUFFLENBQUM7QUFFakcsUUFBTSxTQUFTLElBQUksVUFBVSxFQUMxQixTQUFTLFdBQUksRUFDYixTQUFTLFlBQVksT0FBTyxFQUM1QixZQUFZLFFBQVE7QUFFdkIsUUFBTSxZQUFZLElBQUksaUJBQTRCLEVBQUUsY0FBYyxNQUFNO0FBRXhFLE1BQUksQ0FBQyxZQUFZLFNBQVMsY0FBYyxZQUFZLFFBQVEsVUFBVTtBQUNwRTtBQUVGLFFBQU0sVUFBVSxNQUFNLFlBQVksUUFBUSxLQUFLO0FBQUEsSUFDN0MsUUFBUSxDQUFDLEtBQUs7QUFBQSxJQUNkLFlBQVksQ0FBQyxTQUFTO0FBQUEsRUFDeEIsQ0FBQztBQUVELFFBQU0sWUFBWSxNQUFNO0FBQUEsSUFDdEIsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUNIO0FBN0JzQjtBQStCZixJQUFNLFVBQTBCO0FBQUEsRUFDckMsaUJBQWlCLENBQUMsZUFBZTtBQUNuQzsiLAogICJuYW1lcyI6IFtdCn0K