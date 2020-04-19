<template>
    <div class="wrapper">
        <h3 class="demo_tit">Input</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-inputnumber v-model="num"></m-inputnumber>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-inputnumber v-model="num" @change="handleChange"&gt;&lt;/m-inputnumber&gt;
        &lt;script&gt;
        export default {
            props: {},
            data() {
                return {
                    num: 1
                };
            },
            methods: {
                handleChange(val){
                    console.log(val)
                }
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
                <m-inputnumber v-model="num2" :disabled="true"></m-inputnumber>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-inputnumber v-model="num" :disabled="true"&gt;&lt;/m-inputnumber&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">步数：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-inputnumber v-model="num3" :step="2"></m-inputnumber>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-inputnumber v-model="num" :step="2"&gt;&lt;/m-inputnumber&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">精度：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-inputnumber v-model="num4" :precision="2"></m-inputnumber>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-inputnumber v-model="num" :precision="2"&gt;&lt;/m-inputnumber&gt;
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            num: 1,
            num2: 2,
            num3: 2,
            num4: 2
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>

</style>