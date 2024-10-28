import { ButtonKit } from "commandkit";
import {
  ButtonStyle,
  ActionRowBuilder,
} from "discord.js";

import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from "commandkit";

export const data: CommandData = {
  name: "createbutton",
  description: "Create the whitelist Button",
};

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const button = new ButtonKit()
    .setEmoji("📝")
    .setStyle(ButtonStyle.Success)
    .setCustomId("button");

  const buttonRow = new ActionRowBuilder<ButtonKit>().addComponents(button);

  if (!interaction.channel?.isSendable || interaction.channel.isDMBased())
    return;
  const message = await interaction.channel.send({
    content: "Whitelist:",
    components: [buttonRow],
  });
}

export const options: CommandOptions = {
  userPermissions: ["Administrator"],
};
