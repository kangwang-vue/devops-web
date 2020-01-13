<template>
<div>
    <a-modal title="新增产品" v-model="visible" @ok="handleOk" @cancel="handleCancel">
        <a-form :form="form">
            <a-form-item label="产品名称" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-input v-decorator="['product_name', { rules: [{ required: true, message: '请输入产品名称' }] }]" />
            </a-form-item>
            <a-form-item label="产品编码" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-input v-decorator="['product_coding', { rules: [{ required: true, message: '请输入产品编码' }] }]" />
            </a-form-item>
            <a-form-item label="需求源类型" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-radio-group v-decorator="['source_type']">
                    <a-radio v-for="item in requirementType" :value="item.value" :key="item.value" :disabled="item.disabled" :defaultValue="value1" >{{item.label}}</a-radio>
                </a-radio-group>
            </a-form-item>

            <a-form-item label="Tapd项目" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['Tapd project',{ rules: [{ required: true, message: '请输入workspace_id' }] },]">
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="产品描述" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
               <a-textarea placeholder="" :rows="4" />
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
                    value1: "tapd",
                    label: "Tapd",
                },
                {
                    value: "jira",
                    label: "Jira",
                    disabled: "flase"
                },
                {
                    value: "manual",
                    label: "手工录入",
                }
            ],
            showTapd: true
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, {
            name: "product"
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
                if (!err) {
                    axios({
                            method: "POST",
                            url: "/api/user/login",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: {
                                ...values,
                                ...{
                                    auto_login: values.auto_login ? 1 : 0
                                }
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
                                    path: "/product"
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
