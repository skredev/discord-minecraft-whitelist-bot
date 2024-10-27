import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from "commandkit";
import { SlashCommandBuilder } from "discord.js";
import { promises as fs } from "fs";
import minecraftPlayer from "minecraft-player";

export const data = new SlashCommandBuilder()
  .setName("whitelist")
  .setDescription("Whitelist a user")
  .addStringOption((option) =>
    option
      .setName("username")
      .setDescription("Username to whitelist.")
      .setRequired(true)
  );

export async function run({ interaction, client, handler }: SlashCommandProps) {
  const username = interaction.options.getString("username") || "";

  const whitelistJson = await fs.readFile(
    __dirname + "/../../whitelist.json",
    "utf8"
  );

  const whitelistData = JSON.parse(whitelistJson);

  try {
    const playerData = await minecraftPlayer(username);
    whitelistData.push({
      uuid: playerData.uuid,
      name: username,
    });
  } catch (error) {
    console.error("Fehler beim Abrufen des Minecraft-Spielers: ", username);
    interaction.reply("Fehler beim Abrufen des Minecraft-Spielers: " + username + "! ❌");
    return
  }

  fs.writeFile(
    __dirname + "/../../whitelist.json",
    JSON.stringify(whitelistData)
  );

  interaction.reply(username + "! ✅");
}

export const options: CommandOptions = {};
