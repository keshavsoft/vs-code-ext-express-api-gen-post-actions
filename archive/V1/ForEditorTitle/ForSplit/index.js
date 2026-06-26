import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import ShowAll from "../../CommonCommands/ShowAll/v2/orchestration/startOrchestration.js";
import Find from "../../CommonCommands/Find/v1/orchestration/startOrchestration.js";

const splitEditor = async (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "endpointUi",
        "Endpoint UI",
        vscode.ViewColumn.Beside,
        {
            enableScripts: true
        }
    );

    panel.webview.onDidReceiveMessage(
        (message) => {
            if (message.action === "showAll") {
                ShowAll({ uri });
            };

            if (message.action === "find") {
                Find({ uri });
            };
        }
    );

    panel.webview.html = fs.readFileSync(
        path.join(import.meta.dirname, "ui", "index.html"),
        "utf8"
    );
};

export default splitEditor;