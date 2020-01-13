
const columns = [
    {
        title: "产品结构",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "产品描述",
        dataIndex: "description",
        key: "description"
    },
    {
        title: "创建者",
        dataIndex: "created_by",
        key: "created_by"
    },
    {
        title: "创建时间",
        dataIndex: "created_on",
        key: "created_on"
    },
    {
        title: "操作",
        dataIndex: "",
        key: "x",
        scopedSlots: {
            customRender: "action"
        }
    }
];



export {  columns };