<template>
  <div class="login">
    <div class="cloud"></div>
    <el-card>
      <div slot="header" class="flex-between clearfix">
        <span>Welcome to Rfly-create</span>
        <i class="el-icon-s-promotion"></i>
      </div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        :hide-required-asterisk="true"
        label-width="60px"
      >
        <div>
          <el-form-item label="账号" prop="account">
            <el-input v-model="form.account" type="text"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </div>
        <div class="flex-center">
          <el-button @click="submitForm('form')">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-form>
      <el-link class="flex-center" href="http://rfly.site" target="_blank"
        >make Ryanho97 <i class="el-icon-unlock"></i> Open source</el-link
      >
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 6, max: 16, message: "账号格式错误", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "密码格式错误", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("提交成功！");
          // 执行其他提交逻辑或表单提交操作
        } else {
          console.log("表单验证不通过");
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #91ebbe, #a6eee8);
}
.el-card {
  width: 500px;
  margin: 100px auto;
  font-size: 20px;
}
.el-link {
  margin-top: 20px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 768px) {
    .login{
        height: 100svh;
    }
    .el-card {
    width: auto;
    margin: 10vh auto;
  }
  .cloud{
    animation: flyCloud 6s linear infinite;
  }
}
@keyframes flyCloud {
  0% {
    left: -100px;
  }
  100% {
    left: calc(100% - 100px);
  }
}

.cloud {
  position: absolute;
  top: 50px;
  left: -100px;
  width: 100px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: white 65px -15px 0 -4px,
              white 25px -25px,
              white 30px 10px,
              white 60px 15px 0 -10px,
              white 80px 2px 0 -2px;
  animation: flyCloud 10s linear infinite;
}
</style>
