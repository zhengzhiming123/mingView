<template>
    <div class="wrapper">
        <h3 class="demo_tit">Tag 标签</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-tag>标签一</m-tag>
                <m-tag type="success">标签二</m-tag>
                <m-tag type="info">标签三</m-tag>
                <m-tag type="warning">标签四</m-tag>
                <m-tag type="danger">标签五</m-tag>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-tag&gt;标签一&lt;/m-tag&gt;
        &lt;m-tag type="success&gt;标签二&lt;/m-tag&gt;
        &lt;m-tag type="info"&gt;标签三&lt;/m-tag&gt;
        &lt;m-tag type="warning"&gt;标签四&lt;/m-tag&gt;
        &lt;m-tag type="danger"&gt;标签五&lt;/m-tag&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">可关闭：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-tag :closable="true">标签一</m-tag>
                <m-tag :closable="true" type="success">标签二</m-tag>
                <m-tag :closable="true" type="info">标签三</m-tag>
                <m-tag :closable="true" type="warning">标签四</m-tag>
                <m-tag :closable="true" type="danger">标签五</m-tag>
            </div>
            <div class="meta">
                <p class="desc">设置closable属性可以定义标签是否可删除</p>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-tag :closable="true"&gt;标签一&lt;/m-tag&gt;
        &lt;m-tag :closable="true" type="success"&gt;标签二&lt;/m-tag&gt;
        &lt;m-tag :closable="true" type="info"&gt;标签三&lt;/m-tag&gt;
        &lt;m-tag :closable="true" type="warning"&gt;标签四&lt;/m-tag&gt;
        &lt;m-tag :closable="true" type="danger"&gt;标签五&lt;/m-tag&gt;
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style lang="scss" scoped>

</style>