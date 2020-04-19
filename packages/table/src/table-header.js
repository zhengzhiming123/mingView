export default{
    name:'TableHeader',
    props:{
        scrollWidth: Number
    },
    methods: {
        scrollStyle(){
            return 'left:' + this.scrollWidth+'px'
        }
    },
    render(){
        const columns = this.$parent.store.states.columns;
        return (
            <table cellspacing="0" cellpadding="0" class="m-table_header"
                ref="scrollTableHeader"
                style={this.scrollStyle()}
            >
                <colgroup>
                    
                    {
                        this._l(columns, column =>
                            <col width={column.width||column.minWidth||'auto'}  />   
                        )
                    }
                </colgroup>
                <thead>
                    <tr>
                        {
                            this._l(columns, column =>
                                <th>
                                    <div class="cell">
                                        {column['label']}
                                    </div>
                                </th>   
                            )
                        }
                    </tr>
                </thead>
            </table>
        )
    }
}

