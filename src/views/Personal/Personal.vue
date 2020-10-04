<template>
  <div>
    <div class="container">
      <div class="p_top">
        <div>
            <!-- 如果用户头像没设置，就设置默认图片 -->
          <img :src="info.head_img || defaultHeadImg" alt="头像" />
          <!-- 判断用户是否登陆 token为空即未登陆，显示立即登陆，否则显示用户名-->
          <router-link to="/login" v-if="getToken === ''">
            <p>立刻登录</p>
          </router-link>
          <p v-else>{{ info.name }}</p>
        </div>
      </div>
      <!-- 判断用户token不等于空，才会退出登陆 -->
      <button v-if="getToken !== ''" class="green" @click="signOut">
        退出登录
      </button>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter";
import { getUserInfo } from "@/api/getData.js";
import defaultHeadImg from "@/assets/logo.png";

export default {
  components: {
    CommonFooter,
  },

  data() {
    return {
      info: {},
      defaultHeadImg: defaultHeadImg,
    };
  },
  // 通过数据源获取token
  // 缓存功能
  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },

  methods: {
    //获取用户信息
    async getInfo() {
      try {
        // 传入 token
        const result = await getUserInfo(this.getToken);
        if (result.data.code === 0) {
          this.info = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //退出登录
    async signOut() {
      //清除token
      await this.$store.dispatch("clearToken");
      // 本地存储里清除token
      localStorage.removeItem("token");

      //刷新页面
      location.reload();
    },
  },

  mounted() {
    // 如果有token，就获取用户信息
    if (this.getToken) {
      this.getInfo();
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  // 顶部头像区域
  .p_top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #2c3f54;
    div {
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
      }
      p {
        font-size: 16px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
}
// 退出登录
.green {
  display: block;
  background-color: #3bb149;
  border: none;
  outline: none;
  width: 80%;
  height: 40px;
  margin: 20px auto 0;
  color: #fff;
  border-radius: 20px;
}
</style>