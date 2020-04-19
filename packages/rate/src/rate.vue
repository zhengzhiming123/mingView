<template>
    <div class="m-rate"
    >
        <span class="m-rate_item" v-for="item in max" :key="item"
            @mouseover="addActiveClass(item)"
            @mouseout="removeActiveClass()"
            @click="selectValue(item)"
        >   
            <i class="ming-icon m-rate_icon" 
                :class="[item<=curIndex?'m-icon-star-on':'m-icon-star']"
            ></i>
        </span>
        <span class="m-rate_text" v-if="showText">{{curText}}</span>
    </div>
</template>

<script>
export default {
    name: 'm-rate',
    props: {
        max: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        },
        texts: {
            type: Array,
            default(){
                return ['极差','失望','一般','满意','惊喜']
            }
        },
        showText: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            curIndex: 0
        };
    },
    computed: {
        curText(){
            if(this.curIndex > 0){
                return this.texts[this.curIndex-1]
            }else{
                return this.value>0?this.texts[this.value-1]:''
            }
        }  
    },
    methods: {
        addActiveClass(idx){
            this.curIndex = idx;
        },
        removeActiveClass(){
            this.curIndex = this.value;
        },
        selectValue(val){
            this.curIndex = val;
            this.$emit('input', val);
            this.$emit('change', val);
        }
    },
    created(){
        this.curIndex = this.value?this.value:0;
    }
};
</script>