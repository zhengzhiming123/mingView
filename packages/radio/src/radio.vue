<template>
    <label class="m-radio"
        :class="[
            {'is-checked': value === model},
            {'is-disabled': disabled}
        ]"
        @click.stop="handleClick"
    >
        <span class="m-radio_input"
            :class="[{'is-disabled': disabled}]"
        >
            <span class="m-radio__inner"></span>
        </span>
        <span class="m-radio_text"><slot></slot></span>
    </label>
</template>

<script>
export default {
    name: 'm-radio',
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        propValue: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: "propValue",
        event: "select"
    },
    computed: {
        isGroup(){
            return this.$parent.$options._componentTag === 'm-radio-group'
        },
        model: {
            get(){
                return this.isGroup ? this.$parent.value : this.propValue
            },
            set(newValue){
                this.isGroup ? this.$parent.$emit('select', newValue) : this.$emit('select', newValue)
            }
        }
    },
    methods: {
        handleClick(){
            if(this.disabled) return ;
            this.model = this.value
        }
    }
};
</script>