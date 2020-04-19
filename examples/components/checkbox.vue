<template>
    <div class="wrapper">
        <h3 class="demo_tit">Checkbox</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-checkbox v-model="checked1">选项1</m-checkbox>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-checkbox v-model="checked1" &gt;选项1&lt;/m-checkbox&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">禁用状态：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-checkbox disabled>选项1</m-checkbox>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-checkbox disabled&gt;选项1&lt;/m-checkbox&gt;            
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
            checked1: false
        };
    },
    methods: {
        
    },
};
</script>
<style lang="scss" scoped>

</style>