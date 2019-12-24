import class from '@vue/cli-service';
<template>
<div class="login">
    <div class="content">
        <div class="top">
            <div class="header">
                <img class="logo" alt="logo" src="../../assets/logo.png">
                <span class="title">云擎平台</span>
            </div>
            <div class="desc">DevOps 是一个完整的面向IT运维的工作流</div>
        </div>
        <div class="middle">
            <div class="ant-form-item">
                <div class="components-input-demo-presuffix">
                    <a-input placeholder="请输入域账号" v-model="userName" ref="userNameInput">
                        <a-icon slot="prefix" type="user" />
                    </a-input>
                </div>
            </div>
            <div class="ant-form-item">
                <div class="components-input-demo-presuffix">
                    <a-input placeholder="请输入密码" v-model="userName" ref="userNameInput">
                        <a-icon slot="prefix" type="lock" />
                    </a-input>
                </div>
            </div>
            <div class="ant-form-item">
                <a-checkbox @change="onChange">自动登录</a-checkbox>
                <div class="text">请使用明源云域账号登录</div>
                   <a-button type="primary" block>登录</a-button>
            </div>
        </div>
    </div>
</div>
</template>
