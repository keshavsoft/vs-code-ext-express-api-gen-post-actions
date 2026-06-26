import path from 'path';
import { fileURLToPath } from 'url';
import * as vscode from 'vscode';

import { find } from 'kschema-fs-api-gen-get-actions';

import { openFileInEditor } from '../openFile.js';

export async function runFeatureOrchestration({ context, uri }) {
    const endpoint = "Insert";
    const workspace = vscode.workspace.workspaceFolders?.[0].uri.fsPath;

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    await find({
        toPath: context.targetPath, inTargetPath: workspace,
        inGenerateRest: true
    });

    openFileInEditor({
        inFolderPath: localContext.routeFilePath
    })

    return { endpoint };
};