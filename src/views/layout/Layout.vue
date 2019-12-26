import router from '../../router';
<template>
<div class="layout">
    <div class="layout-header">
        <div class="logo">
            <img src="../../assets/logo1.png" alt="云擎平台" />
        </div>
        <div class="selector">
            <a-select defaultValue="lucy" style="width: 160px" @change="handleChange">
                <a-select-option v-for="item in selectData" :key="item.value" :disabled="item.disabled">{{item.title}}</a-select-option>
            </a-select>
        </div>
    </div>
    <div class="layout-content">
        <div class="menu">
            <a-menu mode="vertical" @click="handleClick">
                <a-menu-item v-for="item in menuData" :key="item.value">{{item.title}}</a-menu-item>
            </a-menu>
        </div>
        <div class="right-content">
            <router-view />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            selectData: [{
                    value: "jack",
                    title: "Jack",
                    disabled: false
                },
                {
                    value: "lucy",
                    title: "Lucy",
                    disabled: false
                },
                {
                    value: "disabled",
                    title: "Disabled",
                    disabled: true
                },
                {
                    value: "Yiminghe",
                    title: "yiminghe",
                    disabled: false
                }
            ],
            menuData: [{
                    value: "/workspace",
                    title: "工作台"
                },
                {
                    value: "/product",
                    title: "产品管理"
                },
                {
                    value: "/requirement",
                    title: "需求管理"
                },
                {
                    value: "/branch",
                    title: "分支管理"
                },
                {
                    value: "/publish",
                    title: "发布管理"
                },
                {
                    value: "/monitoring",
                    title: "运行监控"
                },
                {
                    value: "/dashboard",
                    title: "仪表盘"
                }
            ],
        };
    },
    methods: {
        handleClick({
            item,
            key,
            keyPath
        }) {
            this.$router.push(key)
        }
    }
};
</script>
