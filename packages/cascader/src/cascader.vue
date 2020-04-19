<template>
    <div class="m-cascader"
        :class="{'is-disabled': disabled}"
    >
        <m-input class="m-input" 
            :placeholder="placeholder" 
            :readonly="readonly" 
            :value="selectedLabel" 
            :disabled="disabled"
            @click.stop="handleClick"
        >
            <template slot="suffix">
                <i class="m-input_icon ming-icon" :class="['m-icon-' + iconClass]"></i>
            </template>
        </m-input>

        <div class="m-cascader-popper"
            v-show="showPopper"
        >
            <span class="poper-arrow"></span>
            <cascader-menu 
                :dataList="options"
                :value="selectedItem"
                @optionSelect="optionSelect"
            />
        </div>
    </div>
</template>

<script>
import CascaderMenu from './cascader-menu.vue';
export default {
    name: 'm-cascader',
    components: {
        CascaderMenu
    },
    props: {
        value: Array,
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        readonly: {
            type: Boolean,
            default: true
        },
        options: Array
    },
    data(){
        return {
            showPopper: false,
            selectedLabel: '',
            selectedItem: []
        }
    },
    computed: {
        iconClass(){
            return !this.showPopper ? 'arrow-down' : 'arrow-down is-reverse' 
        }
    },
    methods: {
        handleClick(){
            if(this.disabled){
                return false;
            }
            this.showPopper = !this.showPopper;
            if(this.showPopper){
                this.setSelect();
            }
        },
        closePopper(){
            this.showPopper = false;
        },
        optionSelect(val, status){
            let tempLable = [];
            let tempVal = [];
            for(let i=0; i<val.length; i++){
                tempLable.push(val[i].label);
                tempVal.push(val[i].value);
            }
            this.selectedItem = val;
            if(status){
                this.showPopper = false;
                this.$emit('input', tempVal);
                this.selectedLabel = tempLable.join('/');
                this.$emit('change', tempVal)
            }
        },
        //设置默认值
        setSelect(){
            if(this.value && this.value.length>0){
                let tempArr = [];
                let labelArr = [];
                this.value.forEach((element, index) => {
                    let matchItem = null;
                    if(index === 0){
                        matchItem = this.options.filter(item => item.value === element)[0];
                        tempArr.push(matchItem);
                    }else{
                        matchItem = tempArr[index-1].children.filter(item => item.value === element)[0];
                        tempArr.push(matchItem);
                    }
                    if(matchItem){
                        labelArr.push(matchItem.label);
                    }
                })
                this.selectedItem = tempArr;
                this.selectedLabel = labelArr.join('/');
            }
        }
    },
    mounted(){
        let _this = this;
        let body = document.querySelector('body')
        body.addEventListener('click',()=>{
            _this.closePopper();
        },false)
        this.setSelect();
    }
};
</script>
