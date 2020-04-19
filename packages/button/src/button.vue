<template>
    <button
        class="m-btn"
        @click="handleClick"
        :class="[
            type?'m-btn-'+type:'',
            {'is-disabled': disabled},
            size? 'm-btn-'+size:''
        ]"
        :type="nativeType"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'm-button',
    props: {
        type: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        }
    },
    methods: {
        handleClick(evt){
            this.$emit('click', evt);
        }
    }
};
</script>
