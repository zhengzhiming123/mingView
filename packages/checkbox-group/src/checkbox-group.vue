<template>
    <div class="m-checkbox-group">
        <ul>
            <li v-for="(item, index) in list" :key="index"
                :class="{'horizontal': isHorizontal}"
            >
                <label class="m-checkbox_label"
                    :class="[
                        {'is-checked': find(item)},
                        {'is-disabled': item.disabled}
                    ]"
                    @click.stop="handleClick(item, index)"
                >
                    <span class="m-checkbox_input"
                        :class="[{'is-disabled': item.disabled}]"
                    >
                        <span class="m-checkbox__inner"></span>
                    </span>
                    <span class="m-checkbox_text">{{item.label}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'m-checkbox-group',
    props: {
        list:{
            type: Array,
            default: function(){
                return [];
            }
        },
        value: {
            type: Array,
            default: function(){
                return [];
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isHorizontal: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        handleClick(item){
            if(item.disabled) return;
            let status = this.find(item, true);
            let selectVal = this.value;
            if(status.flag){
                selectVal.splice(status.index, 1);
            }else{
                selectVal.push(item)
            }
            this.$emit('input', selectVal); // 传值父组件
        },
        find(item, needRemove){
            let flag = false;
            let idx = '';
            this.value.forEach((element, index) => {
                if(element === item){
                    flag = true;
                    idx = index;
                }
            });
            if(needRemove){
                return {
                    flag: flag,
                    index: idx
                }
            }else{
                return flag;
            }
        }
    }
};
</script>