<template>
    <div class="wrapper">
        <h3 class="demo_tit">cascader 级联选择器</h3>
        <h4 class="demo_subtit">基础用法：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-cascader :options="options"
                    @change="handleChange"
                >
                </m-cascader>
            </div>
            <div class="meta">
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-cascader :options="options"
        &gt;
        &lt;/m-cascader&gt;

        &lt;script&gt;
        export default {
            data() {
                return {
                    options: [
                        {value: '选项1', label: '选项1',
                            children: [
                                {value: '子选项11', label: '子选项11'},
                                {value: '子选项12', label: '子选项12',}
                            ]
                        },
                        {value: '选项2', label: '选项2',
                            children: [
                                {value: '子选项21', label: '子选项21'},
                                {value: '子选项22', label: '子选项22',}
                            ]
                        }
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">默认值：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-cascader :options="options"
                    v-model="selectOptions"
                >
                </m-cascader>
            </div>
            <div class="meta">
                <div class="desc">
                    设置默认值 v-model=数组
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-cascader :options="options"
            v-model="selectOptions"
        &gt;
        &lt;/m-cascader&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    options: [
                        {value: 'select1', label: '选项1',
                            children: [
                                {value: 'sub-select11', label: '子选项11'},
                                {value: 'sub-select12', label: '子选项12',}
                            ]
                        },
                        {value: 'select2', label: '选项2',
                            children: [
                                {value: 'select21', label: '子选项21'},
                                {value: 'select22', label: '子选项22',}
                            ]
                        }
                    ],
                    selectOptions:['select1', 'sub-select12']
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">禁用选项：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-cascader :options="options1"
                    v-model="selectOptions"
                >
                </m-cascader>
            </div>
            <div class="meta">
                <div class="desc">
                    数组中选项的disabled字段值为true
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-cascader :options="options"
            v-model="selectOptions"
        &gt;
        &lt;/m-cascader&gt;
        &lt;script&gt;
        export default {
            data() {
                return {
                    options1: [
                        {value: 'select1', label: '选项1',disabled: true,
                            children: [
                                {value: 'sub-select11', label: '子选项11'},
                                {value: 'sub-select12', label: '子选项12',}
                            ]
                        },
                        {value: 'select2', label: '选项2',
                            children: [
                                {value: 'select21', label: '子选项21'},
                                {value: 'select22', label: '子选项22',}
                            ]
                        }
                    ]
                };
            }
        };
        &lt;/script&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">禁用：</h4>
        <div class="demo_box">
            <div class="demo_list">
                <m-cascader :options="options" disabled
                >
                </m-cascader>
            </div>
            <div class="meta">
                <div class="desc">
                    添加disabled属性
                </div>
                <div v-highlight>
                    <pre><code class="vue">
        &lt;m-cascader :options="options" disabled
        &gt;
        &lt;/m-cascader&gt;
                    </code></pre>
                </div>
            </div>
        </div>

        <h4 class="demo_subtit">Events</h4>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {value: 'select1', label: '选项1', disabled: true,
                    children: [
                        {value: 'sub-select11', label: '子选项11'},
                        {value: 'sub-select12', label: '子选项12',}
                    ]
                },
                {value: 'select2', label: '选项2',
                    children: [
                        {value: 'select21', label: '子选项21'},
                        {value: 'select22', label: '子选项22',}
                    ]
                }
            ],
            selectOptions:['select1', 'sub-select12'],
            options1: [
                {value: 'select1', label: '选项1', disabled: true,
                    children: [
                        {value: 'sub-select11', label: '子选项11'},
                        {value: 'sub-select12', label: '子选项12',}
                    ]
                },
                {value: 'select2', label: '选项2',
                    children: [
                        {value: 'select21', label: '子选项21'},
                        {value: 'select22', label: '子选项22',}
                    ]
                }
            ]
        };
    },
    methods: {
        handleChange(val){
            console.log(val)
        }
    }
};
</script>
<style lang="scss" scoped>

</style>