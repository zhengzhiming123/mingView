<template>
    <div class="cascader-menu">
        <ul class="cascader-menu_list" v-for="(menu, idx) in menus" :key="idx">
            <li class="cascader-menu_list__item" 
                v-for="(item, itemIdx) in menu" 
                :key="itemIdx"
                :class="[       
                    {'cascader-menu_list__item-extensible':item.children&&item.children.length>0},
                    {'is-active': selectData[idx]&&selectData[idx].value==item.value},
                    {'is-disabled':item.disabled}
                ]"
                @click.stop="selectOptionClick(item, idx)"
            >{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MOption',
    props: {
        value: Array,
        disabled: {
            type: Boolean,
            default: false
        },
        dataList: Array
    },
    data() {
        return {
            selectData: [],
            //menus: []
        };
    },
    computed: {
        menus:{
            get(){
                if(this.selectData && this.selectData.length>0){
                    let tempMenus = [];
                    let matchItem = null;
                    this.selectData.forEach((element, index) => {
                        if(index === 0){
                            tempMenus.push(this.dataList);
                            matchItem = this.dataList.filter(item => item.value === element.value)[0];
                        }else{
                            tempMenus.push(matchItem.children);
                            matchItem = tempMenus[index].filter(item => item.value === element.value)[0];
                        }
                    })
                    return tempMenus;
                }else{
                    return [this.dataList]
                }
            },
            set(){}
        }
    },
    methods: {
        selectOptionClick(item, idx){
            if(item.disabled){
                return false;
            }
            this.selectData = this.selectData.slice(0, idx);
            this.selectData[idx] = item;
            if(item.children){
                this.menus = this.menus.slice(0, idx+1);
                this.menus[idx+1] = item.children;
            }else{
                this.$emit('optionSelect', this.selectData, true)
            }
        }
    },
    watch:{
        value(newVal){
            this.selectData = newVal;
        }
    }
};
</script>
<style lang="scss" scoped>

</style>