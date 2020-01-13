<template>
  <div class="branch">
    <div class="header">
      <div class="title">仓库列表</div>
    </div>
    <div class="middle">
      <div class="content">
        <div class="button">
          <a-button type="primary" @click="toggleModal(true)">新建项目仓库</a-button>
        </div>
        <div class="table">
          <a-table rowKey="id" :columns="columns" :dataSource="data">
            <span slot="apps" slot-scope="apps">
              <span v-for="item in apps.app_codes" :key="item">{{item}}</span>
            </span>
            <span slot="for_sql" slot-scope="for_sql">
              <!-- v-if~v-else判断数值 -->
              <span v-if="for_sql===1">是</span>
              <span v-else>否</span>
            </span>
            <span slot="name" slot-scope="name,record">
              <a :href="record.webUrl" target="_blank">{{name}}</a>
            </span>
            <a slot="action" slot-scope href="javascript:;">编辑</a>
            <a slot="action" slot-scope href="javascript:;">删除</a>
          </a-table>
        </div>
      </div>
    </div>
    <BranchModal :visible="visible" v-on:toggleModal="toggleModal" />
  </div>
</template>

<script>
import axios from "axios";
import { columns } from "./branch";
import BranchModal from "./BranchModal";
export default {
  data() {
    return {
      data: [],
      columns,
      visible: false
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "/brapi/repo/list",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        product_id: "39eea02c-fb9a-1e8b-e6db-8fd7e17ed3a6",
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
  },
  components:{
      BranchModal
  },
  methods: {
    toggleModal(value) {
      this.visible = value;
    }
  }
};
</script>
