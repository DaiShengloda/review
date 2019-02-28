<style lang="scss" scoped>
@import '../../sass/_function';
@import './calendar';
</style>
<template>
  <div :class="['calendar',calendarClass]">
    <div 
      class="calendar_type"
      v-if="calendarType==1">
      <div class="calendar_header">
        <li @click.stop="PreMonth(myDate,false)">
          <div class="header_lef"></div>
        </li>
        <li class="header_mid">{{dateTop}}</li>
        <li @click.stop="NextMonth(myDate,false)">
          <div class="header_rig"></div>
        </li>
      </div>
      <div class="calendar_week">
        <div 
          class="week_day" 
          v-for="tag in textTop">
          {{tag}}
        </div>
      </div>
      <div class="calendar_body">
        <div 
          :class="['body_row',{'even':i%2==0}]"
          v-for="(value,i) in newList">
          <div 
            class="row_item" 
            v-for="(item,index) in value" 
            @click.stop="clickDay(item,i,index)">
            <div 
              :class="['item_time',
                {'item_isMark': item.isMark},
                {'item_other_dayhide':item.otherMonth!=='nowMonth'},
                {'item_want_dayhide':item.dayHide},
                {'item_isToday':item.isToday},
                {'item_chose_day':item.chooseDay}]">
              {{item.id}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
      class="calendar_type"
      v-else-if="calendarType==2">
      <div class="calendar_header">
        <li @click.stop="PreRow(myDate,false)">
          <div class="header_lef"></div>
        </li>
        <li class="header_mid">{{dateTop}}</li>
        <li @click.stop="NextRow(myDate,false)">
          <div class="header_rig"></div>
        </li>
      </div>
      <div class="calendar_week">
        <div 
          class="week_day" 
          v-for="tag in textTop">
          {{tag}}
        </div>
      </div>     
      <div class="calendar_body">
        <div 
          :class="['body_row']"
          v-for="(value,i) in newList"
          v-if="i==showRow">
          <div 
            class="row_item" 
            v-for="(item,index) in value" 
            @click.stop="clickDay(item,i,index)">
            <div  
              :class="['item_time',
                {'item_isMark': item.isMark},
                {'item_other_dayhide':item.otherMonth!=='nowMonth'},
                {'item_want_dayhide':item.dayHide},
                {'item_isToday':item.isToday},
                {'item_chose_day':item.chooseDay}]">
              {{item.id}}
            </div>
          </div>
        </div>       
      </div>
    </div>
  </div>
</template>
<script>
import timeUtil from './calendar';
export default {
  data() {
    return {
      textTop: ['一', '二', '三', '四', '五', '六', '日'],
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: '',
      newList: [],
      // 当天排数
      toDayRow: 1,
      // 选中天数排数
      choDayRow: null,
    };
  },
  computed: {
    showRow: function () {
      var cooRow = this.choDayRow
      var tooRow = this.toDayRow
      return cooRow == null ? tooRow : cooRow
    },
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: { type: String, default: `0` },
    futureDayHide: { type: String, default: `2554387200` },
    calendarClass: {
      type: String,
      default: 'calendar_d'
    },
    // 日历类型：1--默认、2--简易模式
    calendarType: {
      type: Number,
      default: 1
    },
  },
  created() {
    this.intStart();
    this.myDate = new Date();
  },
  mounted() {
    this.getList(this.myDate);
  },
  methods: {
    intStart() {
      if (this.sundayStart) {
        this.textTop = ['日', '一', '二', '三', '四', '五', '六'];
      } else {
        this.textTop = ['一', '二', '三', '四', '五', '六', '日'];
      }
      timeUtil.sundayStart = this.sundayStart;
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },
    clickDay: function (item, index) {
      var isFuther = item.isFuther
      if(isFuther&&this.calendarType==1){
        return
      }
      if (item.otherMonth === 'nowMonth' && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== 'nowMonth') {
        item.otherMonth === 'preMonth'
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date);
      }
    },
    ChoseMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = new Date(date);
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function () {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map((k) => {
        return timeUtil.dateFormat(k);
      })
      markDateMore = markDateMore.map((k) => {
        k.date = timeUtil.dateFormat(k.date)
        return k;
      })
      return [markDate, markDateMore];
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs();
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = '';
        let k = arr[i];
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || '';
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          this.toDayRow = Math.floor(i/7)
          this.$emit('isToday', nowTime)
        }
        let flag = !k.dayHide && k.otherMonth === 'nowMonth';
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime)
          this.historyChose.push(nowTime)
          k.chooseDay = true
          this.choDayRow = Math.floor(i/7)
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag
        ) {
          k.chooseDay = true
          this.choDayRow = Math.floor(i/7)
        }
      }
      this.list = arr;
      this.formateList();
    },
    formateList(){
      this.newList = []
      var group = Math.floor(this.list.length/7),
          last = this.list.length%7
      for(var i=0;i<group;i++){
        this.newList[i] = this.list.slice(i*7,i*7+7)
      }
      if(last>0){
        this.newList[group] = this.list.slice(group*7,group*7+last)
      }
    },
    PreRow(){
      var group,date,otherMonth
      var newRow = this.showRow-1 
      if(newRow<0){
        group = this.newList[0]
        for(var i=group.length-1;i>-1;i--){
          otherMonth = group[i].otherMonth
          if(otherMonth=="preMonth"){
            date = group[i].date
            this.PreMonth(date)
            break
          }
        }  
      }else{
        this.choDayRow = newRow
      }
      this.$forceUpdate()
    },
    NextRow(){
      var group,date,otherMonth
      var newRow = this.showRow+1 
      if(newRow>this.newList.length-1){
        group = this.newList[this.newList.length-1]
        for(var i=0;i<group.length;i++){
          otherMonth = group[i].otherMonth
          if(otherMonth=="nextMonth"){
            date = group[i].date
            this.NextMonth(date)
            break
          }
        }  
      }else{
        this.choDayRow = newRow
      }
      this.$forceUpdate()
    }
  },
};
</script>