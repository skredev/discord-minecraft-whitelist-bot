import {
  __name
} from "../../chunk-H736K5TN.js";

// src/events/interactionCreate/whitelistModal.ts
import "dotenv/config";
import { Rcon } from "rcon-client";
var rconClient = null;
async function getRconClient() {
  const { RCON_IP, RCON_PORT, RCON_PASSWORD } = process.env;
  if (!RCON_IP || !RCON_PORT || !RCON_PASSWORD) {
    throw new Error("RCON environment variables are missing");
  }
  if (!rconClient) {
    rconClient = await Rcon.connect({
      host: RCON_IP,
      port: Number(RCON_PORT),
      password: RCON_PASSWORD
    });
    console.info("New RCON connection established.");
  } else {
    try {
      await rconClient.send("list");
    } catch {
      rconClient = await Rcon.connect({
        host: RCON_IP,
        port: Number(RCON_PORT),
        password: RCON_PASSWORD
      });
      console.info("RCON connection re-established.");
    }
  }
  return rconClient;
}
__name(getRconClient, "getRconClient");
async function whitelistModal_default(interaction) {
  if (!interaction.isModalSubmit() || interaction.customId !== "whitelist-modal" || !interaction.guild)
    return;
  const { RCON_IP, RCON_PORT, RCON_PASSWORD, WHITELIST_ROLE_ID } = process.env;
  if (!RCON_IP || !RCON_PORT || !RCON_PASSWORD) {
    console.error("RCON environment variables are missing");
    return;
  }
  if (WHITELIST_ROLE_ID && !interaction.guild.members.me?.permissions.has("ManageRoles")) {
    console.error("Bot lacks permissions to manage the whitelist role");
    return;
  }
  try {
    const rcon = await getRconClient();
    const usernameInput = interaction.fields.getTextInputValue("usernameInput");
    const response = await rcon.send(`whitelist add ${usernameInput}`);
    if (response.includes("That player does not exist")) {
      console.log(`RCON Response: ${response}`);
      await interaction.reply({
        content: "``That player does not exist!`` \u274C",
        ephemeral: true
      });
    } else if (response.includes("Added")) {
      console.log(`RCON Response: ${response}`);
      await interaction.reply({
        content: `\`\`${usernameInput}\`\` \u2705`,
        ephemeral: true
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
            console.error("Problem with adding role:", error);
            await interaction.reply(
              "There was an error adding the role. Please try again later."
            );
          }
        } else {
          console.error("Whitelist role not found.");
        }
      }
    } else if (response.includes("Player is already whitelisted")) {
      console.log(`RCON Response: ${response}`);
      await interaction.reply({
        content: "``Player is already whitelisted!`` \u274C",
        ephemeral: true
      });
    } else {
      console.log("Unknown server response: ", response);
    }
  } catch (error) {
    console.error("Error while processing whitelist command: ", error);
    rconClient = null;
    await interaction.reply({
      content: "There was an error processing your request. Please try again later.",
      ephemeral: true
    });
  }
}
__name(whitelistModal_default, "default");
export {
  whitelistModal_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9pbnRlcmFjdGlvbkNyZWF0ZS93aGl0ZWxpc3RNb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IFJjb24gfSBmcm9tIFwicmNvbi1jbGllbnRcIjtcclxuXHJcbmxldCByY29uQ2xpZW50OiBSY29uIHwgbnVsbCA9IG51bGw7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSY29uQ2xpZW50KCk6IFByb21pc2U8UmNvbj4ge1xyXG4gIGNvbnN0IHsgUkNPTl9JUCwgUkNPTl9QT1JULCBSQ09OX1BBU1NXT1JEIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgaWYgKCFSQ09OX0lQIHx8ICFSQ09OX1BPUlQgfHwgIVJDT05fUEFTU1dPUkQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlJDT04gZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBtaXNzaW5nXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFyY29uQ2xpZW50KSB7XHJcbiAgICByY29uQ2xpZW50ID0gYXdhaXQgUmNvbi5jb25uZWN0KHtcclxuICAgICAgaG9zdDogUkNPTl9JUCxcclxuICAgICAgcG9ydDogTnVtYmVyKFJDT05fUE9SVCksXHJcbiAgICAgIHBhc3N3b3JkOiBSQ09OX1BBU1NXT1JELFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmluZm8oXCJOZXcgUkNPTiBjb25uZWN0aW9uIGVzdGFibGlzaGVkLlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcmNvbkNsaWVudC5zZW5kKFwibGlzdFwiKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByY29uQ2xpZW50ID0gYXdhaXQgUmNvbi5jb25uZWN0KHtcclxuICAgICAgICBob3N0OiBSQ09OX0lQLFxyXG4gICAgICAgIHBvcnQ6IE51bWJlcihSQ09OX1BPUlQpLFxyXG4gICAgICAgIHBhc3N3b3JkOiBSQ09OX1BBU1NXT1JELFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5pbmZvKFwiUkNPTiBjb25uZWN0aW9uIHJlLWVzdGFibGlzaGVkLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByY29uQ2xpZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoaW50ZXJhY3Rpb246IEludGVyYWN0aW9uKSB7XHJcbiAgaWYgKFxyXG4gICAgIWludGVyYWN0aW9uLmlzTW9kYWxTdWJtaXQoKSB8fFxyXG4gICAgaW50ZXJhY3Rpb24uY3VzdG9tSWQgIT09IFwid2hpdGVsaXN0LW1vZGFsXCIgfHxcclxuICAgICFpbnRlcmFjdGlvbi5ndWlsZFxyXG4gIClcclxuICAgIHJldHVybjtcclxuXHJcbiAgY29uc3QgeyBSQ09OX0lQLCBSQ09OX1BPUlQsIFJDT05fUEFTU1dPUkQsIFdISVRFTElTVF9ST0xFX0lEIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgaWYgKCFSQ09OX0lQIHx8ICFSQ09OX1BPUlQgfHwgIVJDT05fUEFTU1dPUkQpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJSQ09OIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgbWlzc2luZ1wiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIFdISVRFTElTVF9ST0xFX0lEICYmXHJcbiAgICAhaW50ZXJhY3Rpb24uZ3VpbGQubWVtYmVycy5tZT8ucGVybWlzc2lvbnMuaGFzKFwiTWFuYWdlUm9sZXNcIilcclxuICApIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJCb3QgbGFja3MgcGVybWlzc2lvbnMgdG8gbWFuYWdlIHRoZSB3aGl0ZWxpc3Qgcm9sZVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByY29uID0gYXdhaXQgZ2V0UmNvbkNsaWVudCgpO1xyXG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGludGVyYWN0aW9uLmZpZWxkcy5nZXRUZXh0SW5wdXRWYWx1ZShcInVzZXJuYW1lSW5wdXRcIik7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByY29uLnNlbmQoYHdoaXRlbGlzdCBhZGQgJHt1c2VybmFtZUlucHV0fWApO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5pbmNsdWRlcyhcIlRoYXQgcGxheWVyIGRvZXMgbm90IGV4aXN0XCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBSQ09OIFJlc3BvbnNlOiAke3Jlc3BvbnNlfWApO1xyXG4gICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgY29udGVudDogXCJgYFRoYXQgcGxheWVyIGRvZXMgbm90IGV4aXN0IWBgIFxcdTI3NENcIixcclxuICAgICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5pbmNsdWRlcyhcIkFkZGVkXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBSQ09OIFJlc3BvbnNlOiAke3Jlc3BvbnNlfWApO1xyXG4gICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgY29udGVudDogYFxcYFxcYCR7dXNlcm5hbWVJbnB1dH1cXGBcXGAgXFx1MjcwNWAsXHJcbiAgICAgICAgZXBoZW1lcmFsOiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChXSElURUxJU1RfUk9MRV9JRCkge1xyXG4gICAgICAgIGNvbnN0IHdoaXRlbGlzdFJvbGUgPSBpbnRlcmFjdGlvbi5ndWlsZC5yb2xlcy5jYWNoZS5maW5kKFxyXG4gICAgICAgICAgKHJvbGUpID0+IHJvbGUuaWQgPT09IFdISVRFTElTVF9ST0xFX0lEXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAod2hpdGVsaXN0Um9sZSkge1xyXG4gICAgICAgICAgY29uc3QgbWVtYmVyID0gYXdhaXQgaW50ZXJhY3Rpb24uZ3VpbGQubWVtYmVycy5mZXRjaChcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb24udXNlci5pZFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBtZW1iZXIucm9sZXMuYWRkKHdoaXRlbGlzdFJvbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIHJvbGUgdG8gdXNlcjogXCIgKyBtZW1iZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlByb2JsZW0gd2l0aCBhZGRpbmcgcm9sZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseShcclxuICAgICAgICAgICAgICBcIlRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgdGhlIHJvbGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIldoaXRlbGlzdCByb2xlIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmluY2x1ZGVzKFwiUGxheWVyIGlzIGFscmVhZHkgd2hpdGVsaXN0ZWRcIikpIHtcclxuICAgICAgY29uc29sZS5sb2coYFJDT04gUmVzcG9uc2U6ICR7cmVzcG9uc2V9YCk7XHJcbiAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICBjb250ZW50OiBcImBgUGxheWVyIGlzIGFscmVhZHkgd2hpdGVsaXN0ZWQhYGAgXFx1Mjc0Q1wiLFxyXG4gICAgICAgIGVwaGVtZXJhbDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVua25vd24gc2VydmVyIHJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgcHJvY2Vzc2luZyB3aGl0ZWxpc3QgY29tbWFuZDogXCIsIGVycm9yKTtcclxuICAgIHJjb25DbGllbnQgPSBudWxsO1xyXG4gICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxyXG4gICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQSxPQUFPO0FBR1AsU0FBUyxZQUFZO0FBRXJCLElBQUksYUFBMEI7QUFFOUIsZUFBZSxnQkFBK0I7QUFDNUMsUUFBTSxFQUFFLFNBQVMsV0FBVyxjQUFjLElBQUksUUFBUTtBQUV0RCxNQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQzVDLFVBQU0sSUFBSSxNQUFNLHdDQUF3QztBQUFBLEVBQzFEO0FBRUEsTUFBSSxDQUFDLFlBQVk7QUFDZixpQkFBYSxNQUFNLEtBQUssUUFBUTtBQUFBLE1BQzlCLE1BQU07QUFBQSxNQUNOLE1BQU0sT0FBTyxTQUFTO0FBQUEsTUFDdEIsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUNELFlBQVEsS0FBSyxrQ0FBa0M7QUFBQSxFQUNqRCxPQUFPO0FBQ0wsUUFBSTtBQUNGLFlBQU0sV0FBVyxLQUFLLE1BQU07QUFBQSxJQUM5QixRQUFRO0FBQ04sbUJBQWEsTUFBTSxLQUFLLFFBQVE7QUFBQSxRQUM5QixNQUFNO0FBQUEsUUFDTixNQUFNLE9BQU8sU0FBUztBQUFBLFFBQ3RCLFVBQVU7QUFBQSxNQUNaLENBQUM7QUFDRCxjQUFRLEtBQUssaUNBQWlDO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUNUO0FBNUJlO0FBOEJmLGVBQU8sdUJBQXdCLGFBQTBCO0FBQ3ZELE1BQ0UsQ0FBQyxZQUFZLGNBQWMsS0FDM0IsWUFBWSxhQUFhLHFCQUN6QixDQUFDLFlBQVk7QUFFYjtBQUVGLFFBQU0sRUFBRSxTQUFTLFdBQVcsZUFBZSxrQkFBa0IsSUFBSSxRQUFRO0FBRXpFLE1BQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWU7QUFDNUMsWUFBUSxNQUFNLHdDQUF3QztBQUN0RDtBQUFBLEVBQ0Y7QUFFQSxNQUNFLHFCQUNBLENBQUMsWUFBWSxNQUFNLFFBQVEsSUFBSSxZQUFZLElBQUksYUFBYSxHQUM1RDtBQUNBLFlBQVEsTUFBTSxvREFBb0Q7QUFDbEU7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLGNBQWM7QUFDakMsVUFBTSxnQkFBZ0IsWUFBWSxPQUFPLGtCQUFrQixlQUFlO0FBRTFFLFVBQU0sV0FBVyxNQUFNLEtBQUssS0FBSyxpQkFBaUIsYUFBYSxFQUFFO0FBRWpFLFFBQUksU0FBUyxTQUFTLDRCQUE0QixHQUFHO0FBQ25ELGNBQVEsSUFBSSxrQkFBa0IsUUFBUSxFQUFFO0FBQ3hDLFlBQU0sWUFBWSxNQUFNO0FBQUEsUUFDdEIsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0gsV0FBVyxTQUFTLFNBQVMsT0FBTyxHQUFHO0FBQ3JDLGNBQVEsSUFBSSxrQkFBa0IsUUFBUSxFQUFFO0FBQ3hDLFlBQU0sWUFBWSxNQUFNO0FBQUEsUUFDdEIsU0FBUyxPQUFPLGFBQWE7QUFBQSxRQUM3QixXQUFXO0FBQUEsTUFDYixDQUFDO0FBRUQsVUFBSSxtQkFBbUI7QUFDckIsY0FBTSxnQkFBZ0IsWUFBWSxNQUFNLE1BQU0sTUFBTTtBQUFBLFVBQ2xELENBQUMsU0FBUyxLQUFLLE9BQU87QUFBQSxRQUN4QjtBQUNBLFlBQUksZUFBZTtBQUNqQixnQkFBTSxTQUFTLE1BQU0sWUFBWSxNQUFNLFFBQVE7QUFBQSxZQUM3QyxZQUFZLEtBQUs7QUFBQSxVQUNuQjtBQUVBLGNBQUk7QUFDRixrQkFBTSxPQUFPLE1BQU0sSUFBSSxhQUFhO0FBQ3BDLG9CQUFRLElBQUkseUJBQXlCLE9BQU8sV0FBVztBQUFBLFVBQ3pELFNBQVMsT0FBTztBQUNkLG9CQUFRLE1BQU0sNkJBQTZCLEtBQUs7QUFDaEQsa0JBQU0sWUFBWTtBQUFBLGNBQ2hCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLE9BQU87QUFDTCxrQkFBUSxNQUFNLDJCQUEyQjtBQUFBLFFBQzNDO0FBQUEsTUFDRjtBQUFBLElBQ0YsV0FBVyxTQUFTLFNBQVMsK0JBQStCLEdBQUc7QUFDN0QsY0FBUSxJQUFJLGtCQUFrQixRQUFRLEVBQUU7QUFDeEMsWUFBTSxZQUFZLE1BQU07QUFBQSxRQUN0QixTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSCxPQUFPO0FBQ0wsY0FBUSxJQUFJLDZCQUE2QixRQUFRO0FBQUEsSUFDbkQ7QUFBQSxFQUNGLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSw4Q0FBOEMsS0FBSztBQUNqRSxpQkFBYTtBQUNiLFVBQU0sWUFBWSxNQUFNO0FBQUEsTUFDdEIsU0FDRTtBQUFBLE1BQ0YsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQWxGTzsiLAogICJuYW1lcyI6IFtdCn0K