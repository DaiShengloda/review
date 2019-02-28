<style lang="scss" scoped>
@import '../sass/_function.scss';
.calIns{
  .cal-time{
    position: fixed;
    max-width: r(850);
    width: 100%;
    bottom: r(450);
    font-size: r(34);
    text-align: center;
    margin-top: r(50);
    .time-msg{
      color: #409eff;
      font-size: r(36);
    }
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
      @choseDay="choseDay"
      :sundayStart="false"
      :calendarType="1">
    </Calendar>
  </div>
  <div v-else>
    <Calendar 
      @choseDay="choseDay"
      :sundayStart="true"
      :calendarType="2"
      :calendarClass="calendarClass">
    </Calendar>
  </div>
  <div class="cal-time">选中日期：<span class="time-msg">{{chooseDate}}</span></div>
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
  	}
  },
  created() {
    var year = new Date().getFullYear()+"",
      month = new Date().getMonth()+1,
      day = new Date().getDate();
    month = month>9?month:'0'+month
    day = day>9?day:'0'+day
    this.chooseDate = year+'/'+month+'/'+day
  },
  methods: {
    choseDay(date) {
      this.chooseDate = date
    },
    toggleCal(type) {
      this.showCalendar = type
    }
  }
}
</script>