<template>
<div>
    <a-modal title="新增项目仓库" v-model="visible" @ok="handleOk" @cancel="handleCancel">
        <a-form :form="form">
            <a-form-item label="仓库源" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['WarehouseSource',{ rules: [{ required: true, message: '请选择仓库源' }] },]">
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="仓库名称" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['Warehousename',{ rules: [{ required: true, message: '请选择仓库' }] },]"></a-select>
            </a-form-item>
          <a-form-item label="仓库地址" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
               <a-textarea placeholder="" :rows="2" disabled/>
            </a-form-item>
            <a-form-item label="仓库启用" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-radio-group v-decorator="['warehouse_start']">
                    <a-radio v-for="item in requirementType" :value="item.value" :key="item.value" :disabled="item.disabled" :defaultValue="value1" >{{item.label}}</a-radio>
                </a-radio-group>
            </a-form-item>
                        <a-form-item label="设为sql仓库" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-radio-group v-decorator="['warehouse_sql']">
                    <a-radio v-for="item in requirementType" :value="item.value" :key="item.value" :disabled="item.disabled" :defaultValue="value1" >{{item.label}}</a-radio>
                </a-radio-group>
            </a-form-item>

            <a-form-item label="关联ops应用" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['Associated_ops_application',{ rules: [{ required: true, message: '请选择关联ops应用' }] },]">
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="语言" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['Warehousename',{ rules: [{ required: true, message: '请选择语言，再设置流水线引擎模板' }] },]"></a-select>
            </a-form-item>
            <a-form-item label="产品描述" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-textarea placeholder="" :rows="2" />
            </a-form-item>
        </a-form>
    </a-modal>
</div>
</template>

<script>
export default {
    props: ["visible"],
    data() {
        return {
            requirementType: [{
                    value1: "否",
                    label: "否",
                  
                },
                {
                    value: "是",
                    label: "是"
                }
            ],
            showTapd: true,
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, {
            name: "branch"
        });
    },
    methods: {
        handleOk(e) {
            this.handleSubmit(e);
        },
        handleCancel() {
            this.$emit("toggleModal", false);
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                debugger;
                if (!err) {
                    axios({
                            method: "POST",
                            url: "/api/user/login",
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
                                this.$router.push({
                                    path: "/branch"
                                });
                            } else {
                                // 失败请求
                                this.$message.error(response.message, 3);
                            }
                        })
                        .catch(error => {
                            this.$message.error("系统异常", 3);
                        });
                }
            });
        }
    }
};
</script>
