import {
  __name
} from "../../chunk-GZWC6LYU.js";

// src/events/interactionCreate/buttonClick.ts
import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
} from "discord.js";
async function buttonClick_default(interaction) {
  if (!interaction.isButton())
    return;
  const modal = new ModalBuilder().setCustomId("whitelistmodal").setTitle("Whitelist");
  const usernameInput = new TextInputBuilder().setCustomId("usernameInput").setLabel("Username").setStyle(TextInputStyle.Short);
  modal.addComponents(
    new ActionRowBuilder().addComponents(usernameInput)
  );
  await interaction.showModal(modal);
}
__name(buttonClick_default, "default");
export {
  buttonClick_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2V2ZW50cy9pbnRlcmFjdGlvbkNyZWF0ZS9idXR0b25DbGljay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uUm93QnVpbGRlcixcclxuICBNb2RhbEJ1aWxkZXIsXHJcbiAgVGV4dElucHV0QnVpbGRlcixcclxuICBUZXh0SW5wdXRTdHlsZSxcclxufSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKFxyXG4gIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblxyXG4pIHtcclxuICBpZiAoIWludGVyYWN0aW9uLmlzQnV0dG9uKCkpIHJldHVybjtcclxuXHJcbiAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgIC5zZXRDdXN0b21JZChcIndoaXRlbGlzdG1vZGFsXCIpXHJcbiAgICAuc2V0VGl0bGUoXCJXaGl0ZWxpc3RcIik7XHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBuZXcgVGV4dElucHV0QnVpbGRlcigpXHJcbiAgICAuc2V0Q3VzdG9tSWQoXCJ1c2VybmFtZUlucHV0XCIpXHJcbiAgICAuc2V0TGFiZWwoXCJVc2VybmFtZVwiKVxyXG4gICAgLnNldFN0eWxlKFRleHRJbnB1dFN0eWxlLlNob3J0KTtcclxuXHJcbiAgbW9kYWwuYWRkQ29tcG9uZW50cyhcclxuICAgIG5ldyBBY3Rpb25Sb3dCdWlsZGVyPFRleHRJbnB1dEJ1aWxkZXI+KCkuYWRkQ29tcG9uZW50cyh1c2VybmFtZUlucHV0KVxyXG4gICk7XHJcblxyXG4gIGF3YWl0IGludGVyYWN0aW9uLnNob3dNb2RhbChtb2RhbCk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFDQTtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBRVAsZUFBTyxvQkFDTCxhQUNBO0FBQ0EsTUFBSSxDQUFDLFlBQVksU0FBUztBQUFHO0FBRTdCLFFBQU0sUUFBUSxJQUFJLGFBQWEsRUFDNUIsWUFBWSxnQkFBZ0IsRUFDNUIsU0FBUyxXQUFXO0FBRXZCLFFBQU0sZ0JBQWdCLElBQUksaUJBQWlCLEVBQ3hDLFlBQVksZUFBZSxFQUMzQixTQUFTLFVBQVUsRUFDbkIsU0FBUyxlQUFlLEtBQUs7QUFFaEMsUUFBTTtBQUFBLElBQ0osSUFBSSxpQkFBbUMsRUFBRSxjQUFjLGFBQWE7QUFBQSxFQUN0RTtBQUVBLFFBQU0sWUFBWSxVQUFVLEtBQUs7QUFDbkM7QUFuQk87IiwKICAibmFtZXMiOiBbXQp9Cg==