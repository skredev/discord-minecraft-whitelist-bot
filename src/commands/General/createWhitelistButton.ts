import { ButtonKit } from "commandkit";
import {
  ButtonStyle,
  ActionRowBuilder,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";

import type {
  SlashCommandProps,
  CommandOptions,
} from "commandkit";

export const data = new SlashCommandBuilder()
  .setName("create-whitelist-button")
  .setDescription("Create the whitelist Button")
  .addStringOption((option) =>
    option
      .setName("title")
      .setDescription("Title displayed in the embed")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("description")
      .setDescription("Description displayed in the embed")
  );

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const Embed = new EmbedBuilder()
    .setColor("#b9d7d7")
    .setTitle(
      client.user.displayName + " " + interaction.options.getString("title")
    )
    .setAuthor({
      name: client.user.displayName,
      iconURL: client.user.displayAvatarURL(),
    })
    .setDescription(interaction.options.getString("description") ?? "")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter({ text: "Minecraft Whitelist Bot" });

  const button = new ButtonKit()
    .setEmoji("📝")
    .setStyle(ButtonStyle.Success)
    .setCustomId("button");

  const buttonRow = new ActionRowBuilder<ButtonKit>().addComponents(button);

  if (!interaction.channel?.isSendable || interaction.channel.isDMBased())
    return;

  const message = await interaction.channel.send({
    embeds: [Embed],
    components: [buttonRow],
  });

  await interaction.reply({
    content: "``Whitelist button created successfully`` \u2705",
    ephemeral: true,
  });
}

export const options: CommandOptions = {
  userPermissions: ["Administrator"],
};
