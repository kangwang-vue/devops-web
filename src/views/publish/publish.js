const columns = [
    {
        title: "账号",
        dataIndex: "account",
        key: "account",
        width:'15%'
    },
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        width:'15%',
    },
    {
        title: "所属角色组",
        dataIndex: " apps",
        key: " apps",
        width:'15%'
    },
    {
        title: "所在产品组",
        key: 'groups',
        dataIndex: 'groups',
        scopedSlots: { customRender: 'groups' },
        width:'25%'
    },
    {
        title: "创建时间",
        dataIndex: "created_on",
        key: "created_on",
        width:'15%'
    },
    {
        title: "操作",
        dataIndex: "x",
        key: "x",
        width:'15%',
        scopedSlots: {
            customRender: "action"
        }
    }
];




export { columns };