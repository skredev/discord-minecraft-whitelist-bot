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
    console.error("RCON environment variables are missing");
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
              console.error("Error adding role:", error);
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
      console.error("Error sending the command: ", error);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9pbnRlcmFjdGlvbkNyZWF0ZS93aGl0ZWxpc3RNb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IFJjb24gfSBmcm9tIFwicmNvbi1jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb24pIHtcclxuICBpZiAoXHJcbiAgICAhaW50ZXJhY3Rpb24uaXNNb2RhbFN1Ym1pdCgpIHx8XHJcbiAgICBpbnRlcmFjdGlvbi5jdXN0b21JZCAhPT0gXCJ3aGl0ZWxpc3QtbW9kYWxcIiB8fFxyXG4gICAgIWludGVyYWN0aW9uLmd1aWxkXHJcbiAgKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBjb25zdCB7IFJDT05fSVAsIFJDT05fUE9SVCwgUkNPTl9QQVNTV09SRCwgV0hJVEVMSVNUX1JPTEVfSUQgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuICBpZiAoIVJDT05fSVAgfHwgIVJDT05fUE9SVCB8fCAhUkNPTl9QQVNTV09SRCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlJDT04gZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBtaXNzaW5nXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJjb24gPSBhd2FpdCBSY29uLmNvbm5lY3Qoe1xyXG4gICAgICBob3N0OiBSQ09OX0lQLFxyXG4gICAgICBwb3J0OiBOdW1iZXIoUkNPTl9QT1JUKSxcclxuICAgICAgcGFzc3dvcmQ6IFJDT05fUEFTU1dPUkQsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIlJDT04gY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgZXN0YWJsaXNoZWQuXCIpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBpbnRlcmFjdGlvbi5maWVsZHMuZ2V0VGV4dElucHV0VmFsdWUoXCJ1c2VybmFtZUlucHV0XCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmNvbi5zZW5kKFwid2hpdGVsaXN0IGFkZCBcIiArIHVzZXJuYW1lSW5wdXQpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmluY2x1ZGVzKFwiVGhhdCBwbGF5ZXIgZG9lcyBub3QgZXhpc3RcIikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJDT04gUmVzcG9uc2U6IFwiICsgcmVzcG9uc2UpO1xyXG4gICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiYGBUaGF0IHBsYXllciBkb2VzIG5vdCBleGlzdCFgYCBcXHUyNzRDXCIsXHJcbiAgICAgICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5jbHVkZXMoXCJBZGRlZFwiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkNPTiBSZXNwb25zZTogXCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgY29udGVudDogXCJgYFwiICsgdXNlcm5hbWVJbnB1dCArIFwiYGAgXFx1MjcwNVwiLFxyXG4gICAgICAgICAgZXBoZW1lcmFsOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoV0hJVEVMSVNUX1JPTEVfSUQpIHtcclxuICAgICAgICAgIGNvbnN0IHdoaXRlbGlzdFJvbGUgPSBpbnRlcmFjdGlvbi5ndWlsZC5yb2xlcy5jYWNoZS5maW5kKFxyXG4gICAgICAgICAgICAocm9sZSkgPT4gcm9sZS5pZCA9PT0gV0hJVEVMSVNUX1JPTEVfSURcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAod2hpdGVsaXN0Um9sZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXIgPSBhd2FpdCBpbnRlcmFjdGlvbi5ndWlsZC5tZW1iZXJzLmZldGNoKFxyXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uLnVzZXIuaWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgbWVtYmVyLnJvbGVzLmFkZCh3aGl0ZWxpc3RSb2xlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIHJvbGUgdG8gdXNlcjogXCIgKyBtZW1iZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcm9sZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KFxyXG4gICAgICAgICAgICAgICAgXCJUaGVyZSB3YXMgYW4gZXJyb3IgYWRkaW5nIHRoZSByb2xlLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIldoaXRlbGlzdCByb2xlIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmluY2x1ZGVzKFwiUGxheWVyIGlzIGFscmVhZHkgd2hpdGVsaXN0ZWRcIikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJDT04gUmVzcG9uc2U6IFwiICsgcmVzcG9uc2UpO1xyXG4gICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiYGBQbGF5ZXIgaXMgYWxyZWFkeSB3aGl0ZWxpc3RlZCFgYCBcXHUyNzRDXCIsXHJcbiAgICAgICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVbmJla2FubnRlIEFudHdvcnQgdm9tIFNlcnZlcjogXCIsIHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgdGhlIGNvbW1hbmQ6IFwiLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICByY29uLmVuZCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgZXN0YWJsaXNoaW5nIHRoZSBSQ09OIGNvbm5lY3Rpb246IFwiLCBlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUEsT0FBTztBQUdQLFNBQVMsWUFBWTtBQUVyQixlQUFPLHVCQUF3QixhQUEwQjtBQUN2RCxNQUNFLENBQUMsWUFBWSxjQUFjLEtBQzNCLFlBQVksYUFBYSxxQkFDekIsQ0FBQyxZQUFZO0FBRWI7QUFFRixRQUFNLEVBQUUsU0FBUyxXQUFXLGVBQWUsa0JBQWtCLElBQUksUUFBUTtBQUV6RSxNQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQzVDLFlBQVEsTUFBTSx3Q0FBd0M7QUFDdEQ7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLEtBQUssUUFBUTtBQUFBLE1BQzlCLE1BQU07QUFBQSxNQUNOLE1BQU0sT0FBTyxTQUFTO0FBQUEsTUFDdEIsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUNELFlBQVEsS0FBSywyQ0FBMkM7QUFFeEQsVUFBTSxnQkFBZ0IsWUFBWSxPQUFPLGtCQUFrQixlQUFlO0FBRTFFLFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssbUJBQW1CLGFBQWE7QUFFakUsVUFBSSxTQUFTLFNBQVMsNEJBQTRCLEdBQUc7QUFDbkQsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUTtBQUN4QyxjQUFNLFlBQVksTUFBTTtBQUFBLFVBQ3RCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiLENBQUM7QUFBQSxNQUNILFdBQVcsU0FBUyxTQUFTLE9BQU8sR0FBRztBQUNyQyxnQkFBUSxJQUFJLG9CQUFvQixRQUFRO0FBQ3hDLGNBQU0sWUFBWSxNQUFNO0FBQUEsVUFDdEIsU0FBUyxPQUFPLGdCQUFnQjtBQUFBLFVBQ2hDLFdBQVc7QUFBQSxRQUNiLENBQUM7QUFFRCxZQUFJLG1CQUFtQjtBQUNyQixnQkFBTSxnQkFBZ0IsWUFBWSxNQUFNLE1BQU0sTUFBTTtBQUFBLFlBQ2xELENBQUMsU0FBUyxLQUFLLE9BQU87QUFBQSxVQUN4QjtBQUNBLGNBQUksZUFBZTtBQUNqQixrQkFBTSxTQUFTLE1BQU0sWUFBWSxNQUFNLFFBQVE7QUFBQSxjQUM3QyxZQUFZLEtBQUs7QUFBQSxZQUNuQjtBQUVBLGdCQUFJO0FBQ0Ysb0JBQU0sT0FBTyxNQUFNLElBQUksYUFBYTtBQUNwQyxzQkFBUSxJQUFJLHlCQUF5QixPQUFPLFdBQVc7QUFBQSxZQUN6RCxTQUFTLE9BQU87QUFDZCxzQkFBUSxNQUFNLHNCQUFzQixLQUFLO0FBQ3pDLG9CQUFNLFlBQVk7QUFBQSxnQkFDaEI7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0YsT0FBTztBQUNMLG9CQUFRLE1BQU0sMkJBQTJCO0FBQUEsVUFDM0M7QUFBQSxRQUNGO0FBQUEsTUFDRixXQUFXLFNBQVMsU0FBUywrQkFBK0IsR0FBRztBQUM3RCxnQkFBUSxJQUFJLG9CQUFvQixRQUFRO0FBQ3hDLGNBQU0sWUFBWSxNQUFNO0FBQUEsVUFDdEIsU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFFBQ2IsQ0FBQztBQUFBLE1BQ0gsT0FBTztBQUNMLGdCQUFRLElBQUksbUNBQW1DLFFBQVE7QUFBQSxNQUN6RDtBQUFBLElBQ0YsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLCtCQUErQixLQUFLO0FBQUEsSUFDcEQsVUFBRTtBQUNBLFdBQUssSUFBSTtBQUFBLElBQ1g7QUFBQSxFQUNGLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSxrREFBa0QsS0FBSztBQUNyRTtBQUFBLEVBQ0Y7QUFDRjtBQWpGTzsiLAogICJuYW1lcyI6IFtdCn0K