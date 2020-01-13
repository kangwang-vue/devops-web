<template>
  <div class="demand">
    <div class="header">
      <div class="title">需求管理</div>
    </div>
    <div class="middle">
      <div class="form">
        <div class="form-title">欢迎来到TAPD</div>
        <div class="form-btn">
          <a-form id="login" :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                v-decorator="[ 'account', { rules: [{ required: true, message: '请输入用户名!' }] }, ]"
                placeholder="请输入邮箱或手机" 
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[ 'password', { rules: [{ required: true, message: '请输入密码!' }] }, ]"
                type="password"
                placeholder="请输入密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" class="login-form-button" block>登录</a-button>
            </a-form-item>
              <a-form-item>
              <a-button  html-type="submit" class="login-form-button" block>企业微信登录</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="form-bottom"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: "normal_login"
    });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        debugger;
        if (!err) {
          axios({
            method: "POST",
            url: "/api/user/requirement",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              ...values,
              ...{
                auto_login: values.auto_login ? 1 : 0
              }
            }
          })
            .then(response => {
              return response.data;
            })
            .then(response => {
              if (Object.is(response.status, 200)) {
                // 成功请求
                this.$message.success(response.message, 3);
                this.$router.push({ path: "/product" });
              } else {
                // 失败请求
                this.$message.error(response.message, 3);
              }
            })
            .catch(error => {
              this.$message.error("系统异常", 3);
            });
        }
      });
    }
  }
};
</script>

