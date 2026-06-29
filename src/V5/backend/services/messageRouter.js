import findAction from "./actions/find.js";
import insertGenPkAction from "./actions/insertGenPk.js";
import filterQueryAction from "./actions/filterQuery.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath }) {
    switch (message.action) {
        case "insertGenPk":
            await insertGenPkAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "filter":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;
    }
}
