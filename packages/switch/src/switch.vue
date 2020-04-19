<template>
    <div class="m-switch"
        :class="[
            {'is-disabled': disabled},
            {'is-checked': value}
        ]"
        @click="handleClick"
    >
        <span class="m-switch_core"
            :style="bgStyle"
        >
            <span class="m-switch_button"></span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'm-switch',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        }
    },
    computed:{
        bgStyle(){
            if(this.value){
                return this.activeColor?'background:'+this.activeColor+';border-color:'+this.activeColor:'';
            }else{
                return this.inactiveColor?'background:'+this.inactiveColor+';border-color:'+this.inactiveColor:''
            }
        }
    },
    data() {
        return {
        };
    },
    methods: {
        handleClick(){
            if(this.disabled){
                return false;
            }
            this.$emit('input', !this.value);
            this.$emit('change', !this.value)
        }
    },
};
</script>