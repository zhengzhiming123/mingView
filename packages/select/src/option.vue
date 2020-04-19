<template>
    <li class="m-select-dropdown_item"
        :class="{
            'selected': itemSelected,
            'is-disabled':item.disabled    
        }"
        @click.stop="selectOptionClick"
    >
        {{item.label}}
    </li>
</template>

<script>
export default {
    name: 'MOption',
    props: {
        value: {
            require: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        item: {
            require: true
        },
        multiple: {
            type:Boolean,
            default: false
        }
    },
    data() {
        return {
        };
    },
    computed: {
        itemSelected(){
            if(!this.multiple){
                return this.item.value == this.value
            } else{
                return this.contain(this.value, this.item);
            }
            
        }
    },
    methods: {
        selectOptionClick(){
            if(this.item.disabled){
                return false;
            }
            this.$emit('optionSelect', this.item);
        },
        contain(arr, targetArr){
            if(!arr){
                return false;
            }
            let idx = arr.findIndex((v)=> {
                return v.value == targetArr.value;
            });
            if(idx == -1){
                return false;
            }else{
                return true;
            }
        }
    }
};
</script>
<style lang="scss" scoped>

</style>