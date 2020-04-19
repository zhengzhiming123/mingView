import MIcon from './icon'
import Button from './button'
import Radio from './radio'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Input from './input'
import InputNumber from './inputnumber'
import Select from './select'
import Cascader from './cascader'
import Switch from './switch'
import Datepicker from './datepicker'
import Rate from './rate'
import Transfer from './transfer'
import Table from './table'
import TableColumn from './table/src/table-column.js'
import Tag from './tag'
import Message from './message/'

const components = [
    MIcon,
    Button,
    Radio,
    Checkbox,
    CheckboxGroup,
    Input,
    InputNumber,
    Select,
    Cascader,
    Switch,
    Datepicker,
    Rate,
    Transfer,
    Table,
    TableColumn,
    Tag,
    Message
]

const install = function(Vue){
    if(install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
    Vue.prototype.$message = Message;
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

const API = {
    install,
    ...components
}
export default API