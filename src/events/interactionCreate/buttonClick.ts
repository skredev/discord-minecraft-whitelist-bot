import type { Interaction } from "discord.js";
import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

export default async function (
  interaction: Interaction
) {
  if (!interaction.isButton()) return;

  const modal = new ModalBuilder()
    .setCustomId("whitelistmodal")
    .setTitle("Whitelist");

  const usernameInput = new TextInputBuilder()
    .setCustomId("usernameInput")
    .setLabel("Username")
    .setStyle(TextInputStyle.Short);

  modal.addComponents(
    new ActionRowBuilder<TextInputBuilder>().addComponents(usernameInput)
  );

  await interaction.showModal(modal);
}
