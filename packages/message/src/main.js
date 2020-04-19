import Vue from 'vue';
import Message from './message.vue'
const defaults = {
    visible: false,
    content: null,
    duration: '3',
    type: 'info',
    closable: false,
    closeTxt: null,
    top: 20,
    iconType: ''
};

const MessageConstructor = Vue.extend(Message);

MessageConstructor.prototype.close = function(){
    var vm = this;
    vm.visible = false;
    setTimeout(function(){
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
        }
        this.$destroy();
    },300)
}

const messageBox = (options = {}) => {
    options = Object.assign({}, defaults, options);
    let instance = new MessageConstructor({
        el: document.createElement('div'),
        data: options
    });
    if(!instance.type || !instance.content) {return false;}
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        instance.visible = true;
        if(instance.duration != 0){
            setTimeout(function(){
                instance.close();
            }, options.duration*1000)
        }
    });
    return instance;
}

export default messageBox;