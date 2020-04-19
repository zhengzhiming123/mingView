<template>
    <span class="m-tag"
        :class="[type?'m-tag_'+type:'']"
    >
        <slot></slot>
        <template v-if="closable">
            <i class="ming-icon m-icon-error1 m-tag_close"
                :click="handleClose"
            ></i>
        </template>
    </span>
</template>

<script>
export default {
    name: 'm-tag',
    props: {
        type: {
            type: String,
            default: ''
        },
        closable: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClose(){
            this.$emit('close')
        }
    }
};
</script>
