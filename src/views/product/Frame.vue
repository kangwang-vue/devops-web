<template>
  <div class="frame">
    <div class="layout">
      <div class="layout-header">
        <div class="layout-logo">
          <img src="../../assets/logo1.png" alt="云擎平台" />
        </div>
        <div class="selector">
          <a-select defaultValue="lucy" style="width: 160px" @change="handleChange">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </div>
        <div class="header-right">
          <a-icon type="question-circle" />
        </div>
      </div>
      <div class="layout-content">
        <div class="menu">
          <a-menu mode="vertical" @click="handleClick">
            <a-menu-item key="1">工作台</a-menu-item>
            <a-menu-item key="2">数据基础管理</a-menu-item>
            <a-menu-item key="3">需求管理</a-menu-item>
            <a-menu-item key="4">分支管理</a-menu-item>
            <a-menu-item key="5">发布管理</a-menu-item>
            <a-menu-item key="6">运行监控</a-menu-item>
            <a-menu-item key="7">仪表盘</a-menu-item>
          </a-menu>
        </div>
        <div class="menu-content">
            <div class="content-header">
                <img src="../../assets/portrait.png" alt="头像">
                <div class="content-title">
                    <div class="title">王维林，欢迎进入云擎平台！</div>
                    <div>DevOps的目的是更快速，更可靠地创建质量更好的软件，同时开发，运维团队之间进行更多的沟通和协作。它是一个自动化过程，允许快速，安全和高质量的软件开发和发布，同时保持所有利益相关者在一个循环中。</div>
                </div>
            </div>
            <div class="content-chart">
                <img src="../../assets/devops-page.png" alt="结构图">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
