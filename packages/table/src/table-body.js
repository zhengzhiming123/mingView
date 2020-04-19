import { removeClass, addClass} from '../../utils/util.js'

export default{
    name:'TableBody',
    props:{
        stripe: Boolean,
        scrollHeight: Number,
        currentRow: Number,      //当前选中行
        hoverRow: Number
    },
    methods: {
        trClass(row, index){
            const classes = ['m-table_row'];
            if(this.stripe && index%2==1){
                classes.push('is-stripe')
            }
            return classes;
        },
        scrollStyle(){
            return 'top:' + this.scrollHeight+'px'
        },
        /* handleMouseover(idx){
            addClass(this.$el.querySelectorAll('.m-table_row')[idx], 'hover-row')
        },
        handleMouseout(idx){
            removeClass(this.$el.querySelectorAll('.m-table_row')[idx], 'hover-row')
        } */
    },
    watch:{
        currentRow(newVal, oldVal){
            const rows = this.$el.querySelectorAll('.m-table_row');
            const oldRow = rows[oldVal];
            const newRow = rows[newVal];
            if(oldRow){
                removeClass(oldRow, 'current-row')
            }
            if(newRow){
                addClass(newRow, 'current-row');
            }
        },
        hoverRow(newVal, oldVal){
            const rows = this.$el.querySelectorAll('.m-table_row');
            const oldRow = rows[oldVal];
            const newRow = rows[newVal];
            if(oldRow){
                removeClass(oldRow, 'hover-row')
            }
            if(newRow){
                addClass(newRow, 'hover-row');
            }
        }
    },
    render(h){
        const columns = this.$parent.store.states.columns;
        const tableData = this.$parent.tableData;
        return (
            <table cellspacing="0" cellpadding="0" class="m-table_body"
                style={this.scrollStyle()}
            >
                <colgroup>
                    {
                        this._l(columns, column =>
                            <col width={column.width||column.minWidth||'auto'}  />   
                        )
                    }
                </colgroup>
                <tbody>
                    {
                        tableData.length>0?this._l(tableData, (row,rindex) => 
                            <tr class={this.trClass(row, rindex)}
                                on-mouseover={() => this.$emit('handleRowMouseover',rindex)}
                                on-click={() => this.$emit('handleRowClick',{rindex, row})}
                            >
                                {
                                    this._l(columns, (column,cindex)=>{
                                        return (
                                            <td>
                                                {column.renderCell(h,{
                                                    row,
                                                    column,
                                                    index:rindex,
                                                    columnIndex:cindex
                                                })}
                                            </td>  
                                        )
                                    })
                                }
                            </tr>    
                        ):<tr>{this.$parent.emptyText}</tr>
                    }
                </tbody>
            </table>
        )
    }
}

