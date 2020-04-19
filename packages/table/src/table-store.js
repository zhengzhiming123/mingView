const TableStore = function(table){
    if(!table){
        throw new Error('Table is required!');
    }
    this.table = table;
    this.states = {
        columns: []
    }
}

TableStore.prototype.mutations = {
    handleRowClick(row){
        this.table.$emit('row-click', row)
    }
}

export default TableStore