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
  <div>{{pageNum}}/{{pageTotalNum}}</div>
  <div>进度：{{loadedRatio}}</div>
  <div>页面加载成功: {{curPageNum}}</div>
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
  		// pdfUrl:"http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf",
      pdfUrl:'./static/password.pdf',
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
<style scoped>
.pdf-tab{
  display: flex;
  flex-wrap: wrap;
}
.pdf-tab .btn-def{
  border-radius: 10px;
  font-size: 18px;
  height: 35px;
  width: 80px;
  background: #409eff;
  color: #fff;
  line-height: 35px;
  margin-right: 30px;
  margin-bottom: 10px;
}
</style>