<template>
    <div class="wrapper">
        <h3 class="demo_tit">Switch 开关</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-switch 
                    v-model="value"
                ></m-switch>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-switch 
            v-model="value"
        &gt;&lt;/m-switch&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value: false
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">禁用状态：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-switch 
                    v-model="value1"
                    disabled
                ></m-switch>

                <m-switch 
                    v-model="value2"
                    disabled
                ></m-switch>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-switch 
            v-model="value"
            disabled
        &gt;&lt;/m-switch&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value: false
                };
            }
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
            value: false,
            value1: false,
            value2: true
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>

</style>