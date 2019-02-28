export default {
  // 获取某月的列表 用于渲染
  getMonthList(date) {
    return [ ...this.getLeftArr(date), ...this.getMonthListNoOther(date), ...this.getRightArr(date) ];
  },
  // 上个月末尾的一些日期
  getLeftArr(date) {
    var _year,_month,_day;
    const arr = [];
    const leftNum = this.getMonthweek(date);
    const num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
    const preDate = this.getOtherMonth(date, 'preMonth');
    const toDay = this.dateFormat(new Date());
    // 上个月多少开始
    for (let i = 0; i < leftNum; i++) {
      _year = preDate.getFullYear()
      _month = preDate.getMonth() + 1
      _month = _month>9 ? _month : '0'+_month
      _day = num + i
      _day = _day>9 ? _day : '0'+_day
      const nowTime = _year + '/' + _month + '/' + _day
      const isFuther = this.isFutherByDay(toDay,nowTime)
      arr.push({
        id: num + i,
        date: nowTime,
        isToday: false,
        otherMonth: 'preMonth',
        isFuther: isFuther
      });
    }
    return arr;
  },
  // 下个月末尾的一些日期
  getRightArr(date) {
    var _year,_month,_day;
    const arr = [];
    const nextDate = this.getOtherMonth(date, 'nextMonth');
    const leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);
    const toDay = this.dateFormat(new Date());
    const _length = 7 - leftLength % 7;
    for (let i = 0; i < _length; i++) {
      _year = nextDate.getFullYear()
      _month = nextDate.getMonth() + 1
      _month = _month>9 ? _month : '0'+_month
      _day = i + 1
      _day = _day>9 ? _day : '0'+_day
      const nowTime = _year + '/' + _month+ '/' + _day
      const isFuther = this.isFutherByDay(toDay,nowTime)
      arr.push({
        id: i + 1,
        date: nowTime,
        isToday: false,
        otherMonth: 'nextMonth',
        isFuther: isFuther
      });
    }
    return arr;
  },
  // 获取某月的列表不包括上月和下月
  getMonthListNoOther(date) {
    var _year,_month,_day;
    const arr = [];
    const num = this.getDaysInOneMonth(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const toDay = this.dateFormat(new Date());
    for (let i = 0; i < num; i++) {
      _year = year
      _month = month
      _month = _month>9 ? _month : '0'+_month
      _day = i + 1
      _day = _day>9 ? _day : '0'+_day
      const nowTime = _year + '/' + _month + '/' + _day
      const isFuther = this.isFutherByDay(toDay,nowTime)
      arr.push({
        id: i + 1,
        date: nowTime,
        isToday: toDay === nowTime,
        otherMonth: 'nowMonth',
        isFuther: isFuther
      });
    }
    return arr;
  },
  // 向前空几个
  getMonthweek(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateFirstOne = new Date(year + '/' + month + '/1');
    return this.sundayStart ?
      dateFirstOne.getDay() == 0 ? 7 : dateFirstOne.getDay() :
      dateFirstOne.getDay() == 0 ? 6 : dateFirstOne.getDay() - 1;
  },
  // 当某月的天数
  getDaysInOneMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const d = new Date(year, month, 0);
    return d.getDate();
  },
  /**
   * 获取当前日期上个月或者下个月
  */
  getOtherMonth(date, str = 'nextMonth') {
    const timeArray = this.dateFormat(date).split('/');
    const year = timeArray[0];
    const month = timeArray[1];
    const day = timeArray[2];
    let year2 = year;
    let month2;
    if (str === 'nextMonth') {
      month2 = parseInt(month) + 1;
      if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }
    } else {
      month2 = parseInt(month) - 1;
      if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
      }
    }
    let day2 = day;
    const days2 = new Date(year2, month2, 0).getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    if (month2 < 10) {
      month2 = '0' + month2;
    }
    if (day2 < 10) {
      day2 = '0' + day2;
    }
    const t2 = year2 + '/' + month2 + '/' + day2;
    return new Date(t2);
  },
  // format日期
  dateFormat(date) {
    var _year,_month,_day;
    date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
    _year = date.getFullYear()
    _month = date.getMonth() + 1
    _month = _month>9 ? _month : '0'+_month
    _day = date.getDate()
    _day = _day>9 ? _day : '0'+_day
    return _year + '/' + _month + '/' + _day;
  },
  // 默认是周天开始
  sundayStart: false,
  // 选中是否为未来某天
  isFutherByDay(toDay,nowTime){
    const t = new Date(toDay).getTime() / 1000;
    const n = new Date(nowTime).getTime() / 1000;
    if(n>t)return true
    return false
  },
};