<template>
    <div class="m-transfer"
    >
        <div class="m-transfer-panel">
            <div class="m-transfer-panel_header">
                <div class="m-checkbox">
                    <label class="m-checkbox_label"
                        :class="leftCheckAllClass"
                        @click="handleLeftCheckAll"
                    >
                        <span class="m-checkbox_input">
                            <span class="m-checkbox__inner"></span>
                        </span>
                        <span class="m-checkbox_text">{{titles[0]}}</span>
                    </label>
                </div>
            </div>
            <div class="m-transfer-panel_body">
                <div class="m-transfer-panel_list">
                    <m-checkbox-group :list="leftBoxData" :isHorizontal="false" 
                    v-model="leftSelectedData"
                    ></m-checkbox-group>
                </div>
            </div>
        </div>

        <div class="m-transfer_buttons">
            <button class="m-btn m-btn-primary m-transfer_button"
                :class="{'is-disabled':leftSelectedData.length==0}"
                @click="moveToRight"
            >
                <span><i class="ming-icon m-icon-arrow-right"></i></span>
            </button>
            <button class="m-btn m-btn-primary m-transfer_button"
                :class="{'is-disabled':rightSelectedData.length==0}"
                @click="moveToLeft"
            >
                <span><i class="ming-icon m-icon-arrow-left"></i></span>
            </button>
        </div>

        <div class="m-transfer-panel">
            <div class="m-transfer-panel_header">
                <div class="m-checkbox">
                    <label class="m-checkbox_label"
                        :class="rightCheckAllClass"
                        @click="handleRightCheckAll"
                    >
                        <span class="m-checkbox_input">
                            <span class="m-checkbox__inner"></span>
                        </span>
                        <span class="m-checkbox_text">{{titles[1]}}</span>
                    </label>
                </div>
            </div>
            <div class="m-transfer-panel_body">
                <div class="m-transfer-panel_list">
                    <m-checkbox-group :list="rightBoxData" 
                        :isHorizontal="false"
                        v-model="rightSelectedData"
                    >
                    </m-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-transfer',
    props: {
        titles: {
            type: Array,
            default(){
                return ['列表1', '列表2']
            }
        },
        data: Array,
        value: {
            type: Array,
            default(){
                return []
            }
        }
    },
    computed: {
        leftBoxData(){
            if(this.value.length>0){
                return this.data.filter((item) => {
                    return this.value.indexOf(item.key) == -1;
                }) 
            }else{
                return this.data
            }
        },
        rightBoxData(){
            return this.data.filter((item) => {
                return this.value.indexOf(item.key)>=0;
            })
        },
        leftCheckAllClass(){
            if(this.leftSelectedData.length==0){
                return ''
            }else if(this.leftSelectedData.length == this.leftBoxData.length){
                return 'is-checked'
            }else{
                return 'is-indeterminate'
            }
        },
        rightCheckAllClass(){
            if(this.rightSelectedData.length==0){
                return ''
            }else if(this.rightSelectedData.length == this.rightBoxData.length){
                return 'is-checked'
            }else{
                return 'is-indeterminate'
            }
        }
    },
    data() {
        return {
            leftSelectedData: [],
            rightSelectedData: [],
            leftCheckAll: false,
            rightCheckAll: false
        };
    },
    methods: {
        handleLeftClick(val){
            if(val.length>0){
                this.leftSelectedData = val;
            }
        },
        handleRightClick(val){
            if(val.length>0){
                this.rightSelectedData = val;
            }
        },
        moveToRight(){
            if(this.leftSelectedData.length>0){
                let temSelectVal = [];
                this.leftSelectedData.forEach(element => {
                    temSelectVal.push(element.key);
                });
                
                this.$emit('input', this.value.concat(temSelectVal));
                this.leftSelectedData = [];
            }
        },
        moveToLeft(){
            if(this.rightSelectedData.length>0){
                let temVal = this.value;
                this.rightSelectedData.forEach((item) => {
                    let idx = temVal.indexOf(item.key);
                    temVal.splice(idx, 1);
                })
                this.$emit('input', temVal);
                this.rightSelectedData = [];
            }
        },
        handleLeftCheckAll(){
            this.leftCheckAll = !this.leftCheckAll;
            if(this.leftCheckAll){
                this.leftSelectedData = this.leftBoxData;
            }else{
                this.leftSelectedData = [];
            }
        },
        handleRightCheckAll(){
            this.rightCheckAll = !this.rightCheckAll;
            if(this.rightCheckAll){
                this.rightSelectedData = this.rightBoxData;
            }else{
                this.rightSelectedData = [];
            }
        }
    },
};
</script>