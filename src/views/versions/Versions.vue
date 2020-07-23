<template>
  <div class="versions">
    <div class="header">
      <div class="title">版本列表</div>
      <a-select style="width: 120px" @change="handleChange">
        <a-select-option v-for="item in products" :key="item.id" :value="item.id">{{item.name}}</a-select-option>
      </a-select>
    </div>
    <div class="middle">
      <div class="content">
        <div class="search">
          <a-form :form="form" layout="inline">
            <a-form-item label="版本号" >
              <a-input />
            </a-form-item>
            <a-form-item label="版本类型">
              <a-select  style="width:200px">
                <a-select-option value="male">male</a-select-option>
                <a-select-option value="female">female</a-select-option>
              </a-select>
            </a-form-item>
             <a-form-item label="状态" >
              <a-select style="width:500px">
                <a-select-option value="male">male</a-select-option>
                <a-select-option value="female">female</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item class="form-button">
              <a-button type="primary"  style="margin-right:10px">查询</a-button>
               <a-button>重置</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="button">
          <a-button type="primary" @click="toggleModal(true)" style="margin-right:10px">新建日常版本</a-button>
          <a-button @click="toggleModal(true)">新建热修复版本</a-button>
        </div>
        <div class="table">
          <a-table rowKey="id" :columns="columns" :dataSource="data">
            <span slot="apps" slot-scope="apps">
              <span v-for="item in apps.app_codes" :key="item">{{item}}</span>
            </span>
            <span slot="version_type" slot-scope="version_type">
              <span v-if="version_type===2">热修复</span>
              <span v-else>日常迭代</span>
            </span>
            <span slot="start_time" slot-scope="start_time,record">
              <span>{{start_time}}</span>
              <br />
              <span>{{record.release_time}}</span>
            </span>

            <div class="color-button" slot="status" slot-scope="status,record">
              <div class="light-blue-button" v-if="status==='new_added'">
                <span>新增</span>
              </div>
              <div class="dark-blue-button" v-else-if="record.status==='developing'">
                <span>开发中</span>
              </div>
              <div class="green-button" v-else>
                <span>已发布</span>
              </div>
            </div>
            <a slot="action" slot-scope href="javascript:;">编辑</a>
            <a slot="action" slot-scope href="javascript:;">删除</a>
          </a-table>
        </div>
      </div>
    </div>
    <VersionsModal :visible="visible" v-on:toggleModal="toggleModal" />
  </div>
</template>

<script>
import axios from "axios";
import { columns } from "./versions";
import VersionsModal from "./VersionsModal";
export default {
  data() {
    return {
      data: [],
      // 产品数据
      products: [],
      columns,
      visible: false
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "/brapi/version/list",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        product_id: "39ee904a-4c6b-2c74-cfb3-b0836bc5493e",
        page: 1,
        page_size: 10
      }
    })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (Object.is(response.status, 200)) {
          // 成功请求
          this.$message.success(response.message, 3);
          this.data = response.result.list;
        } else {
          // 失败请求
          this.$message.error(response.message, 3);
        }
      })
      .catch(error => {
        this.$message.error("系统异常", 3);
      });

    // 请求user_info拿到产品信息
    axios({
      method: "GET",
      url: "/brapi/user/info",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (Object.is(response.status, 200)) {
          // 成功请求
          this.$message.success(response.message, 3);
          this.products = response.result.own_product;
        } else {
          // 失败请求
          this.$message.error(response.message, 3);
        }
      })
      .catch(error => {
        this.$message.error("系统异常", 3);
      });
  },
  components: {
    VersionsModal
  },
  methods: {
    toggleModal(value) {
      this.visible = value;
    },

    handleChange(value) {
      axios({
        method: "GET",
        url: "/brapi/version/list",
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          product_id: value,
          page: 1,
          page_size: 10
        }
      })
        .then(response => {
          return response.data;
        })
        .then(response => {
          if (Object.is(response.status, 200)) {
            // 成功请求
            this.$message.success(response.message, 3);
            this.data = response.result.list;
          } else {
            // 失败请求
            this.$message.error(response.message, 3);
          }
        })
        .catch(error => {
          this.$message.error("系统异常", 3);
        });
    }
  }
};
</script>
