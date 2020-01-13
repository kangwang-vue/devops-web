<template>
  <div class="publish">
    <div class="header">
      <div class="title">列表成员</div>
    </div>
    <div class="middle">
      <div class="content">
        <div class="button">
          <a-button type="primary" @click="toggleModal(true)">添加成员</a-button>
        </div>
        <div class="table">
          <a-table rowKey="id" :columns="columns" :dataSource="data">
            <span slot="groups" slot-scope="groups">
              <span v-for="item in groups.group_name" :key="item">{{item}}</span>
            </span>
            <a slot="action" slot-scope href="javascript:;">编辑</a>
            <a slot="action" slot-scope href="javascript:;">删除</a>
          </a-table>
        </div>
      </div>
    </div>
       <PublishModal :visible="visible" v-on:toggleModal="toggleModal" />
  </div>
</template>

<script>
import axios from "axios";
import { columns } from "./publish";
import PublishModal from "./PublishModal";
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
      url: "/brapi/user/get_group_members",
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
  components: {
        PublishModal
  },
  methods: {
    toggleModal(value) {
      this.visible = value;
    }
  }
};
</script>
