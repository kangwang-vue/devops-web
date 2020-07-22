<template>
  <div class="login">
    <div class="content">
      <div class="top">
        <div class="header">
          <img class="logo" alt="logo" src="../../assets/logo.png" />
          <span class="title">云擎平台</span>
        </div>
        <div class="desc">DevOps 是一个完整的面向IT运维的工作流</div>
      </div>
      <div class="middle">
        <!-- <div class="ant-form-item">
                <div class="presuffix">
                    <a-input placeholder="请输入域账号" v-model="user.username" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </div>
            </div>
            <div class="ant-form-item">
                <div class="presuffix">
                    <a-input placeholder="请输入密码" v-model="user.password" ref="passwordInput">
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </div>
            </div>
            <div class="ant-form-item">
                <a-checkbox :checked="user.autoLogin" @change="onChange">自动登录</a-checkbox>
                <div class="text">请使用明源云域账号登录</div>
                   <a-button type="primary" block>登录</a-button>
        </div>-->
        <a-form
          id="login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'account',
                { rules: [{ required: true, message: '请输入用户名!' }] },
              ]"
              placeholder="用户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码!' }] },
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'auto_login',
                { valuePropName: 'checked', initialValue: true },
              ]"
            >
              自动登录
            </a-checkbox>
            <div>请使用明源云域账号登录</div>
            <div>{{ getMessage }}</div>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              >登录</a-button
            >
            <a-button @click="changeName()">改名</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { Button } from 'ant-design-vue';
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: "normal_login",
    });
  },
  data() {
    return {
      name: "wangkang",
      age: 20,
    };
  },
  methods: {
      changeName(){
          this.name="wanglin"
      },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          axios({
            method: "POST",
            url: "/brapi/user/login",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              ...values,
              ...{
                auto_login: values.auto_login ? 1 : 0,
              },
            },
          })
            .then((response) => {
              return response.data;
            })
            .then((response) => {
              if (Object.is(response.status, 200)) {
                // 成功请求
                this.$message.success(response.message, 3);
                this.$router.push({ path: "/product" });
                Cookies.set("token", response.result.token);
              } else {
                // 失败请求
                this.$message.error(response.message, 3);
              }
            })
            .catch((error) => {
              this.$message.error("系统异常", 3);
            });
        }
      });
    },
  },
  computed: {
    getMessage:{
      get:function(){return `我的名字${this.name}，我的年龄${this.age}`},
      set:function(){
          console.log(123)
      }
    },
  },
};
</script>
