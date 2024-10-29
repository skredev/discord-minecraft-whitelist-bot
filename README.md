<h1 align="center">
Discord Minecraft Whitelist Bot
</h1>

<div align="center">

![Stars](https://img.shields.io/github/stars/skredev/discord-minecraft-whitelist-bot?logo=github&style=flat)
![Version](https://img.shields.io/github/package-json/v/skredev/discord-minecraft-whitelist-bot?logo=git&logoColor=white&style=flat)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/skredev/discord-minecraft-whitelist-bot/main?logo=git&logoColor=white&style=flat)
![License](https://img.shields.io/github/license/skredev/discord-minecraft-whitelist-bot?logoColor=white&style=flat)

</div>

This Discord bot allows users to whitelist themselves on a Minecraft server through a simple interaction.

## Features

- **Create Whitelist Button:** Use the /create-whitelist-button command to generate a button for whitelisting users.
- **Interactive Modal:** Clicking the whitelist button opens a modal where users can enter their Minecraft username.
- **Role Management:** Automatically adds a designated role to users upon successful whitelisting.

## Installation

### 1. Clone the Repository 

```bash
git clone https://github.com/skredev/discord-minecraft-whitelist-bot.git
cd minecraft-whitelist-bot
```
    
### 2. Install Dependencies

Install the required packages:

```bash
pnpm install
```

### 3. Environment Variables

Create a .env file in the root of the project and fill it out based on the provided .env.template:

```bash
TOKEN=""
RCON_IP=""
RCON_PORT=""
RCON_PASSWORD=""
WHITELIST_ROLE_ID=""
```

- **TOKEN:** Your Discord bot token.
- **RCON_IP:** The IP address of your Minecraft server.
- **RCON_PORT:** The RCON port (default is usually 25575).
- **RCON_PASSWORD:** The password for RCON access.
- **WHITELIST_ROLE_ID:** The role ID for the whitelist role to be added to users. This is **optional**.
  
> You must first enable RCON in the server.properties file of your Minecraft Server and set a password

### 4. Run the Bot
   
```bash
pnpm run dev
```
