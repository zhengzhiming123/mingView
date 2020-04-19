<template>
    <div class="m-datepicker"
    >
        <m-input class="m-input" 
            prefixIcon="calendar"
            :value="selectLabel"
            :placeholder="placeholder"
            @click.stop="handleClick"
        />

        <div class="m-picker-popper"
            v-show="showPopper"
        >
            <span class="m-popper-arrow"></span>
            <div class="m-picker-pannel">
                <div class="m-picker-pannel_header">
                    <button class="m-picker-pannel_icon-btn m-picker_prev-btn ming-icon m-icon-d-arrow-left"
                        @click.stop="changeYear(-1)"
                    ></button>
                    <button class="m-picker-pannel_icon-btn m-picker_prev-btn ming-icon m-icon-arrow-left"
                        @click.stop="changeMonth(-1)"
                    ></button>
                    <span class="m-picker_header-label"
                        @click.stop="showYearPannel"
                    >{{calendarData.year}} 年</span>
                    <span class="m-picker_header-label">{{calendarData.month}} 月</span>
                    <button class="m-picker-pannel_icon-btn m-picker_next-btn ming-icon m-icon-d-arrow-right"
                        @click.stop="changeYear(+1)"
                    ></button>
                    <button class="m-picker-pannel_icon-btn m-picker_next-btn ming-icon m-icon-arrow-right"
                        @click.stop="changeMonth(+1)"
                    ></button>
                </div>
                <div class="m-picker-pannel_cont">
                    <table class="m-date-table" cellspacing="0" cellpadding="0" v-show="!yearPannelFlag&&!monthPannelFlag">
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                        <tr class="m-date-table_row" 
                            v-for="(item, index) in calendarData.dateList" :key="index">
                            <td 
                                :class="[
                                    {'today': today==list.fullDate},
                                    list.class,
                                    {'current': value==list.fullDate}
                                ]"
                                v-for="(list, subIdx) in item" :key="subIdx"
                                @click="handleDateClick(list)"
                            >
                                <span>{{list.date}}</span>
                            </td>
                        </tr>
                    </table>
                    <table class="m-year-table" cellspacing="0" cellpadding="0" v-show="yearPannelFlag">
                        <tr v-for="(item, index) in yearData" :key="index">
                            <td v-for="(year, subidx) in item" :key="subidx"
                                @click.stop="selectYear(year)"
                            >{{year}}</td>
                        </tr>
                    </table>
                    <table class="m-month-table" cellspacing="0" cellpadding="0" v-show="monthPannelFlag">
                        <tr v-for="(item, index) in monthData" :key="index">
                            <td v-for="(month, subidx) in item" :key="subidx"
                                @click.stop="selectMonth(month.value)"
                            >{{month.label}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'm-datepicker',
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        pickerOption: Object
    },
    computed:{ 

    },
    data() {
        return {
            showPopper: false,
            yearPannelFlag: false,
            monthPannelFlag: false,
            today: '',
            calendarData: {
                year: '',
                month: '',
                dateList: []
            },
            selectLabel: this.value,
            yearData: [],
            monthData: [
                [
                    {label:'一月',value:1},
                    {label:'二月',value:2},
                    {label:'三月',value:3},
                    {label:'四月',value:4}
                ],
                [
                    {label:'五月',value:5},
                    {label:'六月',value:6},
                    {label:'七月',value:7},
                    {label:'八月',value:8}
                ],
                [
                    {label:'九月',value:9},
                    {label:'十月',value:10},
                    {label:'十一月',value:11},
                    {label:'十二月',value:12}
                ]
            ]
        };
    },
    methods: {
        getToday(){
            let oDate = new Date();
            this.today = oDate.getFullYear()+'-'+(oDate.getMonth()+1) + '-'+oDate.getDate();
        },
        changeMonth(val){
            let month = this.calendarData.month + val;
            let dateObj = new Date();
            dateObj.setFullYear(this.calendarData.year, month-1);
            this.getCalendarData(dateObj);
        },
        changeYear(val){
            let year = this.calendarData.year + val;
            let dateObj = new Date();
            dateObj.setFullYear(year, this.calendarData.month-1);
            this.getCalendarData(dateObj);
        },
        getCalendarData(dateObj){
            this.calendarData.year = dateObj.getFullYear();
            this.calendarData.month = dateObj.getMonth()+1;
            let prevMonth = dateObj.getMonth();
            let nextMonth = dateObj.getMonth() + 2;
            let tempList = [];
            this.calendarData.dateList = [];
            //将dateObj设置为本月第一天
            dateObj.setDate(1);
            let week = dateObj.getDay();    
            let firstWeek = week;    //本月第一天的星期
            //将dateObj设置为下一个月
            dateObj.setMonth(dateObj.getMonth() + 1);
            //将dateObj设置为本月最后一天
            dateObj.setDate(0);
            let days = dateObj.getDate();       //本月天数
            let lastWeek = dateObj.getDay();    //本月最后一天的星期
            dateObj.setDate(0);
            let prevLastDate = dateObj.getDate();//上月最后一天
            for(let j=week;j>0; j--){
                tempList.unshift({
                    date: prevLastDate--,
                    month: prevMonth,
                    class: 'prev-month'
                })
            }
            for(let i=0; i<days; i++){
                tempList.push({
                    date: i+1,
                    month: this.calendarData.month,
                    fullDate: this.calendarData.year+'-'+this.calendarData.month+'-'+(i+1)
                })
            }
            let nextMonthDate = 1;
            for(let m=lastWeek+1; m<=6; m++){
                tempList.push({
                    date: nextMonthDate++,
                    month: nextMonth,
                    class: 'next-month'
                })
            }
            let lineNum = Math.ceil(tempList.length/7);
            //将数据分为7个一组,push到this.calendarData.dateList中
            for(let n =0; n<lineNum; n++){
                this.calendarData.dateList.push(tempList.slice(n*7,7*(n+1)));
            }
            //补全数据,一共显示6行数据
            if(lineNum < 6){
                if(firstWeek === 0){
                    //在前面添加一行
                    let prevArr = [];
                    for(let x=6;x>=0; x--){
                        prevArr.push({
                            date: prevLastDate-x,
                            month: prevMonth,
                            class: 'prev-month'
                        })
                    }
                    this.calendarData.dateList.unshift(prevArr);
                    lineNum++;
                }
                
                for(let y=lineNum; y<6; y++){
                    //在后面添加行
                    let nextArr = [];
                    for(let x=0;x<7; x++){
                        nextArr.push({
                            date: nextMonthDate++,
                            month: nextMonth,
                            class: 'next-month'
                        })
                    }
                    this.calendarData.dateList.push(nextArr);
                }
            }
        },
        handleDateClick(date){
            let selectDate = this.calendarData.year + '-' + date.month + '-' + date.date;
            this.selectLabel = selectDate;
            this.showPopper = false;
            this.$emit('input', selectDate);
            this.$emit('change', selectDate);
        },
        handleClick(){
            this.showPopper = true;
            this.setSelected();
        },
        setSelected(){
            if(this.value){
                let dateObj = new Date(this.value);
                this.getCalendarData(dateObj);
                this.selectLabel = this.value;

            }else{
                this.getCalendarData(new Date());
            }
        },
        showYearPannel(){
            this.yearPannelFlag = true;
            this.yearData = [];
            let prefix = this.calendarData.year.toString().substring(0, 3);
            let tempYearData = [];
            for(let i=0; i<10; i++){
                tempYearData.push(prefix+''+i);
            }
            for(let j=0; j<Math.ceil(tempYearData.length/4); j++){
                this.yearData.push(tempYearData.slice(4*j, 4*(j+1)))
            }
        },
        selectYear(val){
            this.calendarData.year = val;
            this.yearPannelFlag = false;
            this.monthPannelFlag = true;
        },
        selectMonth(val){
            this.calendarData.month = val;
            this.monthPannelFlag = false;
            let dateObj = new Date(this.calendarData.year+'-'+this.calendarData.month);
            this.getCalendarData(dateObj);
        },
        closePopper(){
            this.showPopper = false;
            this.yearPannelFlag = false;
            this.monthPannelFlag = false;
        }
    },
    mounted() {
        this.getToday();
        let _this = this;
        let body = document.querySelector('body')
        body.addEventListener('click',()=>{
            _this.closePopper();
        },false)
    }
};
</script>