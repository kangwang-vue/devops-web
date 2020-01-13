const columns = [
    {
        title: "仓库名称",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: 'name' },
        width:'15%'
    },
    {
        title: "sql仓库",
        dataIndex: "for_sql",
        key: "for_sql",
        scopedSlots: { customRender: 'for_sql' },
        width:'15%',
    },
    {
        title: "仓库描述",
        dataIndex: "description",
        key: "description",
        width:'25%'
    },
    {
        title: "关联ops应用",
        key: 'apps',
        dataIndex: 'apps',
        scopedSlots: { customRender: 'apps' },
        width:'15%'
    },
    {
        title: "仓库地址",
        dataIndex: "url",
        key: "url",
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