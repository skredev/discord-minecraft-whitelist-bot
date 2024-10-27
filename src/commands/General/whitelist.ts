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

  whitelistData.push({
    uuid: await (await minecraftPlayer(username)).uuid,
    name: username,
  });

  fs.writeFile(
    __dirname + "/../../whitelist.json",
    JSON.stringify(whitelistData)
  );

  interaction.reply("Data:" + whitelistJson);
}

export const options: CommandOptions = {};
