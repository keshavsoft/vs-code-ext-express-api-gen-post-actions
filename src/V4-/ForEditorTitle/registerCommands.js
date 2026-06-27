import { registerAllCommands as endpointCommands } from "./endpointCommands.js";

export function registerAllCommands(context) {
    endpointCommands(context);
};