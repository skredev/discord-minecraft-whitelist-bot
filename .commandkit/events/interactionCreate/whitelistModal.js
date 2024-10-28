import {
  __name
} from "../../chunk-H736K5TN.js";

// src/events/interactionCreate/whitelistModal.ts
import "dotenv/config";
import { Rcon } from "rcon-client";
async function whitelistModal_default(interaction) {
  if (!interaction.isModalSubmit() || interaction.customId !== "whitelist-modal" || !interaction.guild)
    return;
  const { RCON_IP, RCON_PORT, RCON_PASSWORD, WHITELIST_ROLE_ID } = process.env;
  if (!RCON_IP || !RCON_PORT || !RCON_PASSWORD) {
    console.error("Error: RCON environment variables are missing");
    return;
  }
  if (WHITELIST_ROLE_ID && !interaction.guild.members.me?.permissions.has("ManageRoles")) {
    console.error("Error: Bot lacks permissions to manage the whitelist role");
    return;
  }
  try {
    const rcon = await Rcon.connect({
      host: RCON_IP,
      port: Number(RCON_PORT),
      password: RCON_PASSWORD
    });
    console.info("RCON connection successfully established.");
    const usernameInput = interaction.fields.getTextInputValue("usernameInput");
    try {
      const response = await rcon.send("whitelist add " + usernameInput);
      if (response.includes("That player does not exist")) {
        console.log("RCON Response: " + response);
        await interaction.reply({
          content: "``That player does not exist!`` \u274C",
          ephemeral: true
        });
      } else if (response.includes("Added")) {
        console.log("RCON Response: " + response);
        await interaction.reply({
          content: "``" + usernameInput + "`` \u2705",
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
          ephemeral: true
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
__name(whitelistModal_default, "default");
export {
  whitelistModal_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9pbnRlcmFjdGlvbkNyZWF0ZS93aGl0ZWxpc3RNb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IFJjb24gfSBmcm9tIFwicmNvbi1jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb24pIHtcclxuICBpZiAoXHJcbiAgICAhaW50ZXJhY3Rpb24uaXNNb2RhbFN1Ym1pdCgpIHx8XHJcbiAgICBpbnRlcmFjdGlvbi5jdXN0b21JZCAhPT0gXCJ3aGl0ZWxpc3QtbW9kYWxcIiB8fFxyXG4gICAgIWludGVyYWN0aW9uLmd1aWxkXHJcbiAgKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBjb25zdCB7IFJDT05fSVAsIFJDT05fUE9SVCwgUkNPTl9QQVNTV09SRCwgV0hJVEVMSVNUX1JPTEVfSUQgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuICBpZiAoIVJDT05fSVAgfHwgIVJDT05fUE9SVCB8fCAhUkNPTl9QQVNTV09SRCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBSQ09OIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgbWlzc2luZ1wiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIFdISVRFTElTVF9ST0xFX0lEICYmXHJcbiAgICAhaW50ZXJhY3Rpb24uZ3VpbGQubWVtYmVycy5tZT8ucGVybWlzc2lvbnMuaGFzKFwiTWFuYWdlUm9sZXNcIilcclxuICApIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogQm90IGxhY2tzIHBlcm1pc3Npb25zIHRvIG1hbmFnZSB0aGUgd2hpdGVsaXN0IHJvbGVcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmNvbiA9IGF3YWl0IFJjb24uY29ubmVjdCh7XHJcbiAgICAgIGhvc3Q6IFJDT05fSVAsXHJcbiAgICAgIHBvcnQ6IE51bWJlcihSQ09OX1BPUlQpLFxyXG4gICAgICBwYXNzd29yZDogUkNPTl9QQVNTV09SRCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5pbmZvKFwiUkNPTiBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZC5cIik7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGludGVyYWN0aW9uLmZpZWxkcy5nZXRUZXh0SW5wdXRWYWx1ZShcInVzZXJuYW1lSW5wdXRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByY29uLnNlbmQoXCJ3aGl0ZWxpc3QgYWRkIFwiICsgdXNlcm5hbWVJbnB1dCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuaW5jbHVkZXMoXCJUaGF0IHBsYXllciBkb2VzIG5vdCBleGlzdFwiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkNPTiBSZXNwb25zZTogXCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgY29udGVudDogXCJgYFRoYXQgcGxheWVyIGRvZXMgbm90IGV4aXN0IWBgIFxcdTI3NENcIixcclxuICAgICAgICAgIGVwaGVtZXJhbDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5pbmNsdWRlcyhcIkFkZGVkXCIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSQ09OIFJlc3BvbnNlOiBcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcImBgXCIgKyB1c2VybmFtZUlucHV0ICsgXCJgYCBcXHUyNzA1XCIsXHJcbiAgICAgICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChXSElURUxJU1RfUk9MRV9JRCkge1xyXG4gICAgICAgICAgY29uc3Qgd2hpdGVsaXN0Um9sZSA9IGludGVyYWN0aW9uLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQoXHJcbiAgICAgICAgICAgIChyb2xlKSA9PiByb2xlLmlkID09PSBXSElURUxJU1RfUk9MRV9JRFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh3aGl0ZWxpc3RSb2xlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IGF3YWl0IGludGVyYWN0aW9uLmd1aWxkLm1lbWJlcnMuZmV0Y2goXHJcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb24udXNlci5pZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBhd2FpdCBtZW1iZXIucm9sZXMuYWRkKHdoaXRlbGlzdFJvbGUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgcm9sZSB0byB1c2VyOiBcIiArIG1lbWJlci5kaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBQcm9ibGVtIHdpdGggYWRkaW5nIHJvbGU6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseShcclxuICAgICAgICAgICAgICAgIFwiVGhlcmUgd2FzIGFuIGVycm9yIGFkZGluZyB0aGUgcm9sZS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaGl0ZWxpc3Qgcm9sZSBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5pbmNsdWRlcyhcIlBsYXllciBpcyBhbHJlYWR5IHdoaXRlbGlzdGVkXCIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSQ09OIFJlc3BvbnNlOiBcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcImBgUGxheWVyIGlzIGFscmVhZHkgd2hpdGVsaXN0ZWQhYGAgXFx1Mjc0Q1wiLFxyXG4gICAgICAgICAgZXBoZW1lcmFsOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVW5iZWthbm50ZSBBbnR3b3J0IHZvbSBTZXJ2ZXI6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogUHJvYmxlbSB3aXRoIHNlbmRpbmcgdGhlIGNvbW1hbmQ6IFwiLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICByY29uLmVuZCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgZXN0YWJsaXNoaW5nIHRoZSBSQ09OIGNvbm5lY3Rpb246IFwiLCBlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUEsT0FBTztBQUdQLFNBQVMsWUFBWTtBQUVyQixlQUFPLHVCQUF3QixhQUEwQjtBQUN2RCxNQUNFLENBQUMsWUFBWSxjQUFjLEtBQzNCLFlBQVksYUFBYSxxQkFDekIsQ0FBQyxZQUFZO0FBRWI7QUFFRixRQUFNLEVBQUUsU0FBUyxXQUFXLGVBQWUsa0JBQWtCLElBQUksUUFBUTtBQUV6RSxNQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQzVDLFlBQVEsTUFBTSwrQ0FBK0M7QUFDN0Q7QUFBQSxFQUNGO0FBRUEsTUFDRSxxQkFDQSxDQUFDLFlBQVksTUFBTSxRQUFRLElBQUksWUFBWSxJQUFJLGFBQWEsR0FDNUQ7QUFDQSxZQUFRLE1BQU0sMkRBQTJEO0FBQ3pFO0FBQUEsRUFDRjtBQUVBLE1BQUk7QUFDRixVQUFNLE9BQU8sTUFBTSxLQUFLLFFBQVE7QUFBQSxNQUM5QixNQUFNO0FBQUEsTUFDTixNQUFNLE9BQU8sU0FBUztBQUFBLE1BQ3RCLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFDRCxZQUFRLEtBQUssMkNBQTJDO0FBRXhELFVBQU0sZ0JBQWdCLFlBQVksT0FBTyxrQkFBa0IsZUFBZTtBQUUxRSxRQUFJO0FBQ0YsWUFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLG1CQUFtQixhQUFhO0FBRWpFLFVBQUksU0FBUyxTQUFTLDRCQUE0QixHQUFHO0FBQ25ELGdCQUFRLElBQUksb0JBQW9CLFFBQVE7QUFDeEMsY0FBTSxZQUFZLE1BQU07QUFBQSxVQUN0QixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDSCxXQUFXLFNBQVMsU0FBUyxPQUFPLEdBQUc7QUFDckMsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUTtBQUN4QyxjQUFNLFlBQVksTUFBTTtBQUFBLFVBQ3RCLFNBQVMsT0FBTyxnQkFBZ0I7QUFBQSxVQUNoQyxXQUFXO0FBQUEsUUFDYixDQUFDO0FBRUQsWUFBSSxtQkFBbUI7QUFDckIsZ0JBQU0sZ0JBQWdCLFlBQVksTUFBTSxNQUFNLE1BQU07QUFBQSxZQUNsRCxDQUFDLFNBQVMsS0FBSyxPQUFPO0FBQUEsVUFDeEI7QUFDQSxjQUFJLGVBQWU7QUFDakIsa0JBQU0sU0FBUyxNQUFNLFlBQVksTUFBTSxRQUFRO0FBQUEsY0FDN0MsWUFBWSxLQUFLO0FBQUEsWUFDbkI7QUFFQSxnQkFBSTtBQUNGLG9CQUFNLE9BQU8sTUFBTSxJQUFJLGFBQWE7QUFDcEMsc0JBQVEsSUFBSSx5QkFBeUIsT0FBTyxXQUFXO0FBQUEsWUFDekQsU0FBUyxPQUFPO0FBQ2Qsc0JBQVEsTUFBTSxvQ0FBb0MsS0FBSztBQUN2RCxvQkFBTSxZQUFZO0FBQUEsZ0JBQ2hCO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGLE9BQU87QUFDTCxvQkFBUSxNQUFNLDJCQUEyQjtBQUFBLFVBQzNDO0FBQUEsUUFDRjtBQUFBLE1BQ0YsV0FBVyxTQUFTLFNBQVMsK0JBQStCLEdBQUc7QUFDN0QsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUTtBQUN4QyxjQUFNLFlBQVksTUFBTTtBQUFBLFVBQ3RCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiLENBQUM7QUFBQSxNQUNILE9BQU87QUFDTCxnQkFBUSxJQUFJLG1DQUFtQyxRQUFRO0FBQUEsTUFDekQ7QUFBQSxJQUNGLFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSw2Q0FBNkMsS0FBSztBQUFBLElBQ2xFLFVBQUU7QUFDQSxXQUFLLElBQUk7QUFBQSxJQUNYO0FBQUEsRUFDRixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sa0RBQWtELEtBQUs7QUFDckU7QUFBQSxFQUNGO0FBQ0Y7QUF6Rk87IiwKICAibmFtZXMiOiBbXQp9Cg==