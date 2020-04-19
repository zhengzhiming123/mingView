let columnId = 0;
export default {
    name: 'm-table-column',
    props: {
        field: String,
        label: String,
        width: String,
        sortable: Boolean,
        fixed: Boolean
    },
    mounted () {
        let store = this.$parent.store
        let column = {
            ...this.$props,
            id:'col-'+ columnId
        }
        let that = this;
        column.renderCell = function(h, data){
            let render = (h, data) => {
                //如果有index，则渲染index，否则渲染字段值
                return column.index ? data.index + 1 : data.row[column.field]
            }
            if(that.$scopedSlots.default){
                render = () => that.$scopedSlots.default(data)
            }
            return <div class="cell">{render(h, data)}</div>
        }
        store.states.columns.push(column)
    },
    render(){
        return null
    }
}