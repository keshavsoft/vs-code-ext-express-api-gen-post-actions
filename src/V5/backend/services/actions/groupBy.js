import { groupBy } from 'kschema-fs-api-gen-post-actions';

import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, schemasPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: groupBy,
        inFolderName
    });
};

export default startFunc;
