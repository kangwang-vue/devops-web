const columns = [
    {
        title: "版本号",
        dataIndex: "name",
        key: "name",
        width: '15%'
    },
    {
        title: "描述",
        dataIndex: "description",
        key: "description",
        width: '20%',
    },
    {
        title: "版本类型",
        dataIndex: "version_type",
        key: "version_type",
        scopedSlots: { customRender: 'version_type' },
        width: '15%'
    },
    {
        title: "迭代周期",
        key: 'start_time',
        dataIndex: 'start_time',
        scopedSlots: { customRender: 'start_time' },
        width: '15%'
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
        scopedSlots: { customRender: 'status' },
        width: '15%'
    },
    {
        title: "操作",
        dataIndex: "x",
        key: "x",
        width: '20%',
        scopedSlots: {
            customRender: "action"
        }
    }
];




export { columns };