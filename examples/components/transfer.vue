<template>
    <div class="wrapper">
        <h3 class="demo_tit">Transfer 穿梭框</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-transfer :data="data"
                    v-model="value1"
                />
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-transfer :data="data"
            v-model="value1"
        /&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value1: [],
                    data: [
                        {key:1, label:'选项1'},
                        {key:2, label:'选项2'},
                        {key:3, label:'选项3'},
                        {key:4, label:'选项4'},
                        {key:5, label:'选项5'}
                    ]
                };
            },
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [],
            data: [
                {key:1, label:'选项1'},
                {key:2, label:'选项2'},
                {key:3, label:'选项3'},
                {key:4, label:'选项4'},
                {key:5, label:'选项5'}
            ]
        };
    },
};
</script>
<style lang="scss" scoped>

</style>