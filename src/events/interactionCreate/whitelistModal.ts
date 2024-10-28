import "dotenv/config";

import type { Interaction } from "discord.js";
import { Rcon } from "rcon-client";

export default async function (interaction: Interaction) {
  if (
    !interaction.isModalSubmit() ||
    interaction.customId !== "whitelist-modal" ||
    !interaction.guild
  )
    return;

  const { RCON_IP, RCON_PORT, RCON_PASSWORD, WHITELIST_ROLE_ID } = process.env;

  if (!RCON_IP || !RCON_PORT || !RCON_PASSWORD) {
    console.error("Error: RCON environment variables are missing");
    return;
  }

  if (
    WHITELIST_ROLE_ID &&
    !interaction.guild.members.me?.permissions.has("ManageRoles")
  ) {
    console.error("Error: Bot lacks permissions to manage the whitelist role");
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

        if (WHITELIST_ROLE_ID) {
          const whitelistRole = interaction.guild.roles.cache.find(
            (role) => role.id === WHITELIST_ROLE_ID
          );
          if (whitelistRole) {
            const member = await interaction.guild.members.fetch(
              interaction.user.id
            );

            try {
              await member.roles.add(whitelistRole);
              console.log("Added role to user: " + member.displayName);
            } catch (error) {
              console.error("Error: Problem with adding role:", error);
              await interaction.reply(
                "There was an error adding the role. Please try again later."
              );
            }
          } else {
            console.error("Whitelist role not found.");
          }
        }
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
      console.error("Error: Problem with sending the command: ", error);
    } finally {
      rcon.end();
    }
  } catch (error) {
    console.error("Error while establishing the RCON connection: ", error);
    return;
  }
}
