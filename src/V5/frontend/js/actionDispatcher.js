function getSelectedTable() {
    const tableSelect = document.getElementById("table-select");
    return tableSelect ? tableSelect.value : "";
}

function getFolderName() {
    const folderInput = document.getElementById("folder-name");
    return folderInput ? folderInput.value.trim() : "";
}

function insertGenPk() {
    sendAction("insertGenPk", { tableName: getSelectedTable(), inFolderName: getFolderName() });
}

function find() {
    sendAction("filter", { tableName: getSelectedTable() });
}

function filterQuery() {
    sendAction("filterQuery", { tableName: getSelectedTable() });
};

const groupBy = () => {
    sendAction("groupBy", { tableName: getSelectedTable() });
};