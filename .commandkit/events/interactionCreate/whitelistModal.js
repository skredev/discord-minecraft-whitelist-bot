import {
  __name
} from "../../chunk-H736K5TN.js";

// src/events/interactionCreate/whitelistModal.ts
import "dotenv/config";
import { Rcon } from "rcon-client";
async function whitelistModal_default(interaction) {
  if (!interaction.isModalSubmit() || interaction.customId !== "whitelist-modal")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9pbnRlcmFjdGlvbkNyZWF0ZS93aGl0ZWxpc3RNb2RhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IFJjb24gfSBmcm9tIFwicmNvbi1jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb24pIHtcclxuICBpZiAoXHJcbiAgICAhaW50ZXJhY3Rpb24uaXNNb2RhbFN1Ym1pdCgpIHx8XHJcbiAgICBpbnRlcmFjdGlvbi5jdXN0b21JZCAhPT0gXCJ3aGl0ZWxpc3QtbW9kYWxcIlxyXG4gIClcclxuICAgIHJldHVybjtcclxuXHJcbiAgY29uc3QgeyBSQ09OX0lQLCBSQ09OX1BPUlQsIFJDT05fUEFTU1dPUkQgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGlmICghUkNPTl9JUCB8fCAhUkNPTl9QT1JUIHx8ICFSQ09OX1BBU1NXT1JEKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUkNPTiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG1pc3NpbmdcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmNvbiA9IGF3YWl0IFJjb24uY29ubmVjdCh7XHJcbiAgICAgIGhvc3Q6IFJDT05fSVAsXHJcbiAgICAgIHBvcnQ6IE51bWJlcihSQ09OX1BPUlQpLFxyXG4gICAgICBwYXNzd29yZDogUkNPTl9QQVNTV09SRCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5pbmZvKFwiUkNPTiBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZC5cIik7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IGludGVyYWN0aW9uLmZpZWxkcy5nZXRUZXh0SW5wdXRWYWx1ZShcInVzZXJuYW1lSW5wdXRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByY29uLnNlbmQoXCJ3aGl0ZWxpc3QgYWRkIFwiICsgdXNlcm5hbWVJbnB1dCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuaW5jbHVkZXMoXCJUaGF0IHBsYXllciBkb2VzIG5vdCBleGlzdFwiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkNPTiBSZXNwb25zZTogXCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgY29udGVudDogXCJgYFRoYXQgcGxheWVyIGRvZXMgbm90IGV4aXN0IWBgIFxcdTI3NENcIixcclxuICAgICAgICAgIGVwaGVtZXJhbDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5pbmNsdWRlcyhcIkFkZGVkXCIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSQ09OIFJlc3BvbnNlOiBcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcImBgXCIgKyB1c2VybmFtZUlucHV0ICsgXCJgYCBcXHUyNzA1XCIsXHJcbiAgICAgICAgICBlcGhlbWVyYWw6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5jbHVkZXMoXCJQbGF5ZXIgaXMgYWxyZWFkeSB3aGl0ZWxpc3RlZFwiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkNPTiBSZXNwb25zZTogXCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgY29udGVudDogXCJgYFBsYXllciBpcyBhbHJlYWR5IHdoaXRlbGlzdGVkIWBgIFxcdTI3NENcIixcclxuICAgICAgICAgIGVwaGVtZXJhbDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVuYmVrYW5udGUgQW50d29ydCB2b20gU2VydmVyOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyB0aGUgY29tbWFuZDogXCIsIGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHJjb24uZW5kKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBlc3RhYmxpc2hpbmcgdGhlIFJDT04gY29ubmVjdGlvbjogXCIsIGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQSxPQUFPO0FBR1AsU0FBUyxZQUFZO0FBRXJCLGVBQU8sdUJBQXdCLGFBQTBCO0FBQ3ZELE1BQ0UsQ0FBQyxZQUFZLGNBQWMsS0FDM0IsWUFBWSxhQUFhO0FBRXpCO0FBRUYsUUFBTSxFQUFFLFNBQVMsV0FBVyxjQUFjLElBQUksUUFBUTtBQUN0RCxNQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQzVDLFlBQVEsTUFBTSx3Q0FBd0M7QUFDdEQ7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLEtBQUssUUFBUTtBQUFBLE1BQzlCLE1BQU07QUFBQSxNQUNOLE1BQU0sT0FBTyxTQUFTO0FBQUEsTUFDdEIsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUNELFlBQVEsS0FBSywyQ0FBMkM7QUFFeEQsVUFBTSxnQkFBZ0IsWUFBWSxPQUFPLGtCQUFrQixlQUFlO0FBRTFFLFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssbUJBQW1CLGFBQWE7QUFFakUsVUFBSSxTQUFTLFNBQVMsNEJBQTRCLEdBQUc7QUFDbkQsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUTtBQUN4QyxjQUFNLFlBQVksTUFBTTtBQUFBLFVBQ3RCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiLENBQUM7QUFBQSxNQUNILFdBQVcsU0FBUyxTQUFTLE9BQU8sR0FBRztBQUNyQyxnQkFBUSxJQUFJLG9CQUFvQixRQUFRO0FBQ3hDLGNBQU0sWUFBWSxNQUFNO0FBQUEsVUFDdEIsU0FBUyxPQUFPLGdCQUFnQjtBQUFBLFVBQ2hDLFdBQVc7QUFBQSxRQUNiLENBQUM7QUFBQSxNQUNILFdBQVcsU0FBUyxTQUFTLCtCQUErQixHQUFHO0FBQzdELGdCQUFRLElBQUksb0JBQW9CLFFBQVE7QUFDeEMsY0FBTSxZQUFZLE1BQU07QUFBQSxVQUN0QixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDSCxPQUFPO0FBQ0wsZ0JBQVEsSUFBSSxtQ0FBbUMsUUFBUTtBQUFBLE1BQ3pEO0FBQUEsSUFDRixTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sK0JBQStCLEtBQUs7QUFBQSxJQUNwRCxVQUFFO0FBQ0EsV0FBSyxJQUFJO0FBQUEsSUFDWDtBQUFBLEVBQ0YsU0FBUyxPQUFPO0FBQ2QsWUFBUSxNQUFNLGtEQUFrRCxLQUFLO0FBQ3JFO0FBQUEsRUFDRjtBQUNGO0FBeERPOyIsCiAgIm5hbWVzIjogW10KfQo=