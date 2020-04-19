<template>
    <div class="wrapper">
        <h3 class="demo_tit">Rate 评分</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-rate v-model="value1"
                />
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-rate v-model="value1" /&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value1: ''
                };
            },
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">辅助文字：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-rate v-model="value2"
                    show-text="true"
                />
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-rate v-model="value1" /&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value1: '',
                    value2: ''
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
            value1: '',
            value2: ''
        };
    },
};
</script>
<style lang="scss" scoped>

</style>