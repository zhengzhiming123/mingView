<template>
    <transition name="fade">
    <div class="m-message"
        :class="[type?'m-message-'+type:'']"
        v-show="visible"
    >
        <i class="ming-icon m-message-icon"
            :class="[type?'m-icon-'+type:'m-icon-info']"
        ></i>
        <p class="m-message_content" v-html="content"></p>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'Message',
    props: {   
    },
    data(){
        return {

        }
    },
    methods: {
    }
};
</script>
