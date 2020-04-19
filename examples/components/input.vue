<template>
    <div class="wrapper">
        <h3 class="demo_tit">Input</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-input placeholder="请输入内容" v-model="input"></m-input>
                {{input}}
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-input placeholder="请输入内容" v-model="input"&gt;&lt;/m-input&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    input: ''
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
                <m-input placeholder="请输入内容" v-model="input" disabled></m-input>
                {{input}}
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-input placeholder="请输入内容" v-model="input" disabled&gt;&lt;/m-input&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">文本域：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-input placeholder="请输入内容" v-model="input" type="textarea"></m-input>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-input placeholder="请输入内容" v-model="input" disabled&gt;&lt;/m-input&gt;
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
            input: ''
        };
    }
};
</script>