<template>
  <div class="product">
    <div class="header">
      <div class="title">产品列表</div>
    </div>
    <div class="middle">
      <div class="content">
        <div class="button">
          <a-button type="primary">新建产品</a-button>
        </div>
        <div class="table">
          <a-table :columns="columns" :dataSource="data">
            <a slot="action" slot-scope href="javascript:;">配置 删除</a>
          </a-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  { title: "产品结构", dataIndex: "name", key: "name" },
  { title: "产品描述", dataIndex: "age", key: "age" },
  { title: "创建者", dataIndex: "address", key: "address" },
  { title: "创建时间", dataIndex: "data", key: "data" },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: 1,
    name: "v1.2.3.4",
    age: "",
    address: "王维林",
    data: "",
  },
  {
    key: 2,
    name: "验证配置保存问题",
    age: "验证版本配置swarm保存失败的问题",
    address: "杨晓皎",
    data: "",
  },
  {
    key: 3,
    name: "测试一下下",
    age: "",
    address: "胥朝阳",
    data: "",
  },
  {
    key: 4,
    name: "k8s上线验证",
    age: "这是一个k8s类型的产品，用做验证",
    address: "杨晓皎",
    data: "",
  },
  {
    key: 5,
    name: "王维林测试",
    age: "",
    address: "王维林",
    data: "",
  },
  {
    key: 6,
    name: "晓皎全流程demo",
    age: "晓皎测试专用",
    address: "wuhm",
    data: "",
  },
  {
    key: 7,
    name: "联调测试",
    age: "联调测试啊",
    address: "wuhm",
    data: "",
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>