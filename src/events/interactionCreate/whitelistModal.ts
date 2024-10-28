import "dotenv/config";

import type { Interaction } from "discord.js";
import { Rcon } from "rcon-client";

export default async function (interaction: Interaction) {
  if (
    !interaction.isModalSubmit() ||
    interaction.customId !== "whitelist-modal"
  )
    return;

  const { RCON_IP, RCON_PORT, RCON_PASSWORD } = process.env;
  if (!RCON_IP || !RCON_PORT || !RCON_PASSWORD) {
    console.error("RCON environment variables are missing");
    return;
  }

  try {
    const rcon = await Rcon.connect({
      host: RCON_IP,
      port: Number(RCON_PORT),
      password: RCON_PASSWORD,
    });
    console.info("RCON connection successfully established.");

    const usernameInput = interaction.fields.getTextInputValue("usernameInput");

    try {
      const response = await rcon.send("whitelist add " + usernameInput);

      if (response.includes("That player does not exist")) {
        console.log("RCON Response: " + response);
        await interaction.reply({
          content: "``That player does not exist!`` \u274C",
          ephemeral: true,
        });
      } else if (response.includes("Added")) {
        console.log("RCON Response: " + response);
        await interaction.reply({
          content: "``" + usernameInput + "`` \u2705",
          ephemeral: true,
        });
      } else if (response.includes("Player is already whitelisted")) {
        console.log("RCON Response: " + response);
        await interaction.reply({
          content: "``Player is already whitelisted!`` \u274C",
          ephemeral: true,
        });
      } else {
        console.log("Unbekannte Antwort vom Server: ", response);
      }
    } catch (error) {
      console.error("Error sending the command: ", error);
    } finally {
      rcon.end();
    }
  } catch (error) {
    console.error("Error while establishing the RCON connection: ", error);
    return;
  }
}
