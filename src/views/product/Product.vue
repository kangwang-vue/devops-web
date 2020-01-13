<template>
<div class="product">
    <div class="header">
        <div class="title">产品列表</div>
    </div>
    <div class="middle">
        <div class="content">
            <div class="button">
                <a-button type="primary" @click="toggleModal(true)">新建产品</a-button>
            </div>
            <div class="table">
                <a-table :columns="columns" :dataSource="data">
                    <a slot="action" slot-scope href="javascript:;">配置</a>
                    <a slot="action" slot-scope href="javascript:;">删除</a>
                </a-table>
            </div>
        </div>
    </div>
    <ProductModal :visible="visible" v-on:toggleModal="toggleModal" />
</div>
</template>

<script>
import axios from 'axios';
import {
    columns
} from './product';
import ProductModal from './ProductModal';
export default {
    data() {
        return {
            data:[],
            columns,
            visible: false
        };
    },
    mounted() {
        axios({
                method: 'GET',
                url: '/cmdbapi/product/list',
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    page: 1,
                    page_size: 10
                }
            })
            .then((response) => {
                return response.data;
            }).then((response) => {
                if (Object.is(response.status, 200)) {
                    // 成功请求
                    this.$message.success(response.message, 3);
                    this.data=response.result.list;
                } else {
                    // 失败请求
                    this.$message.error(response.message, 3);
                }
            })
            .catch((error) => {
                this.$message.error('系统异常', 3);
            });
    },
    components: {
        ProductModal
    },
    methods: {
        toggleModal(value) {
            debugger
            this.visible = value;
        },
    }
};
</script>
