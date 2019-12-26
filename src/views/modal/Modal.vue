<template>
  <div class="button">
    <a-modal title="新增产品" v-model="visible" @ok="handleOk">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="产品名称" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
          <a-input
            v-decorator="['产品名称', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>

        <a-form-item label="需求源类型" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
          <a-radio>Tapd</a-radio>
          <a-radio>Jira</a-radio>
          <a-radio>手工录入</a-radio>
        </a-form-item>
        <a-form-item label="Tapd项目" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
          <a-select
            v-decorator="['Tapd项目',{ rules: [{ required: true, message: 'Please select your gender!' }] },]"
            @change="handleSelectChange"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
          
        </a-form-item>
         <a-form-item label="产品描述" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
              <a-input v-decorator="['产品名称', { rules: [{ required: true, message: 'Please input your note!' }] }]"/>
        </a-form-item>
    
          <a-form-item label="关联ops产品类型" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
        <a-radio>关联已有</a-radio>
        <a-radio>同步创建</a-radio>
      </a-form-item>
      <a-form-item label="关联ops产品" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
          <a-select
            v-decorator="['Tapd项目',{ rules: [{ required: true, message: 'Please select your gender!' }] },]"
          >
           
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>