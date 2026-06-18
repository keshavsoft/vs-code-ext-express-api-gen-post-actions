import path from 'path';
import { fileURLToPath } from 'url';
import * as vscode from 'vscode';

import { insertAsIs } from 'kschema-fs-api-gen-post-actions';

import { openFileInEditor } from '../services/openFile.js';

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

    await insertAsIs({
        toPath: context.targetPath, inTargetPath: workspace,
        inGenerateRest: true, inGenerateRest: true
    });

    openFileInEditor({
        inFolderPath: localContext.routeFilePath
    })

    return { endpoint };
};