<template>
    <div class="wrapper">
        <h3 class="demo_tit">Select</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-select :options='options' v-model="value"
                ></m-select>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-select :options='options' v-model="value"&gt;&lt;/m-select&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value: '',
                    options: [
                        {value: '选项1', label: '选项1'},
                        {value: '选项2', label: '选项2'}
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">有禁用选项：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-select :options='options1' v-model="value1"></m-select>
            </div>
            <div class="meta">
                <div class="desc">
                    在数据中，设置disabled值为true，即可禁用该选项
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-select :options='options1' v-model="value1"&gt;&lt;/m-select&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value: '',
                    options: [
                        {value: '选项1', label: '选项1', disabled: true},
                        {value: '选项2', label: '选项2'}
                    ]
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
                <m-select :options='options1' v-model="value1" disabled></m-select>
            </div>
            <div class="meta">
                <div class="desc">
                    为m-select设置disabled属性，则整个选择器为禁用状态
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-select :options='options1' v-model="value1"&gt;&lt;/m-select&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    value: '',
                    options: [
                        {value: '选项1', label: '选项1', disabled: true},
                        {value: '选项2', label: '选项2'}
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">多选：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-select :options='options' v-model="value2" multiple></m-select>
            </div>
            <div class="meta">
                <div class="desc">
                    为m-select设置multiple属性，则整个选择器为多选
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-select :options='options' v-model="value2" multiple&gt;&lt;/m-select&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">可搜索：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-select :options='options' v-model="value3" filterable></m-select>
            </div>
            <div class="meta">
                <div class="desc">
                    为m-select设置multiple属性，则整个选择器为多选
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-select :options='options' v-model="value2" multiple&gt;&lt;/m-select&gt;
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
            value: '选项2',
            options: [
                {value: '选项1', label: '选项1'},
                {value: '选项2', label: '选项2'},
                {value: '选项3', label: '选项3'},
                {value: '选项4', label: '选项4'}
            ],
            value1: '',
            options1: [
                {value: '选项1', label: '选项1'},
                {value: '选项2', label: '选项2', disabled: true},
                {value: '选项3', label: '选项3'},
                {value: '选项4', label: '选项4'}
            ],
            disabled: true,
            value2: [{value: '选项1', label: '选项1'}],
            value3: ''
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>

</style>