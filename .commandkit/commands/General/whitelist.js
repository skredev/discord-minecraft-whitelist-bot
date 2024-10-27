import {
  __dirname,
  __name
} from "../../chunk-GZWC6LYU.js";

// src/commands/General/whitelist.ts
import { SlashCommandBuilder } from "discord.js";
import { promises as fs } from "fs";
import minecraftPlayer from "minecraft-player";
var data = new SlashCommandBuilder().setName("whitelist").setDescription("Whitelist a user").addStringOption(
  (option) => option.setName("username").setDescription("Username to whitelist.").setRequired(true)
);
async function run({ interaction, client, handler }) {
  const username = interaction.options.getString("username") || "";
  const whitelistJson = await fs.readFile(
    __dirname + "/../../whitelist.json",
    "utf8"
  );
  const whitelistData = JSON.parse(whitelistJson);
  whitelistData.push({
    uuid: await (await minecraftPlayer(username)).uuid,
    name: username
  });
  fs.writeFile(
    __dirname + "/../../whitelist.json",
    JSON.stringify(whitelistData)
  );
  interaction.reply("Data:" + whitelistJson);
}
__name(run, "run");
var options = {};
export {
  data,
  options,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0dlbmVyYWwvd2hpdGVsaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7XHJcbiAgQ29tbWFuZERhdGEsXHJcbiAgU2xhc2hDb21tYW5kUHJvcHMsXHJcbiAgQ29tbWFuZE9wdGlvbnMsXHJcbn0gZnJvbSBcImNvbW1hbmRraXRcIjtcclxuaW1wb3J0IHsgU2xhc2hDb21tYW5kQnVpbGRlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBtaW5lY3JhZnRQbGF5ZXIgZnJvbSBcIm1pbmVjcmFmdC1wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0gbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxyXG4gIC5zZXROYW1lKFwid2hpdGVsaXN0XCIpXHJcbiAgLnNldERlc2NyaXB0aW9uKFwiV2hpdGVsaXN0IGEgdXNlclwiKVxyXG4gIC5hZGRTdHJpbmdPcHRpb24oKG9wdGlvbikgPT5cclxuICAgIG9wdGlvblxyXG4gICAgICAuc2V0TmFtZShcInVzZXJuYW1lXCIpXHJcbiAgICAgIC5zZXREZXNjcmlwdGlvbihcIlVzZXJuYW1lIHRvIHdoaXRlbGlzdC5cIilcclxuICAgICAgLnNldFJlcXVpcmVkKHRydWUpXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4oeyBpbnRlcmFjdGlvbiwgY2xpZW50LCBoYW5kbGVyIH06IFNsYXNoQ29tbWFuZFByb3BzKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFN0cmluZyhcInVzZXJuYW1lXCIpIHx8IFwiXCI7XHJcblxyXG4gIGNvbnN0IHdoaXRlbGlzdEpzb24gPSBhd2FpdCBmcy5yZWFkRmlsZShcclxuICAgIF9fZGlybmFtZSArIFwiLy4uLy4uL3doaXRlbGlzdC5qc29uXCIsXHJcbiAgICBcInV0ZjhcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHdoaXRlbGlzdERhdGEgPSBKU09OLnBhcnNlKHdoaXRlbGlzdEpzb24pO1xyXG5cclxuICB3aGl0ZWxpc3REYXRhLnB1c2goe1xyXG4gICAgdXVpZDogYXdhaXQgKGF3YWl0IG1pbmVjcmFmdFBsYXllcih1c2VybmFtZSkpLnV1aWQsXHJcbiAgICBuYW1lOiB1c2VybmFtZSxcclxuICB9KTtcclxuXHJcbiAgZnMud3JpdGVGaWxlKFxyXG4gICAgX19kaXJuYW1lICsgXCIvLi4vLi4vd2hpdGVsaXN0Lmpzb25cIixcclxuICAgIEpTT04uc3RyaW5naWZ5KHdoaXRlbGlzdERhdGEpXHJcbiAgKTtcclxuXHJcbiAgaW50ZXJhY3Rpb24ucmVwbHkoXCJEYXRhOlwiICsgd2hpdGVsaXN0SnNvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zOiBDb21tYW5kT3B0aW9ucyA9IHt9O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFLQSxTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLFlBQVksVUFBVTtBQUMvQixPQUFPLHFCQUFxQjtBQUVyQixJQUFNLE9BQU8sSUFBSSxvQkFBb0IsRUFDekMsUUFBUSxXQUFXLEVBQ25CLGVBQWUsa0JBQWtCLEVBQ2pDO0FBQUEsRUFBZ0IsQ0FBQyxXQUNoQixPQUNHLFFBQVEsVUFBVSxFQUNsQixlQUFlLHdCQUF3QixFQUN2QyxZQUFZLElBQUk7QUFDckI7QUFFRixlQUFzQixJQUFJLEVBQUUsYUFBYSxRQUFRLFFBQVEsR0FBc0I7QUFDN0UsUUFBTSxXQUFXLFlBQVksUUFBUSxVQUFVLFVBQVUsS0FBSztBQUU5RCxRQUFNLGdCQUFnQixNQUFNLEdBQUc7QUFBQSxJQUM3QixZQUFZO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGdCQUFnQixLQUFLLE1BQU0sYUFBYTtBQUU5QyxnQkFBYyxLQUFLO0FBQUEsSUFDakIsTUFBTSxPQUFPLE1BQU0sZ0JBQWdCLFFBQVEsR0FBRztBQUFBLElBQzlDLE1BQU07QUFBQSxFQUNSLENBQUM7QUFFRCxLQUFHO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFDWixLQUFLLFVBQVUsYUFBYTtBQUFBLEVBQzlCO0FBRUEsY0FBWSxNQUFNLFVBQVUsYUFBYTtBQUMzQztBQXJCc0I7QUF1QmYsSUFBTSxVQUEwQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=