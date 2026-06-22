import path from 'path';
import { fileURLToPath } from 'url';
import * as vscode from 'vscode';

import { filter } from 'kschema-fs-api-gen-post-actions';

import { openFileInEditor } from '../openFile.js';

export async function runFeatureOrchestration({ context, uri }) {
    const endpoint = "Insert";
    const workspace = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
    const text = await vscode.workspace.fs.readFile(uri);

    const fileText = Buffer
        .from(text)
        .toString("utf8");
    const match = fileText.match(
        /const\s+tableName\s*=\s*["'`](.*?)["'`]/
    );

    const tableName = match?.[1];

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    await filter({
        toPath: context.targetPath, inTargetPath: workspace,
        inGenerateRest: true, toConfigPath: path.join(workspace, "Config", "Schemas", `${tableName}.json`)
    });

    openFileInEditor({
        inFolderPath: localContext.routeFilePath
    })

    return { endpoint };
};