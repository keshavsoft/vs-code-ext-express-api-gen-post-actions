function getSelectedTable() {
    const tableSelect = document.getElementById("table-select");
    return tableSelect ? tableSelect.value : "";
}

function insertGenPk() {
    sendAction("insertGenPk", { tableName: getSelectedTable() });
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