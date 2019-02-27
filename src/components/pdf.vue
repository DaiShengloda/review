<template>
<div class="pdf">
  <div class="pdf-tab">
    <div 
      class="btn-def btn-pre"
      @click.stop="prePage">上一页</div>
    <div 
      class="btn-def btn-next"
      @click.stop="nextPage">下一页</div>
    <div 
      class="btn-def"
      @click.stop="clock">顺时针</div>
    <div 
      class="btn-def"
      @click.stop="counterClock">逆时针</div>
    <div 
      class="btn-def"
      @click.stop="pdfPrintAll">全部打印</div>
    <div 
      class="btn-def"
      @click.stop="pdfPrint">部分打印</div>
  </div>
  <div class="pdf-total">{{pageNum}}/{{pageTotalNum}}</div>
  <div class="pdf-process">进度：{{loadedRatio|fixedTwo}}</div>
  <div class="pdf-num">页面加载成功: {{curPageNum}}</div>
  <pdf 
    ref="pdf"
    :src="pdfUrl"
    :page="pageNum"
    :rotate="pageRotate"
    @password="password"
    @progress="loadedRatio = $event"
    @page-loaded="pageLoaded($event)"
    @num-pages="pageTotalNum=$event" 
    @error="pdfError($event)"
    @link-clicked="page = $event">
  </pdf>
</div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Pdf',
  components:{
  	pdf
  },
  data(){
  	return {
  		pdfUrl:"./static/pdf/p1.pdf",
      // pdfUrl:'./static/pdf/password.pdf',
  		pageNum:1,
      pageTotalNum:1,
      pageRotate:0,
      // 加载进度
      loadedRatio:0,
      curPageNum:0,
  	}
  },
  mounted: function() {
  },
  methods: {
    prePage(){
      var p = this.pageNum
      p = p>1?p-1:this.pageTotalNum
      this.pageNum = p
    },
    nextPage(){
      var p = this.pageNum
      p = p<this.pageTotalNum?p+1:1
      this.pageNum = p
    },
    clock(){
      this.pageRotate += 90 
    },
    counterClock(){
      this.pageRotate -= 90 
    },
    password(updatePassword, reason) {
      updatePassword(prompt('password is "123456"'))
      console.log('...reason...')
      console.log(reason)
      console.log('...reason...')
    },
    pageLoaded(e){
      this.curPageNum = e
    },
    pdfError(error){
      console.error(error)
    },
    pdfPrintAll(){
      this.$refs.pdf.print()
    },
    pdfPrint(){
      this.$refs.pdf.print(100,[1,2])
    },
  }
}
</script>
<style lang="scss" scoped>
@import '../sass/_function.scss';
.pdf-tab{
  display: flex;
  flex-wrap: wrap;
  padding: 0 r(30);
  justify-content: space-between;
  .btn-def{
    border-radius: r(15);
    font-size: r(36);
    height: r(70);
    width: r(180);
    text-align: center;
    line-height: r(70);
    background: #409eff;
    color: #fff;
    margin-bottom: r(20);
  }
}
.pdf-total{
  text-align: center;
  font-size: r(34);

}
.pdf-process{
  text-align: center;
  font-size: r(34);
}
.pdf-num{
  text-align: center;
  font-size: r(34);
  margin-bottom: r(15);
}
</style>