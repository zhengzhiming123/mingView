<template>
    <div class="wrapper">
        <h3 class="demo_tit">Table 表格</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-table :tableData="tableData">
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                </m-table>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-table :tableData="tableData"&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
        &lt;/m-table&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                    tableData: [
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'}
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">带斑马纹：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-table :tableData="tableData1"
                    stripe
                >
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                </m-table>
            </div>
            <div class="meta">
                <div class="desc">
                    stripe属性可以创建带斑马纹的表格。默认为false，设置为true启用。
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-table :tableData="tableData
            stripe
        "&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
        &lt;/m-table&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                    tableData: [
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'}
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">固定表头：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-table :tableData="tableData1" height="250"
                >
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                </m-table>
            </div>
            <div class="meta">
                <div class="desc">
                    在 m-table 元素中定义了height属性，即可实现固定表头的表格。
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-table :tableData="tableData height="250"
        "&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
        &lt;/m-table&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                    tableData: [
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'}
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">固定列：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-table :tableData="tableData1" height="250"
                >
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                    <m-table-column field="action" label="操作" width="100"
                        fixed
                    >
                    <template slot-scope="scope">
                        <m-button @click="eidtRow(scope.index, scope.row)">编辑</m-button>
                    </template>
                    </m-table-column>
                </m-table>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-table :tableData="tableData1" height="250"
        &gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column field="action" label="操作" width="100"
                fixed
            &gt;
            &lt;template slot-scope="scope"&gt;
                &lt;m-button @click="eidtRow(scope.index, scope.row)"&gt;编辑&lt;/m-button&gt;
            &lt;/template&gt;
            &lt;/m-table-column&gt;
        &lt;/m-table&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                    tableData1: [
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'}
                    ],
                    selectData:null
                };
            },
            methods: {
                eidtRow(idx,data){
                    console.log(idx)
                    console.log(data)
                },
                currentChange(item){
                    console.log(item)
                }
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>
        <h4 class="demo_subtit">单选：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-table :tableData="tableData1" height="250"
                    highlight-current-row
                    @currentChange="currentChange"
                >
                    <m-table-column field="date" label="日期" width
                    ="100"></m-table-column>
                    <m-table-column field="name" label="姓名" width
                    ="100"></m-table-column>
                    <m-table-column field="address" label="地址" width="100">
                    </m-table-column>
                </m-table>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-table :tableData="tableData"&gt;
            &lt;m-table-column field="date" label="日期" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="name" label="姓名" width
            ="100"&gt;&lt;/m-table-column&gt;
            &lt;m-table-column field="address" label="地址" width="100"&gt;
            &lt;/m-table-column&gt;
        &lt;/m-table&gt;
        &lt;script&gt;
        export default {
            components: {},
            props: {},
            data() {
                return {
                    tableData1: [
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'},
                        {date:'2020-1-2', name:'ming', address: '福建福州'}
                    ],
                    selectData:null
                };
            },
            methods: {
                currentChange(item){
                    console.log(item)
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
            tableData: [
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'}
            ],
            tableData1: [
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'},
                {date:'2020-1-2', name:'ming', address: '福建福州'}
            ],
            selectData:null
        };
    },
    methods: {
        eidtRow(idx,data){
            console.log(idx)
            console.log(data)
        },
        currentChange(item){
            console.log(item)
        }
    }
};
</script>
<style lang="scss" scoped>

</style>