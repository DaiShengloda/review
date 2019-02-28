<style lang="scss" scoped>
@import '../sass/_function.scss';
.calIns{
  .cal-content{
    position: fixed;
    max-width: r(850);
    width: 100%;
    top: r(700);
  }
  .cal-time{
    width: 100%;
    font-size: r(34);
    text-align: center;
    margin-top: r(50);
    .time-msg{
      color: #409eff;
      font-size: r(36);
    }
  }
  .cal-pre {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: r(80);
    padding: 0 r(30);
    .pre-txt{
      font-size: r(30);
    }
    .pre-time{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .time-type{
        input{
          width: 3em;
          text-align: center;
        }
      }
    }
    .pre-btn{
      margin: 0;
      padding: 0 r(8);
    }
  }
  .cal-mark{
    font-size: r(36);
    width: 100%;
    bottom: r(380);
    color: #e93030;
    text-align: center;
  }
  .cal-tab{
    position: fixed;
    max-width: r(850);
    width: 100%;
    bottom: 0;
    font-size: r(34);
    border-top: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    .tab-btn{
      width: 50%;
      height: r(80);
      text-align: center;
      line-height: r(80);
      color: #000;
      border-right: 1px solid #e6e6e6;
      background: #fff;
    }
    .tab-active{
      color: #fff;
      background: #409eff;
    }
  }
}
</style>
<template>
<div class="calIns">
  <div v-if="showCalendar==1">
    <Calendar 
      :sundayStart="true"
      :calendarType="1"
      :markDate="markDate"
      :markDateClass="markDateClass"
      :agoDayPrevent="agoDayPrevent"
      :futureDayPrevent="futureDayPrevent"
      @choseDay="choseDay"
      @changeMonth="changeMonth">
    </Calendar>
  </div>
  <div v-else>
    <Calendar 
      @choseDay="choseDay"
      :sundayStart="true"
      :calendarType="2"
      :markDate="markDate"
      :markDateClass="markDateClass"
      :agoDayPrevent="agoDayPrevent"
      :futureDayPrevent="futureDayPrevent"
      :calendarClass="calendarClass">
    </Calendar>
  </div>
  <div class="cal-content">
    <div class="cal-time">选中日期：<span class="time-msg">{{chooseDate}}</span></div>
    <div class="cal-pre">
      <div class="pre-txt">该日期前不可点：</div>
      <div class="pre-time">
        <div class="time-type">
          <input type="number" v-model="agoTimeYear">年
        </div>
        <div class="time-type">
          <input type="number" v-model="agoTimeMonth">月
        </div>
        <div class="time-type">
          <input type="number" v-model="agoTimeDay">日
        </div>
      </div>
      <button 
        class="pre-btn"
        @click.stop="agoClick">确定</button>
    </div>
    <div class="cal-future">
      <div class="cal-pre">
      <div class="pre-txt">该日期后不可点：</div>
      <div class="pre-time">
        <div class="time-type">
          <input type="number" v-model="futureTimeYear">年
        </div>
        <div class="time-type">
          <input type="number" v-model="futureTimeMonth">月
        </div>
        <div class="time-type">
          <input type="number" v-model="futureTimeDay">日
        </div>
      </div>
      <button 
        class="pre-btn"
        @click.stop="futureClick">确定</button>
    </div>
    </div>
    <div class="cal-mark">标记当天前后两天</div>
  </div>
  <div class="cal-tab">
  	<div 
      :class="['tab-btn',{'tab-active': showCalendar==1}]" 
      @click.stop="toggleCal(1)">日历一</div>
  	<div 
      :class="['tab-btn',{'tab-active': showCalendar==2}]" 
      @click.stop="toggleCal(2)">日历二</div>
  </div>
</div>
</template>
<script>
import Calendar from '@/plugins/calendar'
export default {
  name: 'CalIns',
  components: {
  	Calendar,
  },
  data() {
  	return{
  	  calendarClass: 'cal_common',
      chooseDate: '',
      showCalendar: 1,
      markDate: [],
      markDateClass: [
        {date:'2019/02/20',className:"mark1"}, 
        {date:'2018/02/21',className:"mark2"}
      ],
      agoDayPrevent: '0',
      futureDayPrevent: '2551024000',
      agoTimeYear: null,
      agoTimeMonth: null,
      agoTimeDay: null,
      futureTimeYear: null,
      futureTimeMonth: null,
      futureTimeDay: null,
  	}
  },
  created() {
    var year = new Date().getFullYear()+"",
      month = new Date().getMonth()+1,
      day = new Date().getDate(),
      _markDate;
    month = month>9?month:'0'+month
    day = day>9?day:'0'+day
    this.chooseDate = year+'/'+month+'/'+day
    day = day-2>0 ? day-2 : 0
    _markDate = day>0 ? year+'/'+month+'/'+day : ''
    if(_markDate){
      this.markDate.push(_markDate)
    }
    day = day+2<30 ? day+2 : 0
    _markDate = day>0 ? year+'/'+month+'/'+day : ''
    if(_markDate){
      this.markDate.push(_markDate)
    }
  },
  methods: {
    choseDay(date) {
      this.chooseDate = date
    },
    toggleCal(type) {
      this.showCalendar = type
    },
    changeMonth(date) {
      console.log('changeMonth'+date)
    },
    agoClick(){
      var timeStatus = this.checkTime(this.agoTimeYear,this.agoTimeMonth,this.agoTimeDay)
      if(!timeStatus)alert('请输入正确日期')
      this.agoDayPrevent = this.dateToStamp(this.agoTimeYear,this.agoTimeMonth,this.agoTimeDay)
      this.$forceUpdate()
    },
    futureClick(){
      var timeStatus = this.checkTime(this.futureTimeYear,this.futureTimeMonth,this.futureTimeDay)
      if(!timeStatus)alert('请输入正确日期')
      this.futureDayPrevent = this.dateToStamp(this.futureTimeYear,this.futureTimeMonth,this.futureTimeDay)
      this.$forceUpdate()
    },
    checkTime(year, month, day){
      if(!year)return false
      if(!month||month>12||month<1)return false
      if(!day||day>31||day<1)return false
      return true
    },
    dateToStamp(year, month, day) {
      var date = new Date(year+'/'+month+'/'+day)
      var stamp = Date.parse(date)/1000
      return stamp+''
    }
  }
}
</script>