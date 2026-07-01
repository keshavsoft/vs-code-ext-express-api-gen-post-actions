import * as vscode from 'vscode';

export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    configPath,
    generateFunc,
    inFolderName,
    inPort
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating CRUD..."
    });

    try {
        const workspace = vscode.workspace.workspaceFolders?.[0].uri.fsPath;

        await generateFunc({
            showLog: true,
            isAnnounce: true,
            toPath,
            tableName,
            toConfigPath: configPath,
            inGenerateRest: true,
            inTargetPath: workspace,
            inFolderName: inFolderName || "",
            inPort
        });

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="font-semibold mb-2">
                    ✅ Generation Complete
                </div>
                <div><b>Action:</b> ${actionLabel}</div>
                ${tableName ? `<div><b>Table:</b> ${tableName}</div>` : ""}
                <div><b>Output:</b> ${toPath}</div>
            `
        });
    } catch (error) {
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
