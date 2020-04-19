<template>
    <div class="wrapper">
        <h3 class="demo_tit">Message </h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list btn_list">
                <m-button type="primary" @click="open">打开message</m-button>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-button type="primary" @click="open"&gt;打开message&lt;/m-button&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">不同状态：</h4>
        <div class="demo_box">
            <div class="demo_list btn_list">
                <m-button type="success" @click="open2">成功</m-button>
                <m-button type="warning" @click="open3">警告</m-button>
                <m-button type="primary" @click="open">消息</m-button>
                <m-button type="danger" @click="open4">错误</m-button>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-button type="success" @click="open2"&gt;成功&lt;/m-button&gt;
        &lt;m-button type="warning" @click="open3"&gt;警告&lt;/m-button&gt;
        &lt;m-button type="primary" @click="open"&gt;消息&lt;/m-button&gt;
        &lt;m-button type="danger" @click="open4"&gt;错误&lt;/m-button&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                };
            },
            methods: {
                open(){
                    this.$message({content:'这是一条提示消息'})
                },
                open2(){
                    this.$message({content:'这是一条成功消息',type:"success"})
                },
                open3(){
                    this.$message({content:'这是一条警告消息',type:"warning"})
                },
                open4(){
                    this.$message({content:'这是一条错误消息',type:"error"})
                }
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
    components: {},
    props: {},
    data() {
        return {
        };
    },
    methods: {
        open(){
            this.$message({content:'这是一条提示消息'})
        },
        open2(){
            this.$message({content:'这是一条成功消息',type:"success"})
        },
        open3(){
            this.$message({content:'这是一条警告消息',type:"warning"})
        },
        open4(){
            this.$message({content:'这是一条错误消息',type:"error"})
        }
    }
};
</script>