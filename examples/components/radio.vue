<template>
    <div class="wrapper">
        <h3 class="demo_tit">Radio</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-radio v-model="radioValue" value="1">选项1</m-radio>
                <m-radio v-model="radioValue" value="2">选项2</m-radio>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
            &lt;m-radio v-model="radioValue" value="1"&gt;选项1&lt;/m-radio&gt;
            &lt;m-radio v-model="radioValue" value="2"&gt;选项2&lt;/m-radio&gt;
            &lt;script&gt;
                export default {
                    components: {},
                    props: {},
                    data() {
                        return {
                            radioValue: '1'
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
                <m-radio disabled v-model="radioValue2" value="1">选项1</m-radio>
                <m-radio disabled v-model="radioValue2" value="2">选项2</m-radio>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
            &lt;m-radio disabled v-model="radioValue2" value="1"&gt;选项1&lt;/m-radio&gt;
            &lt;m-radio disabled v-model="radioValue2" value="2"&gt;选项2&lt;/m-radio&gt;
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
            radioValue: '1',
            radioValue2: '1'
        };
    }
};
</script>
<style lang="scss" scoped>

</style>