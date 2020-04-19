<template>
    <div class="m-table"
        :style="{height: (height+'px')||''}"
    >
        <div class="m-table_header-wrap" ref="tableHeader" 
            :style="{paddingRight:hasGutter?scrollBarWidth+'px':''}"
        >
            <table-header 
                :scrollWidth="scrollWidth"
            ></table-header>
        </div>
        <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
        <div class="m-table_body-wrap" 
            :style="{height:(height-44+'px')||'',overflow:'auto'}"
            @scroll="tableScroll"
            ref="tableBody"
        >
            <table-body 
                :stripe="stripe"
                :currentRow="currentRow"
                :hoverRow="hoverRow"
                @handleRowClick="handleRowClick"
                @handleRowMouseover="handleRowMouseover"
            ></table-body>
        </div>

        <template v-if="fixedColumns.length>0">
            <!-- 当表格有竖向滚动条，且有固定columns时，右上角会空出一块 -->
            <div class="m-table_fixed-patch" v-if="fixedColumnsRight>0"></div>
            <div class="m-table_fixed-wrap"
                :style="{
                    width: fixedColumnsWidth+'px',
                    height: fixedColumnsHeight,
                    right: fixedColumnsRight+'px'
                }"
            >
                <div class="m-table_header-wrap">
                    <table-header></table-header>
                </div>
                <div class="m-table_body-wrap" 
                    :style="{
                        height:(height-44+'px')||''
                    }"
                >
                    <table-body :scrollHeight="scrollHeight"
                        :stripe="stripe"
                        :currentRow="currentRow"
                        :hoverRow="hoverRow"
                        @handleRowClick="handleRowClick"
                    ></table-body>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
import TableStore from './table-store.js';
import TableHeader from './table-header.js';
import TableBody from './table-body.js';
export default {
    name: 'm-table',
    props: {
        //表格数据
        tableData: {    
            type: Array,
            required: true
        },
        //表格显示带斑马纹
        stripe: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: ''
        },
        //是否单选
        highlightCurrentRow: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        scrollBarWidth:{
            type:Number,
            default: 17
        }
    },
    data() {
        const store = new TableStore(this);
        return {
            store,
            columns: [],
            scrollWidth: 0,
            scrollHeight: 0,
            hoverRow: null,
            currentRow: null,
            selectedItem: null,
            emptyText:'暂无数据',
            hasGutter: false
        };
    },
    computed:{
        isStripe(){
            return function(idx){
                if(this.stripe){
                    return idx%2==1?'is-stripe':''
                }else{
                    return ''
                }
            }
        },
        fixedColumns(){
            return this.store.states.columns.filter((item) => {
                return item.fixed;
            })
        },
        fixedColumnsWidth(){
            let wid = 0;
            this.fixedColumns.forEach(element => {
                wid += element.width;
            });
            return wid;
        },
        fixedColumnsHeight(){
            if(this.height && this.height>0){
                return (this.height - 18) + 'px'
            }else{
                return 'auto'
            }
        },
        fixedColumnsRight(){
            if(this.height){
                if(this.tableData.length*44 > this.height){
                    return 17
                }else{
                    return 0;
                }
            }else{
                return 0
            }
        }
    },
    methods: {
        setGutter(){
            let that = this;
            let tableBody = this.$refs.tableBody;
            setTimeout(function(){
                if(tableBody&&(tableBody.offsetHeight < tableBody.scrollHeight)){
                    that.hasGutter = true;
                }else{
                    that.hasGutter = false;
                }
            },0)
        },
        tableScroll(){
            this.scrollWidth = -this.$refs.tableBody.scrollLeft;
            this.scrollHeight = -this.$refs.tableBody.scrollTop;
        },
        handleRowClick(data){
            if(this.highlightCurrentRow){
                this.currentRow = data.rindex;
                this.selectedItem = data.row;
                this.$emit('currentChange', this.selectedItem);
            }
        },
        handleRowMouseover(idx){
            this.hoverRow = idx;
        },
        changeSelected(val, evt){
            let idx = evt.currentTarget.dataset.index;
            if(val){
                this.selectedItem.push(this.tableData[idx])
            }else{
                let findIdx = this.selectedItem.indexOf(this.tableData[idx]);
                this.selectedItem.splice(findIdx, 1);
            }
            this.$emit('selection-change', this.selectedItem);
        }
    },
    mounted(){
        this.setGutter();
    },
    components:{
        TableHeader,
        TableBody
    }
};
</script>