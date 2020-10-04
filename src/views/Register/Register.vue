<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!--名称-->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!--手机号-->
        <cube-form-item :field="fields[1]"></cube-form-item>
        <!--密码-->
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>
    <!-- 跳转到登陆链接 -->
    <router-link to="/login" class="reg">登录</router-link>
  </div>
</template>

<script>
//注册接口
import { registerApi } from "@/api/getData.js";
export default {
  data() {
    return {
      model: {
        phoneValue: "",
        pwdValue: "",
        nameValue: "",
      },
      // 校验规则部分
      fields: [
        {
          type: "input",
          modelKey: "nameValue",
          label: "名称",
          props: {
            // 属性
            placeholder: "请输入名称",
          },
          rules: {
            // 规则
            required: true,
            notWhitespace: true
          },
          messages: {
            // 错误信息
            required: "名称不能为空",
            notWhitespace: "名称不能为空白符"
          },
        },
        {
          type: "input",
          modelKey: "phoneValue",
          label: "手机号",
          props: {
            placeholder: "请输入手机",
          },
          rules: {
            required: true,
            len: 11,
            pattern: /^1[3456789]\d{9}$/,
          },
          messages: {
            pattern: "请输入正确的手机号",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
          },
          messages: {
            pattern: "密码至少8-16个字符,包含大小字母和数字",
          },
        },
      ],
    };
  },
  methods: {
    submitHandler(e, model) {
      console.log(model);
      e.preventDefault();
      //调用注册接口
      registerApi(model.phoneValue, model.pwdValue, model.nameValue).then(
        (res) => {
          if (res.data.code === 0) {
            const toast = this.$createToast({
              txt: "注册成功",
              type: "correct",
              time: 1500,
            });
            toast.show();
          }
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>