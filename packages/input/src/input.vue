<template>
    <div class="m-input"
        :class="[{'is-disabled': disabled},
            {'m-input--prefix':getprefixVisible()}
        ]"
        @click="handleWrapClick"
    >
        <template v-if="type!='textarea'">
            <input class="m-input_inner" type="text" 
                :placeholder="placeholder" 
                :value="value" 
                :disabled="disabled" 
                :readonly="readonly"
                @input="handleInput">
            <span class="m-input_prefix"
                v-if="getprefixVisible()"
            >
                <slot name="prefix"></slot>
                <i class="m-input_icon ming-icon"
                    v-if="prefixIcon"
                    :class="`m-icon-${prefixIcon}`"
                >
                </i>
            </span>
            <span class="m-input_suffix"
                v-if="getSuffixVisible()"
            >
                <slot name="suffix"></slot>
                <i class="m-input_icon ming-icon"
                v-if="suffixIcon"
                :class="`m-icon-${suffixIcon}`">
                </i>
            </span>
        </template>
        <textarea v-else class="m-textarea" @input="handleInput"></textarea>
    </div>
</template>

<script>
export default {
    name: 'm-input',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        suffixIcon: {
            //右侧图标
            type: String,
            default: ''
        },
        prefixIcon: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        };
    },
    methods: {
        handleInput(event){
            this.$emit('input', event.target.value)
        },
        handleWrapClick(){
            this.$emit('click', event)
        },
        getSuffixVisible(){
            return this.$slots.suffix || this.suffixIcon
        },
        getprefixVisible(){
            return this.$slots.prefix || this.prefixIcon
        }
    },
};
</script>