import * as vscode from 'vscode';

import splitEditor from './ForSplit/index.js';

const registerAllCommands = (context) => {
    const splitCommand = vscode.commands.registerCommand(
        "extension.express.api.gen.get.actions", (uri) => {
            splitEditor(context, uri)
        }
    );
    
    context.subscriptions.push(
        splitCommand
    );
};

export default registerAllCommands;