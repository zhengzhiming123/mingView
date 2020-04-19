<template>
    <div id="app" class="app">
        <div class="header"><h1 class="title">Mingview</h1></div>
        <div class="container">
            <div class="aside">
                <div class="aside_nav">
                    <h2 class="aside_title">组件</h2>
                    <ul class="aside_list">
                        <router-link tag="li"  to="/button">button 按钮</router-link>
                        <router-link tag="li"  to="/icon">icon 图标</router-link>
                        <router-link tag="li"  to="/radio">radio</router-link>
                        <router-link tag="li"  to="/checkbox">checkbox</router-link>
                        <router-link tag="li"  to="/input">input</router-link>
                        <router-link tag="li"  to="/inputnumber">InputNumber 计数器</router-link>
                        <router-link tag="li"  to="/select">select 选择器</router-link>
                        <router-link tag="li"  to="/cascader">cascader 级联选择器</router-link>
                        <router-link tag="li"  to="/switch">switch 开关</router-link>
                        <router-link tag="li"  to="/datepicker">datepicker 日期选择</router-link>
                        <router-link tag="li"  to="/rate">rate 评分</router-link>
                        <router-link tag="li"  to="/transfer">Transfer 穿梭框</router-link>
                        <router-link tag="li"  to="/table">Table 表格</router-link>
                        <router-link tag="li"  to="/tag">Tag 标签</router-link>
                        <router-link tag="li"  to="/message">message</router-link>
                    </ul>
                    
                </div>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
        
    }
}
</script>

