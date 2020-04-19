<template>
    <div class="m-select"
        :class="{'is-disabled': disabled}"
    >
        <div class="m-select_tags" v-if="multiple">
            <span class="m-tag" v-if="selectedItem.length>0">
                <span class="m-select_tags_text">{{selectedItem[0].label}}</span>
                <i class="ming-icon m-icon-error m-tag_close"
                @click="delSelectOption"
                ></i>
            </span>
            <span class="m-tag" v-if="selectedItem.length>1">
                <span class="m-select_tags-text">+{{selectedItem.length-1}}</span>
            </span>
        </div>
        <m-input class="m-input" 
            :placeholder="placeholder" 
            :readonly="readonly" 
            :value="selectedLabel" 
            :disabled="disabled"
            @input="filterItems"
            @focus="focus"
            @click.stop="handleClick"
        >
            <template slot="suffix">
                <i class="m-input_icon ming-icon" :class="['m-icon-' + iconClass]"></i>
            </template>
        </m-input>

        <div class="m-select-popper"
            v-show="showPopper"
        >
            <span class="m-select-arrow"></span>
            <ul class="m-select-dropdown_list" 
                :class="{'multiple':multiple}"
                v-if="optionsItems.length>0"
            >
                <m-option v-for="(item, idx) in optionsItems" :key="idx" 
                    :item="item" 
                    :value="value" 
                    :disabled="disabled" 
                    :multiple="multiple"
                    @optionSelect="optionSelect" />
            </ul>
            <p class="m-select-dropdown_empty" v-if="optionsItems.length==0">无匹配数据</p>
        </div>
    </div>
</template>

<script>
import MOption from './option.vue';
export default {
    name: 'm-select',
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        options: Array,     //下拉框数据
        value: {
            require: true   //选中的数据
        },
        multiple: {         //是否多选
            type: Boolean,
            default: false
        },
        filterable: {       //是否可搜索
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectedLabel: '',  //单选时，选中项显示的文字
            showPopper: false,  //显示、隐藏下拉框
            selectedItem: [],   //选中的数据
            srchKeyWord: ''     //可搜索时的搜索关键词
        };
    },
    computed: {
        readonly(){
            //可搜索时，设置输入框可输入
            return !this.filterable
        },
        iconClass(){
            return !this.showPopper ? 'arrow-down' : 'arrow-down is-reverse'
        },
        optionsItems(){
            //筛选匹配项
            if(this.filterable){
                if(this.srchKeyWord){
                    let matchData = this.options.filter((v) => {
                        return v.label.indexOf(this.srchKeyWord) >= 0;
                    });
                    return matchData;
                }
            }
            return this.options;
        }
    },
    watch: {
        showPopper(){
            //展示、隐藏下拉框时触发事件 visible-change
            this.$emit('visible-change', this.showPopper);
        }
    },
    methods: {
        focus(evt){
            //可搜索——输入框焦点状态 设置文本选中
            if(this.filterable){
                evt.currentTarget.select();
            }
        },
        setSelected(){
            if(!this.multiple){
                this.selectedLabel = this.value;
            }else{
                this.selectedItem = this.value;
            }
        },
        handleClick(){
            if(this.disabled){
                return false;
            }
            this.showPopper = !this.showPopper;
            this.srchKeyWord = '';
        },
        optionSelect(item){
            if(!this.multiple){
                this.selectedItem = [item];
                this.showPopper = false;
                this.selectedLabel = this.selectedItem[0].value;
                this.$emit('input', this.selectedItem[0].value);
            }else{
                let idx = this.selectedItem.findIndex((v)=> {
                    return v.value == item.value;
                });
                if(idx == -1){
                    this.selectedItem.push(item);
                }else{
                    this.selectedItem.splice(idx, 1);
                }
                this.$emit('input', this.selectedItem);
            }
        },
        delSelectOption(){
            this.selectedItem.splice(0, 1);
            this.$emit('input', this.selectedItem);
        },
        filterItems(val){
            if(this.filterable){
                this.srchKeyWord = this.selectedLabel = val;
            }
            
        },
        closePopper(){
            this.showPopper = false;
            if(this.filterable){
                this.srchKeyWord = '';
                this.selectedLabel = this.selectedItem[0] && this.selectedItem[0].value || '';
            }
            
        }
    },
    mounted(){
        let _this = this;
        let body = document.querySelector('body')
        body.addEventListener('click',()=>{
            _this.closePopper();
        },false)
        this.setSelected();
    },
    components: {
        MOption
    }
};
</script>