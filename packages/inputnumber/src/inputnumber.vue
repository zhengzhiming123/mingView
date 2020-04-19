<template>
    <div class="m-inputnumber" :class="{'is-disabled': disabled}">
        <span class="m-inputnumber_decrease" @click="decrease">-</span>
        <span class="m-inputnumber_increase" @click="increase">+</span>
        <div class="m-input">
            <input class="m-input_inner" type="text" 
                :value="displayValue" 
                :disabled="disabled"                 @change="inputChange"
                @input="handleInput"
            >
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'm-inputnumber',
    props: {
        disabled: {         //是否禁用
            type: Boolean,
            default: false
        },
        value: Number,
        min: {              //最小值
            type: Number,
            default: 0
        },
        max: {              //最小值
            type: Number,
            default: Infinity
        },        //最大值
        step: {             //步长
            type: Number,
            default: 1
        },
        precision:{         //精度
            type: Number,
            default: 0,
            validator(val){
                return val >= 0 && val===parseInt(val, 10)
            }
        }
    },
    data() {
        return {
            displayValue: '',
            currentValue: 0
        };
    },
    computed: {
    },
    methods: {
        decrease(){
            let newVal = this.currentValue - this.step;
            this.setCurrentVal(newVal)
        },
        increase(){
            let newVal = this.currentValue + this.step;
            this.setCurrentVal(newVal)
        },
        setCurrentVal(newVal){
            if(newVal>this.max){
                newVal = this.max
            }
            if(newVal<this.min){
                newVal = this.min
            }
            newVal =  parseFloat(Math.round(newVal * Math.pow(10, this.precision)) / Math.pow(10, this.precision));
            this.displayValue = newVal.toFixed(this.precision);
            this.currentValue = newVal;
            this.$emit('input', newVal);
            this.$emit('change', newVal);
        },
        inputChange(event){
            let val = Number(event.target.value);
            if(isNaN(val)){
                val = this.currentValue;
            }
            this.setCurrentVal(val);
        },
        handleInput(event){
            this.displayValue = event.target.value;
        }
    },
    mounted(){
        this.currentValue = this.value;
        this.displayValue = this.currentValue.toFixed(this.precision);
    }
};
</script>