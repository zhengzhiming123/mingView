import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const getComponent = (name) => () => import(`@/components/${name}.vue`)

const myRouter = new Router({
    linkActiveClass: 'current',
    routes: [
        {
            path: '',
            redirect: '/button'
        },
        {
            path: '/button',
            name: 'button',
            component: getComponent('button')
        },
        {
            path: '/icon',
            name: 'icon',
            component: getComponent('icon')
        },
        {
            path: '/radio',
            name: 'radio',
            component: getComponent('radio')
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: getComponent('checkbox')
        },
        {
            path: '/input',
            name: 'input',
            component: getComponent('input')
        },
        {
            path: '/inputnumber',
            name: 'inputnumber',
            component: getComponent('inputnumber')
        },
        {
            path: '/select',
            name: 'select',
            component: getComponent('select')
        },
        {
            path: '/cascader',
            name: 'cascader',
            component: getComponent('cascader')
        },
        {
            path: '/switch',
            name: 'switch',
            component: getComponent('switch')
        },
        {
            path: '/datepicker',
            name: 'datepicker',
            component: getComponent('datepicker')
        },
        {
            path: '/rate',
            name: 'rate',
            component: getComponent('rate')
        },
        {
            path: '/transfer',
            name: 'transfer',
            component: getComponent('transfer')
        },
        {
            path: '/table',
            name: 'table',
            component: getComponent('table')
        },
        {
            path: '/tag',
            name: 'tag',
            component: getComponent('tag')
        },
        {
            path: '/message',
            name: 'message',
            component: getComponent('message')
        }
    ]
})

export default myRouter