<template>
<div>
    <a-modal title="新增成员" v-model="visible" @ok="handleOk" @cancel="handleCancel">
        <a-form :form="form">
           <a-form-item label="成员" :label-col="{ span: 7 }" :wrapper-col="{ span: 15 }">
                <a-input v-decorator="['member', { rules: [{ required: true, message: '请输入成员' }] }]" placeholder="请输入域账号搜索" />
            </a-form-item>
            <a-form-item label="所属组" :label-col="{ span: 7}" :wrapper-col="{ span: 15 }">
                <a-select v-decorator="['group_name',{ rules: [{ required: true, message: '请输入所属组'}] },]">
                    <a-select-option value="male">male</a-select-option>
                    <a-select-option value="female">female</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</div>
</template>

<script>
export default {
    props: ["visible"],
    beforeCreate() {
        this.form = this.$form.createForm(this, {
            name: "publish"
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
                                    path: "/publish"
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