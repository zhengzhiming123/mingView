<template>
    <div class="wrapper">
        <h3 class="demo_tit">Datepicker 日期选择器</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-datepicker v-model="value1"
                    :picker-options="pickerOption1" 
                />
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-datepicker v-model="value1" /&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value1: ''
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
            value1: '',
            pickerOption1: {
                max: '%today'
            }
        };
    }
};
</script>