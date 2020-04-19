<template>
    <div class="wrapper">
        <h3 class="demo_tit">Button 按钮</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list btn_list">
                <m-button type="">默认按钮</m-button>
                <m-button type="primary">主要按钮</m-button>
                <m-button type="success">成功按钮</m-button>
                <m-button type="warning">警告按钮</m-button>
                <m-button type="danger">危险按钮</m-button>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-button&gt;默认按钮&lt;/m-button&gt;
        &lt;m-button type="primary"&gt;主要按钮&lt;/m-button&gt;
        &lt;m-button type="success"&gt;成功按钮&lt;/m-button&gt;
        &lt;m-button type="warning"&gt;警告按钮&lt;/m-button&gt;
        &lt;m-button type="danger"&gt;危险按钮&lt;/m-button&gt;
                    </code></pre>
                </div>
            </div>
        </div>
        <h4 class="demo_subtit">禁用状态：</h4>
        <div class="demo_box">
            <div class="demo_list btn_list">
                <m-button type="" disabled>默认按钮</m-button>
                <m-button type="primary" disabled>主要按钮</m-button>
                <m-button type="success" disabled>成功按钮</m-button>
                <m-button type="warning" disabled>警告按钮</m-button>
                <m-button type="danger" disabled>危险按钮</m-button>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-button disabled&gt;默认按钮&lt;/m-button&gt;
        &lt;m-button type="primary" disabled&gt;主要按钮&lt;/m-button&gt;
        &lt;m-button type="success" disabled&gt;成功按钮&lt;/m-button&gt;
        &lt;m-button type="warning" disabled&gt;警告按钮&lt;/m-button&gt;
        &lt;m-button type="danger" disabled&gt;危险按钮&lt;/m-button&gt;
                    </code></pre>
                </div>
            </div>
        </div>
        <h4 class="demo_subtit">不同尺寸：</h4>
        <div class="demo_box">
            <div class="demo_list btn_list">
                <m-button size="big">大按钮</m-button>
                <m-button >默认按钮</m-button>
                <m-button size="small" >小按钮</m-button>
                <m-button size="mini" >超小按钮</m-button>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-button size="big" &gt;大按钮&lt;/m-button&gt;
        &lt;m-button&gt;默认按钮&lt;/m-button&gt;
        &lt;m-button size="small"&gt;小按钮&lt;/m-button&gt;
        &lt;m-button size="mini"&gt;超小按钮&lt;/m-button&gt;
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