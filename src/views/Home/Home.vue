<template>
  <div>
    <!-- 轮播图组件 -->
    <home-banner :banners="banners"></home-banner>
    <!-- 视频列表组件 -->
    <video-list :videoList="videoList"></video-list>
    <!-- 底部导航栏组件 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
// 导入组件模块
import HomeBanner from "./Component/Banner";
import VideoList from "./Component/VideoList";
import CommonFooter from "@/components/CommonFooter";

// 导入接口API
import { getBanner, getVideoList } from "@/api/getData.js";

export default {
  //注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter,
  },
  //声明数据源
  data() {
    return {
      // 轮播图与视频列表数据都是数组形式
      banners: [],
      videoList: [],
    };
  },
  // 定义方法
  methods: {
    // 异步调用 getBanner 接口
    // 获取轮播图数据
    async getBannerData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getBanner();
        console.log(result);
        console.log(result.data.code == 0)
        if (result.data.code == 0) {
          this.banners = result.data.data;
        }
      }catch(error){
          console.lo(error)
      }
    },

    //获取视频列表
    async getVList(){
        try{
            const result = await getVideoList();
            if (result.data.code == 0) {
                this.videoList = result.data.data;
            }
        }catch(error){
            console.lo(error)
        }
    }
  },
  mounted(){
      //当页面渲染完成时调用方法获取数据
      this.getBannerData();
      this.getVList()
  }
  
};
</script>

<style lang="sass" scoped>
</style>