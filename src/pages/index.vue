<template>
  <div class="index">
    <!-- <div class="dex_user">
      <img class="user_icon" src="../assets/images/userIcon.jpg"/>
    </div> -->
    <div class="list">
      <div 
        class="li"
        v-for="(item, index) in listData"
        @click.stop="link(item.listLink)">{{item.listName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      listData:[
        {listName:'1、Vue-Pdf插件',listLink:'/pdf'},
        {listName:'2、Vue自定义日历组件',listLink:'/calendar'},
      ]
    }
  },
  methods: {
    link(link) {
      this.$router.push(link)
    },
  }
}
</script>
<style lang="scss" scoped>
@import '../sass/_function.scss';
.index {
  padding: 0 r(30);
  background: #282c34;
  min-height: 100vh;
  .dex_user{
    height: r(300);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: r(80);
    .user_icon{
      width: r(200);
      height: r(200);
      display: block;
      border-radius: 50%;
    }
  }
  .list{
    font-size: r(36);
    color: #41b883;
    padding: r(30) 0 0 r(30);
    .li{
      display: flex;
      align-items: center;
      text-align: left;
      height: r(80);
      font-weight: bold;
    }
  }
}
</style>
