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
import HomeBanner from "./Component/Banner"
import VideoList from "./Component/VideoList"
import CommonFooter from "@/components/CommonFooter"

export default {
    //注册组件
    components: {
        HomeBanner,
        VideoList,
        CommonFooter
    }
}




</script>

<style lang="sass" scoped>

</style>