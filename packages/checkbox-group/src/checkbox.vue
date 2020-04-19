<template>
    <label class="m-checkbox"
        :class="[
            {'is-checked': value},
            {'is-disabled': disabled}
        ]"
        @click.stop="handleClick"
    >
        <span class="m-checkbox_input"
            :class="[{'is-disabled': disabled}]"
        >
            <span class="m-checkbox__inner"></span>
        </span>
        <span class="m-checkbox_text"><slot></slot></span>
    </label>
</template>

<script>
export default {
    name:'m-checkbox',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        handleClick(){
            this.$emit('input', !this.value); // 传值父组件
            this.$emit('change', !this.value);
        }
    }
};
</script>