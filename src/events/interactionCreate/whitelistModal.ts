import type { Interaction } from "discord.js";
import minecraftPlayer from "minecraft-player";
import { promises as fs } from "fs";
import { join } from "path";

const whitelistPath = join(__dirname, "../../whitelist.json");

export default async function (interaction: Interaction) {
  if (!interaction.isModalSubmit()) return;

  const usernameInput = interaction.fields.getTextInputValue("usernameInput");
  const whitelistData = JSON.parse(await fs.readFile(whitelistPath, "utf8"));

  try {
    const playerData = await minecraftPlayer(usernameInput);
    whitelistData.push({
      uuid: playerData.uuid,
      name: usernameInput,
    });
  } catch (error) {
    console.error(
      "Fehler beim Abrufen des Minecraft-Spielers: ",
      usernameInput
    );
    interaction.reply(
      "Fehler beim Abrufen des Minecraft-Spielers: " +
        usernameInput +
        "! \u274C"
    );
    return;
  }

  try {
    await fs.writeFile(whitelistPath, JSON.stringify(whitelistData));
    interaction.reply(usernameInput + "! \u2705");
    console.log(usernameInput + " added to whitelist");

    setTimeout(() => interaction.deleteReply(), 3000);
  } catch (error) {
    console.error("Fehler beim Schreiben in die Datei: ", error);
    interaction.editReply(
      "Fehler beim Aktualisieren der Whitelist-Datei! \u274C"
    );
  }
}
